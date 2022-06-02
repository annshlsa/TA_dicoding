let container = document.querySelectorAll(".slide-content");
var menu = document.getElementById("#menu-bar");
var nav = document.querySelector(".nav-bar");
let index = 0;
let slide = document.querySelectorAll(".testimonial-box");
let ind = 0;

// toggle navbar
// nav.onclick = () => {
//   // menu.classList.toggle("fa-solid fa-xmark");
//   dropdownPanel.classList.toggle("dropdown-inactive");
//   // nav.classList.toggle("nav-bar");
// };

// window.onscroll = () => {
//   nav.classList.remove("fa-solid fa-xmark");
//   nav.classList.remove("active");
// };

// slide animation on home
function next() {
  container[index].classList.remove("active");
  index = (index + 1) % container.length;
  container[index].classList.add("active");
}
function prev() {
  container[index].classList.remove("active");
  index = (index - 1 + container.length) % container.length;
  container[index].classList.add("active");
}

// slide animation on testimonial
function next_testi() {
  slide[ind].classList.remove("active");
  ind = (ind + 1) % slide.length;
  slide[ind].classList.add("active");
}
function prev_testi() {
  slide[ind].classList.remove("active");
  ind = (ind - 1 + slide.length) % slide.length;
  slide[ind].classList.add("active");
}

$("a").click(function (e) {
  $("html,body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000
  );
});
