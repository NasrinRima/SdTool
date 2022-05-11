export default (function () {
    $(".search-box a, .search-box .app-search .srh-btn").on('click', e => {
        $(".app-search").toggle(200);
        $(".app-search input").focus();
        e.preventDefault();
    });
}());
