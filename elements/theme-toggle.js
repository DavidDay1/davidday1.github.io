window.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Apply theme from localStorage if it exists
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
    }
  
    // Toggle theme on button click
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      // Set the theme in localStorage based on the current class
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  