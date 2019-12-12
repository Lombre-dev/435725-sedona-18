function addMenuHandlers() {

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

function showGoogleMap() {
  var map = document.querySelector(".search-hotel__map--nojs");
  map.classList.remove("search-hotel__map--nojs");
}

function openPopup(target) {
  document.querySelector(target).classList.remove("popup--closed");
}

function closePopup(target) {
  document.querySelector(target).classList.add("popup--closed");
}

addMenuHandlers();
showGoogleMap();
