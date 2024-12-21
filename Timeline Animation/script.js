var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full",{
   right:0,
   duration:0.7
})
tl.from("#full h4",{
   x:150,
   duration:0.7,
   stagger:0.3,
   opacity:0
})
tl.from("#full i",{
   opacity:0,
   duration:0.3
})

tl.pause();//to pause the timeline

menu.addEventListener("click",function(){
   tl.play();//to play the timeline
})
close.addEventListener("click",function(){
   tl.reverse();//to play the timeline
})