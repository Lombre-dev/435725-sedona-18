const addMenuHandlers = function () {

  var toggle = document.body.querySelector(".main-nav__toggle");
  var list = document.body.querySelector(".main-nav__list");

  if (!toggle || !list) {
    return;
  }

  toggle.classList.remove("main-nav__toggle--nojs");

  toggle.addEventListener('click', function () {
    const activeClass = "main-nav__toggle--active";
    if (toggle.classList.contains(activeClass)) {
      toggle.classList.remove(activeClass);
      list.classList.add("main-nav__list--closed");
    } else {
      toggle.classList.add(activeClass);
      list.classList.remove("main-nav__list--closed");
    }
  });
};

addMenuHandlers();
