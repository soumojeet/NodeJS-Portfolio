// Theme Toggle Logic
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");

themeToggleBtn.addEventListener("click", () => {
  // Toggle the dark mode class on the body
  document.body.classList.toggle("dark");

  // Switch the image source based on the current theme
  if (document.body.classList.contains("dark")) {
    themeIcon.src = "/images/sun.png";
    themeIcon.alt = "Sun Icon";
  } else {
    themeIcon.src = "/images/night.png";
    themeIcon.alt = "Moon Icon";
  }
});
