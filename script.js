
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function createDots() {
  const container = document.getElementById('dots-container');
  const dotCount = 50;

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    const box = document.createElement('div');
    dot.className = 'dot';
    box.className = 'box';
    let size = getRandomNumber(1, 3);
    dot.style.left = getRandomNumber(0, 100) + '%';
    box.style.left = getRandomNumber(0, 100) + '%';
    dot.style.height = size + "px";
    dot.style.width = size + "px";
    dot.style.animationDuration = getRandomNumber(10, 15) + 's';
    box.style.animationDuration = getRandomNumber(15, 20) + 's';
    container.appendChild(dot);
    container.appendChild(box);
  }
}

window.onload = createDots;


//side bar



const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector(".after-body");

function disableScroll() {
  body.style.overflow = "hidden";
}

function enableScroll() {
  body.style.overflow = "auto";
}


close.style.display = "none";
ham.addEventListener("click", ()=>{
  ham.style.display = "none";
  close.style.display = "block";
  sidebar.classList.add("activate");
  // body.classList.add("container");
  body.classList.add("disable-scroll");
})
close.addEventListener("click", ()=>{
  ham.style.display = "block";
  close.style.display = "none";
  sidebar.classList.remove("activate");
  // body.classList.remove("container");
  body.classList.remove("disable-scroll");
})







// animations



var timeline = gsap.timeline();

timeline
  .from(".main-left h1", {
    x: '-200%',
    duration: 2,
    ease: 'bounce'
  })
  .from(".main-left p", {
    x: '-200%',
    duration: 2,
    ease: 'bounce'
  })
  .from(".btns", {
    y: '100%',
    opacity: 0,
    duration: 2,
  })
  .from(".main-right", {
    delay : 1,
    opacity : 0,
    duration: 3
  })


