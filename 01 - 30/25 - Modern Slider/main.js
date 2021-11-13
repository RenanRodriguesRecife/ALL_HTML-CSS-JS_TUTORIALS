var mordernSlider = new Swiper(".swiper-container",{
    
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true
});

 
mordernSlider.on('slideChange', function(){
    
    TweenMax.to('.reveal', .2,{
        y: '-52px',
    })
    
    TweenMax.to('.swiper-slide',.2,{
        scale: .95,
    })
});


mordernSlider.on('slideChangeTransitionEnd', function(){
   
   
    TweenMax.to('.reveal', 0,{
        y: '-52px',
    })

    TweenMax.to('.reveal',.2,{
        y: 0,
        delay: .5,
    })

    TweenMax.to('.swiper-slide-active .port-text',0,{
        autoAlpha: 1,
    })

    TweenMax.to('.swiper-slide-next .port-text',.2,{
        autoAlpha: 0,
    })

    TweenMax.to('.swiper-slide-prev .port-text',.2,{
        autoAlpha: 0,
    })

    TweenMax.to('.swiper-slide-active ',.5,{
        scale: 1,
        ease: Power4.easeOut,
    })
});


TweenMax.to('.swiper-slide-active .port-text',0,{
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-next .port-text',0,{
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-prev .port-text',0,{
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-active',.5,{
    scale: 1,
    ease: Power4.easeOut,
    scale: .95,
})

