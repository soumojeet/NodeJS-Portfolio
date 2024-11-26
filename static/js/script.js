// Select the theme toggle button and icon
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");

// Function to apply the theme
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeIcon.src = "/images/sun.png";
    themeIcon.alt = "Sun Icon";
  } else {
    document.body.classList.remove("dark");
    themeIcon.src = "/images/night.png";
    themeIcon.alt = "Moon Icon";
  }
}

// Load theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
  applyTheme(savedTheme);
});

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Apply and save the new theme
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

window.addEventListener("load", () => {
  // Check if the current URL has a hash fragment
  if (window.location.hash) {
    window.location.href = "http://localhost:8080/";
  }
});

const certData = [
  {
    img: "/images/certificate1.jpg",
    thumb: "/images/certificate1-thumb.jpg",
    title: "Advanced JavaScript",
    desc: "Certification in Advanced JavaScript Techniques covering modern ES6+ features and best practices.",
    link: "https://example.com/certificates/javascript",
  },
  {
    img: "/images/certificate2.jpg",
    thumb: "/images/certificate2-thumb.jpg",
    title: "Machine Learning",
    desc: "Completed Machine Learning Fundamentals Course focusing on supervised and unsupervised learning.",
    link: "https://example.com/certificates/machine-learning",
  },
  {
    img: "/images/certificate3.jpg",
    thumb: "/images/certificate3-thumb.jpg",
    title: "Web Development",
    desc: "Full Stack Web Development Certification covering frontend, backend, and deployment.",
    link: "https://example.com/certificates/web-development",
  },
];

const highlightedImg = document.querySelector(".highlighted-cert-img");
const highlightedTitle = document.querySelector(".highlighted-cert-details h2");
const highlightedDesc = document.querySelector(".highlighted-cert-details p");
const highlightedLink = document.querySelector(
  ".highlighted-cert-details .cert-link"
);

const thumbnails = document.querySelectorAll(".cert-thumbnail");

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    // Update the main display content
    highlightedImg.src = certData[index].img;
    highlightedTitle.textContent = certData[index].title;
    highlightedDesc.textContent = certData[index].desc;
    highlightedLink.href = certData[index].link;
  });
});
