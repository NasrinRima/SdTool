import moment from 'moment';

moment.updateLocale('en', {
    relativeTime : {
        past: function (number, withoutSuffix, key, isFuture) {
            if(number === 'just now') {
                return number;
            }

            return number + " ago";
        },
        s  : 'just now'
    }
});

function updateTimeElapsed() {
    $('.time-elapsed').each(function () {
        var $el = $(this);
        $el.html(moment($el.data('time')).fromNow());
    })
}

(function () {
    $(document).ready(function () {
        updateTimeElapsed();
        setInterval(updateTimeElapsed, 60000)
    });

}());

export default updateTimeElapsed;
