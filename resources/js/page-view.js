import 'moment';
import './scripts/annotator/toastr';
import {TitleService} from "./scripts/annotator/title-service";
const annotator = require('./scripts/annotator');
import './scripts/annotator/jquery.imgareaselect/scripts/jquery.imgareaselect.js'
import $ from 'jquery';
import './components/event-bus';

// Url retrieval function
window.baseUrl = function(path) {
    let basePath = document.querySelector('meta[name="base-url"]').getAttribute('content');
    if (basePath[basePath.length-1] === '/') basePath = basePath.slice(0, basePath.length-1);
    if (path[0] === '/') path = path.slice(1);
    return basePath + '/' + path;
};

window.importVersioned = function(moduleName) {
    const version = document.querySelector('link[href*="/dist/styles.css?version="]').href.split('?version=').pop();
    const importPath = window.baseUrl(`dist/${moduleName}.js?version=${version}`);
    return import(importPath);
};

// Set events and http services on window
import events from "./services/events"
import httpInstance from "./services/http"
window.$http = httpInstance;
window.$events = events;

// Load Components
import components from "./components"
import moment from "moment";
components();


window.$ = window.jQuery = $;
window.global = globalThis;
const _t = annotator.util.gettext;
function annotatorImageSelect(options) {

    options = options || {};

    // Object to hold local state
    var s = {
        interactionPoint: null,
        ias: null
    };

    $(global.document.body)
        .on('click', '.imgselection, .imgareaselect-outer, .annotator-cancel', function (evt) {
            $(".tmp-img-selection").remove();
        });

    // utility methods to support image annotation
    var imgselect_utils = {
        // image area inital setup
        selectionSetup: function () {

            // escape key exits editor, so should also clear temporary selection
            $('.annotator-editor textarea').on('keydown', function (e) {
                if (event.which === 27) {  // escape
                    $(".tmp-img-selection").remove();
                }
            });
            return true;
        },

        hideAnnotatorEditorAdder: function () {
            // hide annotator editor window, adder button, and deselect text
            // whenever an image selection is drawn or adjusted

            // hide editor if visible
            var $visible_editor = $(".annotator-editor:not(.annotator-hide)");
            if ($visible_editor.length > 0) {
                $visible_editor.addClass('annotator-hide');
            }
            // hide the adder whenever a new selection is started
            s.adder.hide();
            // unselect any selected text to avoid confusion
            // between text/image selection & annotation
            global.getSelection().removeAllRanges();
        },

        // image area selection start event
        selectionStart: function (img, selection) {
            imgselect_utils.hideAnnotatorEditorAdder();
        },

        // image area selection change event
        selectionChange: function (img, selection) {
            imgselect_utils.hideAnnotatorEditorAdder();
        },

        // image area selection end event
        selectionEnd: function (img, selection) {
            if (selection.width < 10 || selection.height < 10) {
                return;
            }
            // create a preliminary annotation object.
            // based on makeAnnotation from annotator.ui.main
            var annotation = {
                quote: '',   // image selection = no text quotation
                // NOTE: normal highlights include xpath dom ranges
                // we don't have anything like that, but annotator
                // seems happy enough with an empty list.
                ranges: [],
                // image selection details
                image: imgselect_utils.imageSelection(img, selection)
            };

            $(".annotator-adder+div").addClass('active-img-selection');
            // calculate "interaction point" - using top right of selection box
            s.interactionPoint = imgselect_utils.selectionPosition(img, selection);
            // show the annotation adder button
            s.adder.load(annotation, s.interactionPoint);

            // set editor window is not positioned relative to the adder element
            var offset = $(s.adder.element[0]).offset();

            if (offset) {
                const position = {
                    top: offset.top + 50,
                    left: offset.left - (selection.width / 2)
                };
                $(".annotator-editor")
                    .data('relative-position', position)
                    .css(position);
            }
        },

        // draw a highlight element for an image annotation
        drawImageHighlight: function (annotation) {
            // if annotation is not an image selection annotation,
            // or does not provide needed attributes, skip
            if (!annotation.image || !annotation.image.src) {
                return;
            }
            var imgselection = annotation.image;
            var img = $('img[src$="' + imgselection.src + '"]').first();
            if (img.length === 0) {
                // if the highlighted image is not found, skip
                return;
            }
            // create a highlight element
            var hl = $(document.createElement('span'));
            hl.addClass('annotator-hl');
            // set position, width, height, annotation id

            var img_offset = $(img).offset()

            hl.css({
                width: imgselection.w,
                height: imgselection.h,
                left: img_offset.left + imgselection.x,
                top: img_offset.top + imgselection.y,
                position: 'absolute',
                display: 'block'
            });
            // Add a data attribute for annotation id if the annotation has one
            if (typeof annotation.id !== 'undefined' && annotation.id !== null) {
                hl.attr('data-annotation-id', annotation.id);
            }
            // Save the annotation data on each highlighter element.
            hl.attr('data-annotation', JSON.stringify(annotation));

            options.container.append(hl);

            // return the added highlight element
            return hl;
        },

        getSelectionReferences: function (img) {
            var body = global.document.body;

            var offset = {top: 0, left: 0};
            if ($(body).css('position') !== "static") {
                offset = $(body).offset();
            }
            // get position based on image offset + selection position
            var img_offset = $(img).offset();
            return {offset, img_offset};
        },

        // get position from image + selection
        selectionPosition: function (img, selection) {
            // based on annotator.util.mousePosition
            // body offset logic borrowed from annotator.util
            var {offset, img_offset} = this.getSelectionReferences(img);
            // setting adder to top right corner of selection for now
            return {
                top: img_offset.top + selection.y1 - offset.top,
                left: img_offset.left + selection.x2 - offset.left
            };
        },

        imageSelection: function (img, selection) {

            // storing all dimensions as percentages so it can
            // be scaled for different sizes if necessary
            var w = (selection.x2 - selection.x1),
                h = (selection.y2 - selection.y1);
            return {
                // full uri to the image
                uri: img.src,
                // store src as it appears in the document, so we can find it again
                src: $(img).attr('src'),
                x: selection.x1,
                y: selection.y1,
                w: w,
                h: h
            };
        },

    };

    // export annotator module hooks
    return {

        start: function (app) {
            if (!jQuery.imgAreaSelect || typeof jQuery.imgAreaSelect !== 'function') {
                console.warn(_t("To use the ImageSelect annotator module, you must " +
                    "include imgAreaSelect in the page."));
                return;
            }
            // NOTE: might be possible to set fallback logic to identify
            // annotable image content, but this is probably good enough for now.
            if (!options.element) {
                console.warn(_t("To use the ImageSelect annotator module, you must " +
                    "configure elements for image selection."));
                return;
            }

            app.imgselect_utils = imgselect_utils;

            // enable image selection on configured annotatable image
            var ias_opts = {
                instance: true,  // return an instance for later interaction
                handles: true,
                onInit: imgselect_utils.selectionSetup,
                onSelectStart: imgselect_utils.selectionStart,
                onSelectChange: imgselect_utils.selectionChange,
                onSelectEnd: imgselect_utils.selectionEnd,
                keys: false  // disable keyboard shortcuts because they conflict with annotator keys
            };
            // NOTE: imgAreaSelect is supposed to handle multiple elements,
            // but cancelSelection does NOT work on secondary images
            // As a workaround, initialize one imgAreaSelect instance for
            // each image configured for image annotation
            s.ias = $(options.element).toArray().map(function (el) {
                return $(el).imgAreaSelect(ias_opts);
            });

            // Customize the mouse cursor to indicate when configured image
            // can be selected for annotation.
            options.element.css({'cursor': 'crosshair'});

            // create annotation adder
            // borrowed from annotator.ui.main
            s.adder = new annotator.ui.adder.Adder({
                onCreate: function (ann) {
                    const $editor = $(".annotator-editor");
                    app.annotations.create(ann);
                    $editor.css($editor.data('relative-position'));
                }
            });
            s.adder.attach();

            return true;
        },

        beforeAnnotationCreated: function (annotation) {
            // hide the image selection tool
            s.adder.hide();
            // cancel image selection box if there is one
            // (mirrors annotator logic for unselecting text)
            if (s.ias !== null) {
                $.each(s.ias, function (idx, ias) {
                    ias.cancelSelection();
                });
            }

            // if this is an image annotation,
            // create a temporary highlight to show what is being annotated
            if (annotation.image && annotation.image.src) {
                var tmp_hl = imgselect_utils.drawImageHighlight(annotation);
                if (tmp_hl) {
                    tmp_hl.addClass('tmp-img-selection').removeClass('annotator-hl');
                }
            }
            return true;
        },

        annotationCreated: function (annotation) {
            // hide the temporary highlight
            $(".active-img-selection").removeClass('.active-img-selection');
            // show image highlight div for new image annotation
            $(".tmp-img-selection").remove();
            imgselect_utils.drawImageHighlight(annotation);
            return true;
        },

        // nothing to do for annotationUpdated
        // (image selection not currently editable)

        beforeAnnotationDeleted: function (annotation) {
            // remove highlight element for deleted image annotation
            if (typeof annotation.id !== "undefined" && annotation.image && annotation.image.src) {
                $('.annotator-hl[data-annotation-id=' + annotation.id + ']').remove();
            }
            return true;
        },

        annotationsLoaded: function (annotations) {
            // look for any annotations with an image-selection
            // and create positioned div based on the selection coordinates
            // using the same styles as text annotations.
            $.each(annotations, function (i) {
                imgselect_utils.drawImageHighlight(annotations[i]);
            });
            // return true so annotator will draw text highlights normally
            return true;
        },

    };
}

const htmlViewer = {
    render: function (item) {

        if (!item.userName) {
            return item.text;
        }

        let time = moment(item.updated).format('DD-MM-YYYY h:mm:ss A');
        return [item.text, '<br/><br/>', '<strong>', 'by', item.userName, '<br/>at', time, '</strong>'].join(' ');

    },
    viewerExtension: function viewerExtension(viewer) {
        viewer.setRenderer(htmlViewer.render);
    }
};

function csrfTokenAdder(csrf) {
    function addCsrfToken(ann) {
        $('.annotator-checkbox').remove();
        ann.token = csrf;
    }

    return {
        beforeAnnotationCreated: addCsrfToken,
        beforeAnnotationDeleted: addCsrfToken,
        beforeAnnotationUpdated: addCsrfToken
    }
}

function toastNotifier(message, severity, title) {
    if (typeof severity === 'undefined' || severity === null) {
        severity = 'info';
    }

    if (typeof title === 'undefined' || title === null) {
        title = severity.charAt(0).toUpperCase() + severity.slice(1) + '!';
    }

    toastr[severity](message, title);
}

var AnnotatorApp = annotator.App.extend({
    constructor: function (options) {
        annotator.App.apply(this);
        this.registry.registerUtility(toastNotifier, 'notifier');
    }
});


$(document).ready(function () {
    let $container = $('#wiki_body_container');

    let $annotation = $('#annotation-holder');

    const ANNOTATION_BASE_URL = $annotation.data('annot-url');

    const csrf = $annotation.data('token');
    const ref = $annotation.data('ref');
    const currentUser = $annotation.data('current');

    $annotation.remove();

    $container.find('img').each((index, el) => {
        el.src += '#' + index; //Differentiate two image with same src
    });

    const onError = function () {
        console.log(arguments);
    };

    const app = new AnnotatorApp();

    app.include(annotator.ui.main, {
        element: $container.get(0),
        viewerExtensions: [
            htmlViewer.viewerExtension
        ]
    });
    app.include(annotator.storage.http, {
        onError: onError,
        prefix: ANNOTATION_BASE_URL,
        urls: {
            create: '',
            update: '/{id}',
            destroy: '/{id}',
            search: '/search'
        }
    });
    app.include(csrfTokenAdder, csrf);

    app.include(annotatorImageSelect, {
        element: $container.find('img'),
        container: $container
    });

    app.start()
        .then(function () {
            app.ident.identity = currentUser;
            app.annotations.load();
        });


    function notifyUser(msg) {
        app.notify(msg);
        TitleService.blink(msg);
    }

});


