const playBtn = document.querySelector(".video__play");
const overlay = document.createElement("div");
const iframe = document.createElement("iframe");


const setPopUp = ()=>{
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.position = "fixed";
  overlay.style.width = "100%";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0,0,0,0.4)";
  overlay.style.zIndex = 2;
  overlay.style.transition = "0.6s";
  document.querySelector(".container").appendChild(overlay);

  iframe.src = "https://www.youtube.com/embed/rPfUMYLwNS0?autoplay=1&start=1";
  iframe.frameBorder = "0";
  iframe.style.width = "52%";
  iframe.style.height = "60vh";
  iframe.setAttribute("allowfullscreen", "");
  overlay.appendChild(iframe);
}


playBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  setPopUp();
  requestAnimationFrame(()=>{
    overlay.style.background = "rgba(0,0,0,0.7)";
  });
});
overlay.addEventListener("click", ()=>{
    overlay.remove();
});