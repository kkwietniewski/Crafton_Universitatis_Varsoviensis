const mobileMenu = document.querySelector(".mobileLinks");
let isActive = false;
let isAddedLinks = false;
const menu = document.createElement("div");
mobileMenu.addEventListener("click", ()=>{
  if(isActive == true){
    menu.remove();
    document.querySelector(".fa-bars").style.display = "block";
    document.querySelector(".fa-times").style.display = "none";
    isActive = false;
  }
  else if(isActive == false){
    menu.classList.add("mobileMenu");
    if(isAddedLinks == false){
      document.querySelectorAll(".links a").forEach(link=>{
        menu.appendChild(link.cloneNode(true));
      });
      isAddedLinks = true;
    }
    document.querySelector(".hero").appendChild(menu);
    document.querySelector(".fa-bars").style.display = "none";
    document.querySelector(".fa-times").style.display = "block";
    isActive = true;
  }
});