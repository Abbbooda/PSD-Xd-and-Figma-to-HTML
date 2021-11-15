$(document).ready(function(){

    /* Fix Navbar */
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100){
           $('header').addClass('active')
        } else {
            $('header').removeClass('active')
        }
    })
})