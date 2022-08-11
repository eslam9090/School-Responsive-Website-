let icon = document.querySelector(".icon i");
let faq__parts = document.querySelectorAll(".main__of_faqs > .faq__parts");
let meun_bar = document.querySelector("#meun_bar");
let nav = document.querySelector(".ul__menu");
let close_bar = document.querySelector("#close_bar");



//// start change background color by scrolling //////////////////////////////

let sec__nav = document.querySelector(".sec__nav");
let nav_e = document.querySelector(".nav");
window.addEventListener('scroll', (eo) => {
  if (window.scrollY >= 500) {
    sec__nav.classList.add('bg')
  }
  else {
    sec__nav.classList.remove('bg')
  }
})

////End  change background color by scrolling //////////////////////////////

faq__parts.forEach((faq__parts) => {
  faq__parts.addEventListener("click", () => {
    faq__parts.classList.toggle("open");

    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});
////////////////////////////////////start menu bar //////////////////////////

meun_bar.addEventListener("click", (eo) => {
  nav.style.display = "flex";
  close_bar.style.display = "block";
  meun_bar.style.display = "none";


});

close_bar.addEventListener("click", (eo) => {
  nav.style.display = "none";
  close_bar.style.display = "none";
  meun_bar.style.display = "block";


});

////////////////////////////////////end menu bar //////////////////////////

///////////////////start swiper//////////////////

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});
/////////////////// End swiper//////////////////


//////////////////// Start scrolling Buttom ////////

let up = document.querySelector(".up")

window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 500) {
    up.classList.add("show")
  }
  else {
    up.classList.remove("show")
  }
})

up.addEventListener("click", (eo) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
//////////////////// End scrolling Buttom ////////
