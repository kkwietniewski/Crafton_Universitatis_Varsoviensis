const slideList = [{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.6)), 
  url(./assets/slides/hero_img.png)`,
  text1: "Będziesz się uczyć z ciekawością.",
  text2: "Obiecujemy."
},
{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)), 
  url(./assets/slides/hero_img.png)`,
  text1: "Będziesz się uczyć z ciekawością1.",
  text2: "Obiecujemy."
},
{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.8)), 
  url(./assets/slides/hero_img.png)`,
  text1: "Będziesz się uczyć z ciekawością2.",
  text2: "Obiecujemy."
},
{
  img: `linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.9)), 
  url(./assets/slides/hero_img.png)`,
  text1: "Będziesz się uczyć z ciekawością3.",
  text2: "Obiecujemy."
}];

const hero = document.querySelector(".hero");
const dots = [...document.querySelectorAll(".dots span")];
const firstHeroText = document.querySelector(".first-hero-text");
const secondHeroText = document.querySelector(".second-hero-text");

const time = 2000;
let active = 0;

const changeDot = ()=>{
  const acriveDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[acriveDot].classList.remove("active");
  dots[active].classList.add("active");
}

const setHero = ()=>{
  firstHeroText.textContent = slideList[active].text1;
  secondHeroText.textContent = slideList[active].text2;

  hero.style.paddingTop = "2%";
  hero.style.background = slideList[active].img;
  hero.style.backgroundSize = "123%";
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundPosition = "center left";
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

// let timeId = setInterval(changeSlide, time);

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