$(window).on('load', function () {
    // Preloader
    $('.preloader img').fadeOut();
    $('.preloader').delay(400).fadeOut();
    $('body').delay(800).css("overflow", "auto");

    // Scroll top button
    $offset = $("#main-header").height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200)
            $('#btn-scroll-top').fadeIn(200);
        else
            $('#btn-scroll-top').fadeOut(200);

        if ($(this).scrollTop() > $offset + 50)
            $("#main-header").addClass("fixed");
        else
            $("#main-header").removeClass("fixed");
    });

});

$(function () {
    // Menu color
    let navColor = $('#main-header').data('color');
    $('.main-menu-list li a').css("color", navColor);

    // Mobile menu
    $("#main-header .menu-toggle").click(function () {
        $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu").click(function (event) {
        if ($(event.target).is(this)) {
            $(this).removeClass("active")
        }
    });

    // Scroll top button
    $('#btn-scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
    });

    // Lang list
    $('.lang-list button').click(function () {
        $(this).stop(true, false, true).toggleClass('active');
        $('.lang-dropdown').stop(true, false, true).toggleClass('active');
    });

    // Currency list
    $('.currency-list button').click(function () {
        $(this).stop(true, false, true).toggleClass('active');
        $('.currency-dropdown').stop(true, false, true).toggleClass('active');
    });

    // Date picker
    $("#tourDateTo, #tourDateFrom").flatpickr(
        {
            dateFormat: "Y/m/d",
        }
    );

    // Section Header
    $(".main-section-header").each(function () {
        $headingFront = $(this).find("h2.front").width();
        $headingBack = $(this).find("h2.back").width();

        if ($headingFront >= $headingBack) {
            $(this).width($headingFront);
        } else {
            $(this).width($headingBack);
        }
    });

    // Partners form
    $('.partners-form .form-control').focus(function () {
        $('.form-control-wrapper').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.partners-form .form-control').blur(function () {
        $('.form-control-wrapper').removeClass('active');
    });

    // Contact form
    $('#contactForm .form-control').on('input', function () {
        if ($(this).val()) {
            $(this).next('.form-label').fadeOut(0);
        } else {
            console.log($(this).next(), '-');
            $(this).next('.form-label').fadeIn(0);
        }
    });

    // Mobile search
    $('.mobile-search-toggle').click(function () {
        $('.main-search').toggleClass('active');
    })

    // Home banner
    const pageBannerSwiper = new Swiper(".pageBannerSwiper", {
        lazy: true,
        loop: false,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2500,
        },
    });

    // Popular tour
    const popularTourSwiper = new Swiper(".popularTourSwiper", {
        lazy: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2000,
        },
    });

    // Image gallery
    const imgGallerySwiper = new Swiper(".gallerySwiper.image", {
        lazy: true,
        spaceBetween: 35,
        loop: false,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    //  Video gallery
    const videoGallerySwiper = new Swiper(".gallerySwiper.video", {
        lazy: true,
        spaceBetween: 35,
        loop: false,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
            reverseDirection: true,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // Partner
    const partnerSwiper = new Swiper(".partnerSwiper", {
        lazy: true,
        loop: false,
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // Address
    const addressSwiper = new Swiper(".addressSwiper", {
        lazy: true,
        loop: false,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    // Tickets slider
    const ticketsSwiper = new Swiper(".ticketsSwiper", {
        lazy: true,
        loop: false,
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            }
        }
    });

    // Team
    const teamSwiper = new Swiper(".teamSwiper", {
        lazy: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        }, breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2000,
        },
    });

    // Tour inner
    const tourThumbSlider = new Swiper(".tourThumbSlider", {
        loop: false,
        lazy: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });

    const tourInnerSlider = new Swiper(".tourInnerSlider", {
        loop: false,
        lazy: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: tourThumbSlider,
        },
    });

    // Offer
    const offerSwiper = new Swiper(".offerSwiper", {
        lazy: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // Hotels
    const hotelsSwiper = new Swiper(".hotelsSwiper", {
        lazy: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // Gallery Fancybox
    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: false,
        },
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "zoom",
                "slideshow",
                "fullscreen",
                "download",
                "close",
            ],
        },
        infinite: false,
    });

    // Counter Up
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })
    $('.counter').each(function () {
        IO.observe(this);
    })
});