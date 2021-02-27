const playBtn = document.querySelector(".video__play");
const overlay = document.createElement("div");


let isOverlaySet = false;
const setOverlay = ()=>{
  overlay.style.position = "fixed";
  overlay.style.width = "100%";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0,0,0,0.7)"
  overlay.style.zIndex = 2;
}
playBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  setOverlay();
  document.querySelector(".container").appendChild(overlay);

  isOverlaySet = true;
});
overlay.addEventListener("click", ()=>{
    overlay.remove();
});