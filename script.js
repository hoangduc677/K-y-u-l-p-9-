// INTRO
setTimeout(()=>{
  const intro = document.getElementById("netflixIntro");
  intro.style.opacity = "0";
  setTimeout(()=> intro.remove(),1000);
},3000);

// SCROLL EFFECT
const els = document.querySelectorAll(".cinematic");

window.addEventListener("scroll", ()=>{
  els.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// TYPE TEXT
const text = "Thanh xuân giống như một chuyến tàu...";
let i=0;
function type(){
  if(i<text.length){
    document.getElementById("typeText").innerHTML += text[i];
    i++;
    setTimeout(type,40);
  }
}
setTimeout(type,2000);

// MUSIC AUTO CHANGE
const music = document.getElementById("bgMusic");

const musicList = [
  "https://files.catbox.moe/5r9q6u.mp3",
  "https://files.catbox.moe/jh3k2d.mp3",
  "https://files.catbox.moe/8v8q2x.mp3"
];

let current = 0;

window.addEventListener("scroll", ()=>{
  const scrollY = window.scrollY;
  let index = Math.floor(scrollY / 500);

  if(index !== current && musicList[index]){
    current = index;
    music.src = musicList[index];
    music.play();
  }
});
