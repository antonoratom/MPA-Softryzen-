//GSAP for scrolling portfolio
let scrollTl = gsap.timeline({
    scrollTrigger: {
    trigger: ".main-wrap.scrolling-prtfl",
    start: "top 15%",
    end: "105% bottom",
    markers: true,
    scrub: true,
    },
});
scrollTl.to(".scrolling-prtfl-sticky-wrap", { x: "-100%", duration: 0.8 });

function setTrackHeights() {
    $(".container.scrolling-prtfl-wrap").each(function (index) {
      let trackWidth = $(this).find(".scrolling-prtfl-list").outerWidth();
      let desiredHeight = trackWidth - $(window).width();
      $(this).height(desiredHeight);
      console.log(desiredHeight);
    });
    

  }
  setTrackHeights();
  window.addEventListener("resize", function () {
    setTrackHeights();
  });






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