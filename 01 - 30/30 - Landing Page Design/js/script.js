const t1 = new TimelineLite()
t1.to('.main-heading',.6,{y: -40, opacity: 1, ease: Power0.easeIn})
.to('.main-para',.6,{y: -30, opacity: 1, ease:Power0.easeIn})
.to('.btn', 1,{opacity: 1, ease: Power0.easeIn})

const t2 = new TimelineLite()
t2.to('.images', 1,{x: -100, opacity: 1, delay: 1,ease: Power0,easeIn})

const t3 = new TimelineLite()
t3.to('.back', 1,{x: -230, ease: Power0.easeIn})

const controller1 = new ScrollMagin.Controller()
const scene1 = new ScrollMagic.Scene({
    triggerElement: '#hero-section',
    duration: 1500,
    triggerHook: 0
})
.setTween(t3)
.setPin('.hero-section')
.addTo(controller1)



const t4 = new TimelineLite()
t4.to('.one', 1,{opacity: 1, ease: Power0.easeIn})
.to('.two', 1,{opacity: 1, ease: Power0.easeIn})
.to('.three', 1,{opacity: 1,ease: Power0.easeIn})
.to('.four', 1,{opacity: 1,ease: Power0.easeIn})

const controller2 = new ScrollMagin.Controller()
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.review',
    duration: 2000,
    triggerHook: 0
})
.setTween(t4)
.setPin('.review')
.addTo(controller2)



