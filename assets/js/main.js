$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else{
            $(".navbar-area").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
        
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });
        
        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });
        
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //=====  services progress

    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-1',
                radius: 50,
                value: 95,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
    
    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-2',
                radius: 50,
                value: 85,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
    
    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-3',
                radius: 50,
                value: 75,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
    
    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-4',
                radius: 50,
                value: 70,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }


    
    //=====  WOW active
    
    new WOW().init();
    
    
    
});

// set the date we're counting down to
var target_date = new Date('December, 1, 2020').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <label>Days</label></span> <span class="hours">' + hours + ' <label>Hours</label></span> <span class="minutes">'
    + minutes + ' <label>Minutes</label></span> <span class="seconds">' + seconds + ' <label>Seconds</label></span>';  
 
}, 1000);