document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", function () {
      img.classList.toggle("zoomed");
    });
  });
});
