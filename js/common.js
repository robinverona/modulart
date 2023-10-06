gsap.to(".bar", 1.5, {
    delay: 3.5, 
    height: 0, 
    stagger: {
      amount: 0.5
    },
    ease: "power4.inOut"
  })
  
  gsap.to(".overlay", 0.25, {
    delay: 5, 
    display: 'none'
  })

  Split(['#sidebar', '#content'], {
    minSize: 400,
    gutterAlign: 'start',
    sizes: [20, 80]
});