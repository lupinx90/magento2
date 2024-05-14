var config = {
    deps: [
        "js/owl.home.images",
        "js/owl.home.products"
    ],
    paths: {
        'owlcarousel': 'js/owl.carousel.min'
    },
    shim: {
        'owlcarousel': {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery', '@popperjs/core']
        }
    },
    map: {
        '*': {
            bootstrap: 'js/bootstrap.min',
            '@popperjs/core': 'js/popper.min'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'js/custom.validators': true
            }
        }
    }
};