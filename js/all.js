$(document).ready(function () {
    /*menu開關*/ 
    $('.open').click(function (e) { 
        e.preventDefault();
        $('.nav').toggleClass('openmenu');
        $('.menu').toggleClass('pushed');
    });


    /*滾輪*/ 
    $('.nav-content').click(function(){
        $('html,body').animate({scrollTop:$('.content').offset().top},800);
        $('.nav').toggleClass('openmenu');
        $('.menu').toggleClass('pushed');
    });

    $('.nav-chef').click(function(){
        $('html,body').animate({scrollTop:$('.chef').offset().top},800);
        $('.nav').toggleClass('openmenu');
        $('.menu').toggleClass('pushed');
    });

    $('.nav-map').click(function(){
        $('html,body').animate({scrollTop:$('.contact').offset().top},800);
        $('.nav').toggleClass('openmenu');
        $('.menu').toggleClass('pushed');
    });

    
    /*shopcart愛心*/ 
    $('.fa-heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('heart-color');
    });
});