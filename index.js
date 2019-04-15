import Swiper from "swiper";

const swiperParent = document.getElementById("swiper-parent");

const getPhoto = () => {
  fetch("YourAPI")
    .then(resp => resp.json())
    .then(json => {
      const swiperSlide = document.createElement("div");
      swiperSlide.className = "swiper-slide";
      swiperSlide.style = `
        background-image:url(${json.url});
        background-size:contain;
        background-repeat: no-repeat;
      `;

      swiperParent.appendChild(swiperSlide);
      swiper.update();
    });
};

const getPhotoThreeTimes = () => {
  // TODO:
  getPhoto();
  getPhoto();
  getPhoto();
};

const swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  on: {
    init: getPhotoThreeTimes()
  }
});

window.setInterval(getPhoto, 6000);
