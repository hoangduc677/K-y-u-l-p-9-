const music = document.getElementById("music");

music.src = "https://files.catbox.moe/5r9q6u.mp3";

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 300){
    music.src = "https://files.catbox.moe/jh3k2d.mp3";
  }
});
