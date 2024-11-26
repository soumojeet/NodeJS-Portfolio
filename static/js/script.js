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

// Project Data
const projects = [
  {
    title: "Weather App",
    description:
      "A Node.js-based weather app that displays real-time weather data.",
    link: "https://github.com/yourusername/weather-app",
    techStack: [
      "Node.js",
      "Express",
      "OpenWeather API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with modern web technologies.",
    link: "https://github.com/yourusername/portfolio-website",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Trading Bot",
    description: "An automated trading bot for options trading using Python.",
    link: "https://github.com/yourusername/trading-bot",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "API Integration"],
  },
  // Add more project objects here
];

// Function to Display Project Details
function showProjectDetails(index) {
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const projectLink = document.getElementById("project-link");
  const techStackContainer = document.getElementById("project-tech-stack");
  const techStackList = document.getElementById("tech-stack-list");

  // Update project details
  projectTitle.textContent = projects[index].title;
  projectDescription.textContent = projects[index].description;
  projectLink.href = projects[index].link;
  projectLink.style.display = "inline-block";

  // Update tech stack
  techStackList.innerHTML = ""; // Clear previous list
  projects[index].techStack.forEach((tech) => {
    const listItem = document.createElement("li");
    listItem.textContent = tech;
    techStackList.appendChild(listItem);
  });

  techStackContainer.style.display = "block"; // Show tech stack section
}
