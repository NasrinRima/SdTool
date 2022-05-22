import $ from 'jquery';

window.$ = window.jQuery = $;

// Url retrieval function
window.baseUrl = function (path) {
    let basePath = document.querySelector('meta[name="base-url"]').getAttribute('content');
    if (basePath[basePath.length - 1] === '/') basePath = basePath.slice(0, basePath.length - 1);
    if (path[0] === '/') path = path.slice(1);
    return basePath + '/' + path;
};

window.importVersioned = function (moduleName) {
    const version = document.querySelector('link[href*="/dist/styles.css?version="]').href.split('?version=').pop();
    const importPath = window.baseUrl(`dist/${moduleName}.js?version=${version}`);
    return import(importPath);
};

// Set events and http services on window
import events from "./services/events"
import httpInstance from "./services/http"
import {EventBusService} from './components/event-bus';

window.$http = httpInstance;
window.$events = events;


// Translation setup
// Creates a global function with name 'trans' to be used in the same way as Laravel's translation system
import Translations from "./services/translations"

const translator = new Translations();
window.trans = translator.get.bind(translator);
window.trans_choice = translator.getPlural.bind(translator);
window.trans_plural = translator.parsePlural.bind(translator);
EventBusService.on('event', 'comments.created')
    .subscribe(comment => {
        $.ajax({
            url: '/comment/' + comment.data.id,
            type: "GET",
            dataType: "html",
            success: function (view) {
                if (!$('div[comment="' + comment.data.id + '"]').length) {
                    $('.comment-container').append(view);
                    window.components.init(document.querySelector('[comment= "'+ comment.data.id +'" ]'));
                    updateCount();
                    $(".comments-list").append($(".comment-bar .comment-button"));
                    $(".comment-button").addClass("mb-xl");
                    $(".comment-bar .comment-button").css("display", "none");
                }
            },
            error: function (error) {
            }
        });
    });
// Load Components
import components from "./components"

components();
function updateCount() {
    let count = document.getElementsByClassName('comment-container')[0].children.length;
    const elem = document.querySelector("[component='page-comments']");
    elem.querySelector('[comments-title]').textContent = window.trans_plural("{0} No Comments|{1} 1 Comment|[2,*] :count Comments", count, {count});
}