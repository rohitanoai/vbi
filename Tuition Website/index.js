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
