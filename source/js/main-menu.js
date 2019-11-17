const addMenuHandlers = function () {

  const menu = document.body.querySelector(".header__menu");
  const nav = document.body.querySelector(".header__nav");

  if (!menu || !nav) {
    return;
  }

  menu.addEventListener('click', function () {
    const activeClass = "header__menu--active";
    if (menu.classList.contains(activeClass)) {
      menu.classList.remove(activeClass);
      nav.classList.add("visually-hidden");
    } else {
      menu.classList.add(activeClass);
      nav.classList.remove("visually-hidden");
    }
  });
};

addMenuHandlers();
