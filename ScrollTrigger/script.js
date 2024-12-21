// gsap.from("#page-1 #box",{
//    opacity:0.5,
//    rotate:360,
//    scale:0.5,
//    duration:2,
// })
// gsap.from("#page-2 #box",{
//    opacity:0.5,
//    rotate:360,
//    scale:0,
//    duration:2,
//    // scrollTrigger:"#page-2 #box"
//    scrollTrigger:{
//       trigger:"#page-2 #box",
//       scroller:"body",
//       // markers:true,
//       // start:"top 80%",
//       scrub:2,//it will manage the animation through scrolling
//    }
// })

gsap.to("#page-2 h1",{
   transform:"translateX(-150%)",
   scrollTrigger:{
      trigger:"#page-2",
      markers:true,
      start:"top 0% ",
      end:"top -150%",
      scrub:2,
      pin:true, //pin the page so the page will get pinned and the content can be clearly seen
   }
})
