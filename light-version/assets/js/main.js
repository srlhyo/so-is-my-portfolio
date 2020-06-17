/*******************************************************
    Template Name    : Helio - Personal Portfolio HTML Template
    Author           : Helio Goncalves
    Version          : 1.0
    Created          : 2020
    File Description : Main Js file of the template
*******************************************************/
(function ($) {
    "use strict"

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    });

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

    // Portfolio isotope and filter
    $(window).on('load', function() {
        var projectIsotope = $('.project-container').isotope({
            itemSelector: '.project-grid-item'
        });

        $('#project-filters li').on('click', function() {
            $('#project-filters li').removeClass('filter-active');
            $(this).addClass('filter-active');

            protectIsotope.isotop({
                filter: $(this).data('filter')
            });
        })
    });

    // NavaBar Menu Reduce
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;

        if($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
            $('.navbar-expand-md').addClass('navbar-trans');
            $('.navbar-expand-md').removeClass('navbar-reduce');
        }

        if($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

    // Back to top button
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Start ScrollTop
    $('.scrolltop-mf').on('click', function() {
        $('html, body').animate({
            scropllTop: 0
        }, 1000);
    });

    // Star Scrolling nav
    $('a.js-scroll[href*="#"]:not([href="#"])').on('click', function() {
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.lenght) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - navHeight + 30)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    





})(jQuery);


