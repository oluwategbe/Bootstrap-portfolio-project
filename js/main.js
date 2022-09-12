$(document).ready(function(){
    let $btn = $('.project-area .button-group button');

    $btn.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })
   
    $('.project-area .button-group #btn-1').trigger('click');


    //magnific popup
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}  
    });

    //owl carousel
    // $(document).ready(function(){
    //     $(".owl-carousel").owlCarousel();
    // });

    $('.site-main .clients-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            }
        }
    })

});