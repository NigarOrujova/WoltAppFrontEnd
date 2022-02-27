// Loader
var loader = document.getElementById("loader");

window.addEventListener("load",function (){
    loader.style.display = "none";
});

//SLIDERS
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
            loop:true
        }
    }
})

$('.slide-two').owlCarousel({
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
            items:2,
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
            items:2,
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
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


$('.slide-five').owlCarousel({
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
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
const toTop=document.querySelector('.ScrollToTop');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100)
    {
        toTop.classList.add('active');
    }
    else
    {
        toTop.classList.remove('active');
    }
})

