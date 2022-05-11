import moment from 'moment';
import './scripts/annotator/toastr';
import {TitleService} from "./scripts/annotator/title-service";
import updateTimeElapsed from './components/time-elasped';

require('./scripts/index');
require('../../public/plugins/codesnippet/lib/highlight/highlight.pack.js');
const doT = require('dot');

$(document).ready(function () {

    const $commentMeta = $('#comment-meta-data');
    const $commentContainer = $('#comments-container');
    const $commentText = $('#comment-text');
    const $commentTemplate = $('#comment-template');
    const $commentGroupTemplate = $('#comment-group-template');

    const $scrollable = $('#scrollable-container');
    $scrollable.scrollTop($scrollable[0].scrollHeight);
    const options = $commentMeta.data();

    const commentFn = doT.template($commentTemplate.html());
    const commentGroupFn = doT.template($commentGroupTemplate.html());
    $commentTemplate.remove();
    $commentGroupTemplate.remove();
    $commentMeta.remove();

    $('body').on('comment-form.submit', function (e, form) {
        e.preventDefault();
        const body = $commentText.val();
        $commentText.val('');
        $.post(form.attr('action'), {
            'body': body,
            'token': options['token'],
        }, function (comment) {
            renderComment(comment)
        })
    });

    function renderComment(comment) {
        const $lastCommentGroup = $commentContainer.find('.comment-group:last-child');

        comment.time = moment(comment.timeIso).format('DD-MM-YYYY h:mm A');

        if ($lastCommentGroup.length > 0 && $lastCommentGroup.data('user-id') === comment.user.id) { //comment is from the last commented user
            $lastCommentGroup.find('.comments').append(commentFn(comment));
            $('[data-toggle="tooltip"]').tooltip();
        } else {
            comment.self = comment.user.id === options['currentUser'];
            $commentContainer.append(commentGroupFn(comment));
            $('[data-toggle="tooltip"]').tooltip();
        }

        if (comment.user.id !== options['currentUser']) {
            toastr['info'](comment.body, comment.user.name + ' Said,');
        }

        $scrollable
            .removeClass('d-none')
            .scrollTop($scrollable[0].scrollHeight);

        updateTimeElapsed();
    }

    wClient.topic('app.chat.created.' + options['ref'])
        .map((r) => r.args[0])
        .delay(500)
        .subscribe(comment => {
            if ($('.layer.comment.comment-id-' + comment.id).length > 0) {
                return;
            }

            renderComment(comment);

            if (comment['token'] !== options['token']) {
                TitleService.blink(comment.user.name + ' Said, ' + comment.body);
            }
        });
});


