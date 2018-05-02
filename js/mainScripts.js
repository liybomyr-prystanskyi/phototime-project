$(document).ready(function () {
    $(".owl1").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

    $(".owl2").owlCarousel({
        items: 2,
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
    $(".scrollTo").on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: ($(target).offset().top)}, 1500);
    });
    AOS.init({
        duration: 1500,
    })


// makes the parallax elements
    function parallaxIt() {
        // create variables
        var $fwindow = $(window);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var $contents = [];
        var $backgrounds = [];

        // for each of content parallax element
        $('[data-type="content"]').each(function(index, e) {
            var $contentObj = $(this);

            $contentObj.__speed = ($contentObj.data('speed') || 1);
            $contentObj.__fgOffset = $contentObj.offset().top;
            $contents.push($contentObj);
        });

        // for each of background parallax element
        $('[data-type="background"]').each(function() {
            var $backgroundObj = $(this);

            $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
            $backgroundObj.__fgOffset = $backgroundObj.offset().top;
            $backgrounds.push($backgroundObj);
        });

        // update positions
        $fwindow.on('scroll resize', function() {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            $contents.forEach(function($contentObj) {
                var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

                $contentObj.css('top', yPos);
            })

            $backgrounds.forEach(function($backgroundObj) {
                var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

                $backgroundObj.css({
                    backgroundPosition: '50% ' + yPos + 'px'
                });
            });
        });

        // triggers winodw scroll for refresh
        $fwindow.trigger('scroll');
    };

    parallaxIt();



});


