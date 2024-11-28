// Select the theme toggle button and the icon inside the button
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");

// Function to apply the selected theme
function applyTheme(theme) {
  if (theme === "dark") {
    // Add 'dark' class to body for dark mode styles
    document.body.classList.add("dark");
    // Change the icon to 'sun' for light mode
    themeIcon.src = "/images/sun.png";
    themeIcon.alt = "Sun Icon"; // Update alt text for accessibility
  } else {
    // Remove 'dark' class for light mode
    document.body.classList.remove("dark");
    // Change the icon to 'moon' for dark mode
    themeIcon.src = "/images/night.png";
    themeIcon.alt = "Moon Icon"; // Update alt text for accessibility
  }
}

// Load the theme from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Get the saved theme from localStorage, defaulting to 'light' if none exists
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
  // Apply the saved theme
  applyTheme(savedTheme);
});

// Toggle the theme on button click
themeToggleBtn.addEventListener("click", () => {
  // Determine the current theme by checking the presence of 'dark' class on the body
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
  // Toggle between dark and light theme
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Apply and save the new theme
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
});

// Select the menu toggle button and navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Toggle the visibility of the navigation menu when the menu button is clicked
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show"); // Toggle 'show' class to control menu visibility
});

// Redirect to the home page if there's a hash fragment in the URL
window.addEventListener("load", () => {
  // Check if the current URL has a hash fragment
  if (window.location.hash) {
    window.location.href = "http://localhost:8080/"; // Redirect to homepage if hash exists
  }
});

// Function to reset the interval
let intervalID;
let currentIndex = 0;
let currentProjectIndex = 0;
function resetInterval() {
  clearInterval(intervalID); // Stops the current interval
  startInterval(); // Starts a new interval
}

function startInterval() {
  // Automatically iterate through certificates at a fixed interval
  intervalID = setInterval(() => {
    currentIndex = (currentIndex + 1) % certData.length; // Move to next index
    showCertificateDetails(currentIndex);
    currentProjectIndex = (currentProjectIndex + 1) % projectData.length; // Loop through projects
    showProjectDetails(currentProjectIndex);
  }, 5000); // Change every 5 seconds
}

// Function to Display Project Details
function showProjectDetails(index = 0) {
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const projectLink = document.getElementById("project-link");
  const techStackContainer = document.getElementById("project-tech-stack");
  const techStackList = document.getElementById("tech-stack-list");

  // Update project details
  projectTitle.textContent = projectData[index].title;
  projectDescription.textContent = projectData[index].description;
  projectLink.href = projectData[index].link;

  // Update tech stack
  techStackList.innerHTML = ""; // Clear previous list
  projectData[index].techStack.forEach((tech) => {
    const listItem = document.createElement("li");
    listItem.textContent = tech;
    techStackList.appendChild(listItem);
  });

  // Highlight the active project (if thumbnails exist)
  const projectThumbnails = document.querySelectorAll(".project-thumbnail");
  if (projectThumbnails.length) {
    projectThumbnails.forEach((thumbnail) =>
      thumbnail.classList.remove("active")
    );
    if (projectThumbnails[index]) {
      projectThumbnails[index].classList.add("active");
    }
  }
}

// Function to update the highlighted certificate
function showCertificateDetails(index = 0) {
  const highlightedImg = document.querySelector(".highlighted-cert-img");
  const highlightedTitle = document.querySelector(
    ".highlighted-cert-details h2"
  );
  const highlightedDesc = document.querySelector(".highlighted-cert-details p");
  const highlightedLink = document.querySelector(".highlighted-cert-details a");

  highlightedImg.src = certData[index].img;
  highlightedTitle.textContent = certData[index].title;
  highlightedDesc.textContent = certData[index].desc;
  highlightedLink.href = certData[index].link;

  // Highlight the corresponding thumbnail
  const thumbnails = document.querySelectorAll(".cert-thumbnail");
  if (thumbnails.length) {
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active")); // Remove active from all
    thumbnails[index].classList.add("active"); // Add active to current
  }
}

// Function to Generate Thumbnails (optional, for manual selection)
function generateProjectThumbnails(projectData) {
  const thumbnailContainer = document.getElementById("project-carousel");
  thumbnailContainer.innerHTML = ""; // Clear existing thumbnails
  projectData.forEach((project, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("project-thumbnail");
    thumbnail.textContent = project.title;
    thumbnail.dataset.index = index; // Save index for click handling
    thumbnail.addEventListener("click", () => {
      currentProjectIndex = index;
      resetInterval();
      showProjectDetails(index); // Update project details
    });
    thumbnailContainer.appendChild(thumbnail);
  });
}

// Function to generate and display the certificates
function generateCertificates(certData) {
  const certCarousel = document.getElementById("cert-carousel");
  // Clear existing content
  certCarousel.innerHTML = "";
  // Loop through the data and create elements
  certData.forEach((cert, index) => {
    const certDiv = document.createElement("div");
    certDiv.classList.add("cert-thumbnail");
    certDiv.setAttribute("data-cert", index);
    certDiv.addEventListener("click", () => {
      currentIndex = index;
      resetInterval();
      showCertificateDetails(index);
    });
    const imgElement = document.createElement("img");
    imgElement.src = cert.thumb;
    imgElement.alt = cert.title;
    imgElement.classList.add("carousel-img");
    certDiv.appendChild(imgElement);
    certCarousel.appendChild(certDiv);
  });
}

// Call the function to load the certificates and set up events
document.addEventListener("DOMContentLoaded", () => {
  // Generate
  generateCertificates(certData);
  generateProjectThumbnails(projectData);

  // Initialize the first certificate & project as highlighted
  showCertificateDetails(currentIndex);
  showProjectDetails(currentProjectIndex);

  startInterval();
});
