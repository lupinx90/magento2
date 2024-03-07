require(['jquery', 'owlcarousel'], function($){
    $(document).ready(function() {
        $('.owl-carousel-products').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });
    });
});