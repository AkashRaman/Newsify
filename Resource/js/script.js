$(document).ready(function () {
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        };
    }, { 
        offset: '100px;'
    });
   
    $('.sign-in-btn').hover(
        function () {
            if ($(window).width() <= "768") {
                $(this).removeClass('pulse');
            } else {
                $(this).addClass('pulse');
            }
    },
    
        function () {
            $(this).removeClass('pulse');
    });
    
    $('.btn-full').hover(function () {
        if ($(window).width() <= "768") {
                $(this).addClass('shadow-pulse');
            } else {
                $(this).removeClass('shadow-pulse');
            }
    },
    
    function () {
        $(this).addClass('shadow-pulse');
    });
    
    $('#fruits').hover(function () {
        $('#vege').css("opacity" , "0.8");
        $('#tradi-food').css("opacity" , "0.8");
        $('#fast-food').css("opacity" , "0.8");
    },
    
    function () {
        $('#vege').css("opacity" , "1");
        $('#tradi-food').css("opacity" , "1");
        $('#fast-food').css("opacity" , "1");
    });
    
    $('#vege').hover(function () {
        $('#fruits').css("opacity" , "0.8");
        $('#tradi-food').css("opacity" , "0.8");
        $('#fast-food').css("opacity" , "0.8");
    },
    
    function () {
        $('#fruits').css("opacity" , "1");
        $('#tradi-food').css("opacity" , "1");
        $('#fast-food').css("opacity" , "1");
    });
    
    $('#tradi-food').hover(function () {
        $('#vege').css("opacity" , "0.8");
        $('#fruits').css("opacity" , "0.8");
        $('#fast-food').css("opacity" , "0.8");
    },
    
    function () {
        $('#vege').css("opacity" , "1");
        $('#fruits').css("opacity" , "1");
        $('#fast-food').css("opacity" , "1");
    });
    
    $('#fast-food').hover(function () {
        $('#vege').css("opacity" , "0.8");
        $('#tradi-food').css("opacity" , "0.8");
        $('#fruits').css("opacity" , "0.8");
    },
    
    function () {
        $('#vege').css("opacity" , "1");
        $('#tradi-food').css("opacity" , "1");
        $('#fruits').css("opacity" , "1");
    });
    
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('.short-copy').animate({ opacity: '1'});
            $('.about-us').addClass('underline');
        } else {
            $('.short-copy').animate({ opacity: '0'});
            $('.about-us').removeClass('underline');
        }
    }, {
        offset: '25%;'
    });
    
    $('.js--section-product').waypoint(function (direction) {
        if (direction == "down") {
            $('.short-copy').animate({ opacity: '0'});
            $('.about-us').removeClass('underline');
        } else {
            $('.short-copy').animate({ opacity: '1'});
            $('.about-us').addClass('underline');
        }
    }, {
        offset: '275px;'
    });
    
     $('.js--section-steps').waypoint(function (direction) {
        if (direction == "down") {
            $('.workings').addClass('underline');
        }; 
        
        if (direction == "up"){
            $('.workings').removeClass('underline');
        };
    }, {
        offset: '20%'
    });
    
    $('.js--section-cities').waypoint(function (direction) {
        if (direction == "down") {
            $('.js--wp-1').animate({ opacity: '1'});
            $('.our-cities').addClass('underline');
            $('.workings').removeClass('underline');
        }; 
        
        if (direction == "up"){
            $('.our-cities').removeClass('underline');
            $('.workings').addClass('underline');
        };
    }, {
        offset: '300px;'
    });
    
    $('.js--section-form').waypoint(function (direction) {
        if (direction == "down") {
            $('.sign-up').addClass('underline');
            $('.our-cities').removeClass('underline');
        };
        
        if (direction == "up"){
            $('.js--wp-1').animate({ opacity: '1'});
            $('.sign-up').removeClass('underline');
            $('.our-cities').addClass('underline');
        };
    }, {
        offset: '20%'
    });
    /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */
    
    $('.mobile-nav-icon').click(function () {
        var nav = $('.nav-section');
        var icon = $('.mobile-nav-icon i');
        var isActive = nav.is(":visible");
        nav.slideToggle(200);
        
        if (isActive == false) {
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        } else {
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
        };
    });
    
    $('.footer-nav-icon i').click(function () {
        var footerNav = $('.footer-nav');
        var footerIcon = $('.footer-nav-icon i');
        var isActive = footerNav.is(":visible");
        
        $('.footer-nav').slideToggle(200);
        
        if (isActive == false) {
            footerIcon.removeClass('fa-bars');
            footerIcon.addClass('fa-times');
            $('footer').css("height" , "199.29px");
            $('.footer-nav-icon').addClass('color');
        } else {
            footerIcon.removeClass('fa-times');
            footerIcon.addClass('fa-bars');
            $('footer').css("height" , "fit-content");
            $('.footer-nav-icon').removeClass('color');
        };
        
    });
    
});
