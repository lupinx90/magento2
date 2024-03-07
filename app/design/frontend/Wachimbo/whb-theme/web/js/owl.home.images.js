require(['jquery', 'owlcarousel'], function($){
    $(document).ready(function() {
        $('.owl-carousel-images').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
    });
});