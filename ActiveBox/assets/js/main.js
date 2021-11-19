$(document).ready(function(){

    /* Animate Menu Button when Clicked it*/
    $('.navbar-toggler').on('click',function(){
        $(this).toggleClass('active')
    })

    /* Add active class when scrolling down */
    $(window).on('scroll',function(){
        if($('html,body').scrollTop() > 50){
            $('.navbar').addClass('active')
        } else {
            $('.navbar').removeClass('active')
        }
    })
})