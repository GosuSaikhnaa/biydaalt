// Динамик эффектүүдийг ачаалах
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.addEventListener("mouseover", function () {
      section.style.transform = "perspective(600px) rotateX(0deg)";
    });

    section.addEventListener("mouseout", function () {
      section.style.transform = "perspective(600px) rotateX(15deg)";
    });
  });
});
