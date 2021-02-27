const btn = document.querySelector(".more");
const elementToScroll = document.getElementById("content");
const offset = -10;
const yPosition = elementToScroll.getBoundingClientRect().top + window.pageYOffset+ offset;

btn.addEventListener("click", ()=>{
  console.log(yPosition)
  window.scrollTo({top: yPosition});
});