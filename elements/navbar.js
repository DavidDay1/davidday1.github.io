window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.createElement("nav");
  navbar.classList.add("bg-gray-900", "h-20", "flex", "justify-center", "items-center");

  const navbarContainer = document.createElement("div");
  navbarContainer.classList.add("container", "flex", "justify-between", "items-center", "h-20");

  const logo = document.createElement("a");
  logo.href = "/";
  logo.classList.add("text-2xl", "font-bold");
  logo.textContent = "David Day";

  navbarContainer.appendChild(logo);
  navbar.appendChild(navbarContainer);

  document.getElementById("navbar").appendChild(navbar);
});
