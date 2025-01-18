"use strict";

function toggleMenu() {
  const menu = document.querySelector(".mobile-nav__links");
  const icon = document.querySelector(".mobile-nav__icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}