const toggleMenu = e => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  // TweenLite.from(menu, 1, { x: -350 });
  // if (!menu.classList.contains("menu--open")) {
  // menu.classList.add("menu--open");
  // TweenLite.from(menu, 1, { x: -350 });
  // } else if (menu.classList.contains("menu--open")) {
  // menu.classList.remove("menu--open");
  // }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
