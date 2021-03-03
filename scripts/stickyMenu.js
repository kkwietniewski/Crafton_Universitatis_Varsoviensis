const wrapper = document.querySelector(".wrapper");
const brandImg = document.querySelector(".brand img");

window.addEventListener("scroll", ()=>{
  if(window.pageYOffset >= 100){
    wrapper.classList.add("scrollMenu");
    wrapper.style.height = "10%";
    brandImg.style.width = "10%";
  }
  else if(window.pageYOffset < 100){
    wrapper.classList.remove("scrollMenu");
    wrapper.style.height = "16%";
    brandImg.style = "";
  }
});