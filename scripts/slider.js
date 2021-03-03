const slideList = [{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.6)), 
  url(./assets/slides/hero_img.png)`,
  text: "Będziesz się uczyć z ciekawością.<span>Obiecujemy.</span>"
},
{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)), 
  url(./assets/slides/hero_img.png)`,
  text: "Będziesz się uczyć z ciekawością1.<span>Obiecujemy.</span>"
},
{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.8)), 
  url(./assets/slides/hero_img.png)`,
  text: "Będziesz się uczyć z ciekawością2.<span>Obiecujemy.</span>"
},
{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.9)), 
  url(./assets/slides/hero_img.png)`,
  text: "Będziesz się uczyć z ciekawością3.<span>Obiecujemy.</span>"
}];

const hero = document.querySelector(".hero");
const dots = [...document.querySelectorAll(".dots span")];
const heroText = document.querySelector(".hero-text>h1");

const time = 2000;
let active = 0;

const changeDot = ()=>{
  const acriveDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[acriveDot].classList.remove("active");
  dots[active].classList.add("active");
}

const setHero = ()=>{
  heroText.innerHTML = slideList[active].text;

  hero.style.paddingTop = "2%";
  hero.style.background = slideList[active].img;
  hero.style.backgroundSize = "cover";
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundPosition = "center";
  hero.style.width = "100%";
}

const changeSlide = ()=>{
  active++;
  if(active === slideList.length){
    active = 0;
  }
  setHero();
  changeDot();
}

let timeId = setInterval(changeSlide, time);

document.querySelectorAll(".navigation a").forEach((arrow, index)=>{
  if(index == 0){
    arrow.addEventListener("click", ()=>{
      event.preventDefault();
      clearInterval(timeId);
      active--;
      if(active< 0){
        active = slideList.length-1;
      }
      setHero();
      changeDot();
      timeId = setInterval(changeSlide, time);
    });
  }else{
    arrow.addEventListener("click", ()=>{
    event.preventDefault();
    clearInterval(timeId);
    changeSlide();
    timeId = setInterval(changeSlide, time);
    });
  }
});