const TitleService = (function() {

    let has_focus = false;
    let animationTimer = null;
    let pageTitle = '';

    const callback = function(){
        has_focus = document.hasFocus();
        pageTitle = window.document.title;
    };

    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }

    window.addEventListener('blur', function(){
        has_focus = false;
    });

    window.onfocus = function () {
        has_focus = true;
        if (animationTimer) {
            clearInterval(animationTimer);
            window.document.title = pageTitle;
        }
    };


    function toggleTitle(title) {
        document.title = document.title === title ? pageTitle : title;
    }

    function blinkTitle(title) {
        if(has_focus) {
            return;
        }

        animationTimer = setInterval(function () {
            toggleTitle(title);
        }, 1000)
    }


    return {
        blink: blinkTitle
    }
})();

export {TitleService};