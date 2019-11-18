var navVisible;
var menu;
var nav;

const addMenuHandlers = function () {

  menu = document.body.querySelector(".header__menu");
  nav = document.body.querySelector(".header__nav");

  if (!menu || !nav) {
    return;
  }

  navVisible = !nav.classList.contains("visually-hidden");

  menu.addEventListener('click', function () {
    const activeClass = "header__menu--active";
    if (menu.classList.contains(activeClass)) {
      menu.classList.remove(activeClass);
      nav.classList.add("visually-hidden");
      navVisible = false;
    } else {
      menu.classList.add(activeClass);
      nav.classList.remove("visually-hidden");
      navVisible = true;
    }
  });

  window.addEventListener('resize', function () {
    if (document.body.clientWidth >= 768) {
      nav.classList.remove("visually-hidden");
    } else {
      if (navVisible) {
        nav.classList.remove("visually-hidden");
      } else {
        nav.classList.add("visually-hidden");
      }
    }
  });
};

addMenuHandlers();
