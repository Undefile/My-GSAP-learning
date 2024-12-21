



window.addEventListener("wheel",function(dets){
   // console.log(dets)
   if(dets.deltaY>0){
      gsap.to(".mark",{
         transform:"translateX(-200%)",
         duration:8,
         repeat:-1,
         ease:"none"
      })
      gsap.to(".mark img",{
         rotate:180,
      })
   } else{
      gsap.to(".mark",{
         transform:"translateX(0%)",
         duration:8,
         repeat:-1,
         ease:"none"
      })
      gsap.to(".mark img",{
         rotate:-0,
      })
   }
})