//GSAP for scrolling portfolio
$(".main-wrap.scrolling-prtfl").each(function () {
  let scrollPrtfl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 15%",
      end: "bottom bottom",
      markers: true,
      scrub: true,
    },
  });
  scrollPrtfl.to($(this).find(".scrolling-prtfl-clw"), { x: "-100%", duration: 0.8 });
  scrollPrtfl.from($(this).find(".scrolling-bar-toggle"), {x: "-100%", duration: 0.8}, 0);
})



function setTrackHeights() {
  $(".container.scrolling-prtfl-wrap").each(function (index) {
    let trackWidth = $(this).find(".scrolling-prtfl-clw").outerWidth();
    //let desiredHeight = trackWidth - $(window).width();
    $(this).height(trackWidth);
    console.log(trackWidth);
  });
  

}
setTrackHeights();
window.addEventListener("resize", function () {
  setTrackHeights();
});

//SWIPER
$(".container.slider-galery-comp").each(function (index){
  const swiperBg = new Swiper($(this).find(".swiper.is-slider-bg")[0], {
    slidesPerView: 1,
    speed: 1200,
    //keyboard: true,
    //effect: "coverflow",
    //coverflowEffect:{
    //  depth: 100,
    //  rotate: 30,
    //  scale: 0.9,
    //  slideShadow: false
    //}
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
  const swiperTitle = new Swiper($(this).find(".swiper.is-slider-title")[0], {
    slidesPerView: 1,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs:{
      swiper: swiperBg
    },
    navigation:{
      nextEl: $(this).find(".button.for-slide.swiper-next")[0],
      prevEl: $(this).find(".button.for-slide.swiper-prev")[0],
    }
  });
})


//GSAP for last section
$(".last-step-bl").each(function(){
    let scrollLastSteps = gsap.timeline({
        scrollTrigger:{
            trigger: $(this),
            start: "top 60%",
            end: "bottom 60%",
            //markers: true,
            toggleActions: "play reverse play reverse",
        }
    });
    scrollLastSteps.from($(this).find(".last-step-cont"), {opacity: .3, duration: 0.6, ease: "power1.out",});
})

//first bl
const tabBlock = document.querySelector('.tab-bl-wrap.first');
const tabWidth = tabBlock.offsetWidth;
const spaceToEdge = tabBlock.getBoundingClientRect().left;
const finalPosition = tabWidth + spaceToEdge;
//console.log(finalPosition);
const tabsImage = document.querySelector('.tabs-img-bl.first');
tabsImage.style.width = `${finalPosition}px`;
//second bl
const tabBlockSecond = document.querySelector('.tab-bl-wrap.second');
const tabWidthSecond = tabBlockSecond.offsetWidth;
const tabsImageSecond = document.querySelector('.tabs-img-bl.second');
//console.log(tabWidthSecond);
tabsImageSecond.style.width = `${tabWidthSecond}px`;
// Find children image of tabsImageSecond and set position left
const childrenImageSecond = tabsImageSecond.querySelector('img');
childrenImageSecond.style.left = `-${finalPosition}px`;
//console.log('left margin of second image', tabWidthSecond);

//third bl
const tabBlockThird = document.querySelector('.tab-bl-wrap.third');
const tabWidthThird = tabBlockThird.offsetWidth;
const spaceToEdgeRightThird = window.innerWidth - tabBlockThird.getBoundingClientRect().right;
const finalPositionThird = tabWidthThird + spaceToEdgeRightThird;
//console.log(finalPositionThird);
const tabsImageThird = document.querySelector('.tabs-img-bl.third');
tabsImageThird.style.width = `${finalPositionThird}px`;
// Find children image of tabsImageThird and set position left
const childrenImageThird = tabsImageThird.querySelector('img');
const leftPosition = finalPosition + tabWidthSecond;
childrenImageThird.style.left = `-${leftPosition}px`;
//console.log('-', leftPosition);