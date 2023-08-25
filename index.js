const heroSection = document.querySelector(".section-hero")
/* ===============================
creat  specfic navbar compnent 
------------------------------- */

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");


mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});
 
/* ===============================
creat sticky navbar table compnent 
------------------------------- */
const observer = new IntersectionObserver((entries) => {

  const ent = entries[0];
  // console.log(ent);
  !ent.isIntersecting ? document.body.classList.add("sticky"):
  document.body.classList.remove("sticky");

}, {
  root: null,
  threshold: 0,
});

observer.observe(heroSection);

/* ===============================
creat aportfolio table compnent 
------------------------------- */
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");


p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  //  to ifnd the data Attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(` .p-btn--${btn_num}`)

  p_img_elem.forEach((curElem) => curElem.classList.add("p-images-not-active"))

  img_active.forEach((curElem) => curElem.classList.remove("p-images-not-active"))
  // p_img_elem
  // p-btn--1

});

// swiper js code

const swiper = new Swiper(".mySwiper",{
  slidesPerView: 2,
  spaceBetween:30,
  autoplay:{
    delay: 2500,
  },
  pagination: {
  el: ".swiper-pagination",
    clickable: true,
  },
});

const myjsmedia = (widthSize) => {
  
if(widthSize.matches) {
   new Swiper(".mySwiper",{
    slidesPerView:1,
    spaceBetween: 30,
   
  });

} else{
  var swiper = new Swiper(".mySwiper",{
    slidesPerView: 2,
    spaceBetween: 30,
  });
}

};

const  widthSize = window.matchMedia("(max-width: 780px)");
// call listlnear funcition at run time

myjsmedia(widthSize);

// attach listnear function on state change

widthSize.addEventListener("change", myjsmedia);


// scroll to top Button 
// const heroSection = document.querySelector(".section-hero")



const footerElem = document.querySelector(".section-footer");


const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-circle-outline" class="scroll-top"></ion-icon>`;


footerElem.after(scrollElement);



const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);




const workSection = document.querySelector('.section-work-data');
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;


  //  animmated counter Number

  const counterNum = document.querySelectorAll(".counter-number");

  const speed = 200;

  counterNum.forEach((curElem) => {
    const updateNumber = () => {

      const targetNumber = parseInt(curElem.dataset.number);
      //  console.log(targetNumber);

      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber / speed);
      // console.log(incrementNumber);

      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;

        setTimeout(updateNumber, 10);
      }
    };


    updateNumber();
  });

  observer.unobserve(workSection);

},

  {




    root: null,
    threshold: 0,


  });

workObserver.observe(workSection);


// laaazy  loading image

const imgRef = document.querySelector("img[data-src]");

const imgObserver = new IntersectionObserver(() => { }, {
  root: null,
  threshold: 0,
});

imgObserver.observe(imgRef);