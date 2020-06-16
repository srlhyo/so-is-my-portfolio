// START PRELOADED

(function ($) {
    $(window).on('load', function () {
        function preLoader() {
            setTimeout(function () {
                $('#preloader-wrapper .loader-middle').addClass('loaded');
                setTimeout(() => {
                    $('#preloader-wrapper').addClass('loaded');
                    setTimeout(function () {
                        $('#preloader-wrapper').remove();
                    }, 400);
                }, 600);
            }, 1000);
        };
        preLoader();
    });
})(jQuery);


