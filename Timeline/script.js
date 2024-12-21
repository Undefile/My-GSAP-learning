var tl=gsap.timeline()
tl.from("h2",{
   y:-20,
   opacity:0,
   duration:0.7,
   delay:0.2
})
tl.from("h4",{
   y:-20,
   opacity:0,
   duration:0.7,
   stagger:0.3
})

tl.from("h1", {
   opacity: 0, // Start with opacity 0 (invisible)
   y: -50, // Start 50 pixels above its final position
   duration: 1, // Duration of the animation in seconds
   ease: "power2.out" // Easing function for a smooth effect
});

