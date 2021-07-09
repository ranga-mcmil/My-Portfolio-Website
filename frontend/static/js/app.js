gsap.registerPlugin(ScrollTrigger)

gsap.from('.second', {
    scrollTrigger: {
        trigger: '.second',
        // markers: true,
        toggleActions: "restart none none none",
        
        
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power1.out'
    
})

gsap.from('#whatidoheading', {
    scrollTrigger: {
        trigger: '#whatidoheading',
        // markers: true,
        toggleActions: "restart none none none",
        
        
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power1.out'
    
})
