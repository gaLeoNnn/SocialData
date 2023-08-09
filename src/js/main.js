class PartnerCards {
  constructor(src, parentSelector, alt) {
    this.src = src;
    this.alt = alt;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("partners__item");
    div.innerHTML = `
        <div class="partners__img">
          <img src="${this.src}" alt="${this.alt}" />
        </div>
    `;
    this.parent.append(div);
  }
}

new PartnerCards("./img/partner-1.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-2.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-3.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-4.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-5.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-6.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-7.svg", ".partners__box", "realweb").render();
new PartnerCards("./img/partner-8.svg", ".partners__box", "realweb").render();

// SLIDER
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
// const wrapper = document.querySelector(".slider-wrapper");
// const slides = document.querySelectorAll(".display__column");
// const display = document.querySelector(".display");

// display.style.width = 100 * slides.length + "%";

// let offset = wrapper.offsetWidth;

// console.log(offset);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: ["10%", 0, 0],
  //   },
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
btnRight.addEventListener("click", () => {
  swiper.slideNext();
});
btnLeft.addEventListener("click", () => {
  swiper.slidePrev();
});
