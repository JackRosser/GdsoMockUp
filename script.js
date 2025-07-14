// Offcanvas

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenu");
  const offcanvas = document.querySelector(".custom-offcanvas");
  const backdrop = document.querySelector(".custom-offcanvas-backdrop");
  const goToOrder = document.querySelector("#goToOrder");
  const menuItems = document.querySelectorAll(".menuItem");

  openBtn.addEventListener("click", () => {
    offcanvas.classList.add("open");
  });

  backdrop.addEventListener("click", () => {
    offcanvas.classList.remove("open");
  });

  goToOrder.addEventListener("click", () => {
    offcanvas.classList.remove("open");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      offcanvas.classList.remove("open");
    });
  });

  // NAVIGAZIONE

  // HOME
  const homeButton = document.querySelector(".homeBtn");
  const homePage = document.querySelector(".home");
  // ORDINI
  const ordersButtons = document.querySelectorAll(".ordersBtn");
  const ordersPage = document.querySelector(".orders");
  // MAPPA
  const percorsoButton = document.querySelector("#percorso");
  const mappaPage = document.querySelector(".percorso");

  // EVENTI
  homeButton.addEventListener("click", () => {
    homePage.classList.add("open");
    ordersPage.classList.remove("open");
    mappaPage.classList.remove("open");
  });
  ordersButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ordersPage.classList.add("open");
      homePage.classList.remove("open");
      mappaPage.classList.remove("open");
    });
  });
  percorsoButton.addEventListener("click", () => {
    mappaPage.classList.add("open");
    ordersPage.classList.remove("open");
  });
});
