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

class advantagesCards {
  constructor(src, parentSelector, title, descr) {
    this.src = src;
    this.parentSelector = document.querySelector(parentSelector);
    this.title = title;
    this.descr = descr;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("advantages__item");
    div.innerHTML = `<div class="advantages__icon"><img src="${this.src}" alt=""></div>
            <div class="advantages__content">
              <div class="advantages__title">${this.title}</div>
              <div class="advantages__descr">
              ${this.descr}
              </div>
            </div>
          </div>`;

    this.parentSelector.append(div);
  }
}
new advantagesCards(
  "./img/inst.svg",
  ".advantages__column",
  "Популярные соцсети",
  "Все самые популярные соцсети в одном месте"
).render();
new advantagesCards(
  "./img/rocket.svg",
  ".advantages__column",
  "Быстрый запуск",
  "Рекламная кампания за 24 часа"
).render();
new advantagesCards(
  "./img/guard.svg",
  ".advantages__column",
  "Официально / ЭДО",
  "Оплата по счету, договор и все закрывающие документы по ЭДО"
).render();
new advantagesCards(
  "./img/aim.svg",
  ".advantages__column",
  "Точный таргетинг",
  "Максимальный охват именно вашей целевой аудитории"
).render();
new advantagesCards(
  "./img/tor.svg",
  ".advantages__column",
  "Закон о рекламе",
  "Соблюдение нового закона о рекламе и сдача отчетности"
).render();

var swiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

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
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
