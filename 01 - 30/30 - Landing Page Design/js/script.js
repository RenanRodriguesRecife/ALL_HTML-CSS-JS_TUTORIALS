const t1 = new TimelineLite()
t1.to('.main-heading',.6,{y: -40, opacity: 1, ease: Power0.easeIn})
.to('.main-para',.6,{y: -30, opacity: 1, ease:Power0.easeIn})
.to('.btn', 1,{opacity: 1, ease: Power0.easeIn})

const t2 = new TimelineLite()
t2.to('.images', 1,{x: -100, opacity: 1, delay: 1,ease: Power0,easeIn})