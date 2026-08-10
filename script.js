/* =========================================================
   ABIGAIL RINALDI
   MODEL • ACTRESS
   Main JavaScript
   ========================================================= */


/* =========================================================
   01. SMOOTH NAVIGATION
   Keeps section headings from hiding underneath the
   fixed navigation when using the menu.
   ========================================================= */

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', event => {

    const targetId = link.getAttribute('href');

    if (!targetId || !targetId.startsWith('#')) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const navigation = document.querySelector('.site-nav');

    const navigationHeight = navigation
      ? navigation.offsetHeight
      : 0;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navigationHeight -
      25;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

  });

});
