var hamber = document.querySelector(".hamber-icon");
var navContainer = document.querySelector(".nav-container");
var close = document.querySelector(".close-icon");
var hero = document.querySelector(".section-hero");
var lists = document.querySelectorAll(".nav-list ul li a");

for (var i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", () => {
    navContainer.classList.remove("nav-open");
    hero.classList.remove("gradient-effect");
  });
}

hamber.addEventListener("click", () => {
  navContainer.classList.add("nav-open");
  hero.classList.add("gradient-effect");
});

close.addEventListener("click", () => {
  navContainer.classList.remove("nav-open");
  hero.classList.remove("gradient-effect");
});
