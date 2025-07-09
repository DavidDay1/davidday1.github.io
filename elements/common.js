// Common JavaScript functions for David Day's website

// Mobile device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768 ||
           window.matchMedia("(max-width: 768px)").matches ||
           window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

// Force hamburger menu visibility on mobile devices
function ensureMobileMenuVisibility() {
    if (isMobileDevice()) {
        const hamburger = document.querySelector('.hamburger');
        const desktopMenu = document.querySelector('.desktop-menu');
        
        if (hamburger) {
            hamburger.style.display = 'flex';
            hamburger.style.visibility = 'visible';
            hamburger.style.opacity = '1';
        }
        
        if (desktopMenu) {
            desktopMenu.style.display = 'none';
            desktopMenu.style.visibility = 'hidden';
            desktopMenu.style.opacity = '0';
        }
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("active");
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.remove("active");
}

function toggleContactPopup() {
    const popup = document.getElementById("contact-popup");
    const wasVisible = popup.style.display === "block";

    document.querySelectorAll(".contact-popup").forEach((el) => {
        el.style.display = "none";
    });

    popup.style.display = wasVisible ? "none" : "block";
    if (!wasVisible) {
        setTimeout(() => {
            document.addEventListener("click", closePopupOnClickOutside);
        }, 0);
    } else {
        document.removeEventListener("click", closePopupOnClickOutside);
    }
}

function closePopupOnClickOutside(event) {
    const popup = document.getElementById("contact-popup");
    const contactLink = document.getElementById("contact-link");
    
    if (!popup.contains(event.target) && !contactLink.contains(event.target)) {
        popup.style.display = "none";
        document.removeEventListener("click", closePopupOnClickOutside);
    }
}

// Close mobile menu when clicking outside
document.addEventListener("click", function(event) {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.querySelector(".hamburger");
    
    if (mobileMenu && mobileMenu.classList.contains("active") && 
        !mobileMenu.contains(event.target) && 
        !hamburger.contains(event.target)) {
        closeMobileMenu();
    }
});

// Initialize mobile menu visibility
document.addEventListener('DOMContentLoaded', function() {
    ensureMobileMenuVisibility();
    
    // Also check on window resize
    window.addEventListener('resize', function() {
        ensureMobileMenuVisibility();
    });
    
    // Check again after a short delay to ensure CSS has loaded
    setTimeout(ensureMobileMenuVisibility, 100);
}); 