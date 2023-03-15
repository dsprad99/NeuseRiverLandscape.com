$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    //navigation bar will change to off white once we scroll off main menu
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos>100){
            $('.navbar').addClass('cng-navbar');
        }
        else{
            $('.navbar').removeClass('cng-navbar');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaivor: "smooth"
        })
    })
})
