function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  // console.log(h1Text);
  var splittedText = h1Text.split(""); //split the content of h1Text

  var halfValue = splittedText.length/2;
  console.log(halfValue);

  var clutter = "";

  splittedText.forEach(function (elem,idx) {   //elem=element, idx=index
   //  console.log(elem,idx)
   if(idx<halfValue){
      clutter += `<span class="a">${elem}</span>`
   } else{
      clutter += `<span class="b">${elem}</span>`
   }
  });
  // console.log(clutter)
  h1.innerHTML = clutter;
}
breakTheText();
gsap.from("h1 .a",{
   y:75,
   duration:0.5,
   delay:0.3,
   opacity:0,
   stagger:0.15
   // stagger:-0.15 //from opposite side
})
gsap.from("h1 .b",{
   y:75,
   duration:0.5,
   delay:0.3,
   opacity:0,
   // stagger:0.15
   stagger:-0.15
})