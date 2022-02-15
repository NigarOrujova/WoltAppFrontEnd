// Loader

var loader = document.getElementById("loader");

window.addEventListener("load",function (){
    loader.style.display = "none";
});




// SLIDERS

$('.slide-one').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

$('.slide-two').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

$('.slide-three').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


$('.slide-four').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


$('.slide-five').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

