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
});
