// Offcanvas

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const offcanvas = document.querySelector(".custom-offcanvas");
  const backdrop = document.querySelector(".custom-offcanvas-backdrop");

  openBtn.addEventListener("click", () => {
    offcanvas.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    offcanvas.classList.remove("open");
  });

  backdrop.addEventListener("click", () => {
    offcanvas.classList.remove("open");
  });
});
