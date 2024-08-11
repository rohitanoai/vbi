const navmenu = document.querySelector("#nav-menu");
const navbutton = document.querySelector("#navbtn");

// Function to handle screen size changes
function handleScreenSizeChange(mq) {
  if (mq.matches) {
    navmenu.classList.remove("none");
    navmenu.classList.add("flex");
    navbutton.classList.remove("block");
    navbutton.classList.add("none");
  } else {
    console.log("sm-screen");
    console.log();
    navmenu.classList.remove("flex");
    navbutton.classList.remove("none");
    navbutton.classList.add("block");
    navmenu.classList.add("none");
  }
}

// Media query for large screens (greater than 768px)
const largeScreenQuery = window.matchMedia("(min-width: 769px)");
// Initial check on page load
handleScreenSizeChange(largeScreenQuery);
largeScreenQuery.addListener(handleScreenSizeChange);

document.getElementById("navbtn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});

const sidmens = document.querySelectorAll("#sidmenu li");
sidmens.forEach((li) => {
  li.addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active");
  });
});






let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}