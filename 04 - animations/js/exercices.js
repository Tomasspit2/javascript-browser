let fadeInButton = document.querySelector("#fade-in-trigger");
let fadeOutButton = document.querySelector("#fade-out-trigger");
let box = document.querySelector(".box");
 
fadeOutButton.onclick = function(){
   box.classList.add("fade-out");
}
 
fadeInButton.onclick = function(){
   box.classList.remove("fade-out");
}



let resetButton = document.querySelector("#reset");
let moveButton = document.querySelector("#moveRight");
let box2 = document.querySelector(".box2");
 
moveButton.onclick = function(){
   box2.classList.add("moveRight");
}
 
resetButton.onclick = function(){
   box2.classList.remove("moveRight");
}

let spin = document.querySelector("#spin");
let box3 = document.querySelector(".box3");
 
spin.onclick = function(){
    box3.classList.add("spin");
}


let colourChange = document.querySelector("#colourChange");
let box4 = document.querySelector(".box4");

colourChange.onclick = function() {
    if (box4.classList.contains("colourChange")) {
        box4.classList.remove("colourChange");
        void box4.offsetWidth;
    }

    box4.classList.add("colourChange");
};


let grow = document.querySelector("#grow");
let box5 = document.querySelector(".box5");
 
grow.onclick = function()   {
    if (box5.classList.contains("grow")) {
        box5.classList.remove("grow");
        void box5.offsetWidth;
    }
    box5.classList.add("grow");
}



function handleScrollAppear() {
    const appearElements = document.querySelectorAll('[data-appear]');
    appearElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Check if the element is in the viewport
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        element.classList.add('appeared');
      }
    });
  }
  
  // Attach the scroll event listener to trigger the appearance
  window.addEventListener('scroll', handleScrollAppear);
  
  // Initial check in case some elements are already in the viewport
  handleScrollAppear();

