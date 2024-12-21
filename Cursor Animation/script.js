var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
   // console.log("Event Performed!");
   gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      duration:1.5,
      ease: "back.out(1.7)",
      // y: -500
   })
})

var image = document.querySelector("#image");
image.addEventListener("mouseenter",function(){
   cursor.innerHTML="View";
   gsap.to(cursor,{
      scale:2,
   })
})
var image = document.querySelector("#image");
image.addEventListener("mouseleave",function(){
   cursor.innerHTML="";
   gsap.to(cursor,{
      scale:1,
   })
})