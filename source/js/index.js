var addMenuHandlers = function () {

  var menu = document.querySelector(".header__menu");
  var nav = document.querySelector(".header__nav");

  menu.classList.remove("header__menu--nojs");

  menu.addEventListener('click', function () {
    var activeClass = "header__menu--active";
    if (menu.classList.contains(activeClass)) {
      menu.classList.remove(activeClass);
      nav.classList.add("header__nav--closed");
    } else {
      menu.classList.add(activeClass);
      nav.classList.remove("header__nav--closed");
    }
  });
};

addMenuHandlers();

function openPopup(target) {
  document.querySelector(target).classList.remove("popup--closed");
}

function closePopup(target) {
  document.querySelector(target).classList.add("popup--closed");
}
