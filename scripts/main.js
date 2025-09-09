// Main JavaScript for ELShahd Website

// DOM Elements
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contact-form");

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeNavigation();
  initializeScrollEffects();
  initializeContactForm();
  initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Toggle hamburger icon
    const icon = navToggle.querySelector("[data-lucide]");
    if (navMenu.classList.contains("active")) {
      icon.setAttribute("data-lucide", "x");
    } else {
      icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      const icon = navToggle.querySelector("[data-lucide]");
      icon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove("active");
      const icon = navToggle.querySelector("[data-lucide]");
      icon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    }
  });

  // Active link highlighting on scroll
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial call
}

// Scroll effects
function initializeScrollEffects() {
  // Navbar background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Update active navigation link based on scroll position
function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100; // Offset for better detection

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const correspondingLink = document.querySelector(
      `.nav-link[href="#${sectionId}"]`
    );

    if (correspondingLink) {
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));
        // Add active class to current link
        correspondingLink.classList.add("active");
      }
    }
  });
}

// Contact form functionality
function initializeContactForm() {
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {};

      // Convert FormData to object
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }

      // Validate required fields
      if (!validateForm(data)) {
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector(".form-submit");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending...';
      submitBtn.disabled = true;
      lucide.createIcons();

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Show success message
        showNotification(
          "Thank you! Your inquiry has been sent successfully. We will contact you soon.",
          "success"
        );

        // Reset form
        contactForm.reset();

        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        lucide.createIcons();
      }, 2000);
    });
  }
}

// Form validation
function validateForm(data) {
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "country",
    "products",
  ];
  let isValid = true;

  requiredFields.forEach((field) => {
    const input = document.getElementById(field);
    const value = data[field];

    if (!value || value.trim() === "") {
      showFieldError(input, "This field is required");
      isValid = false;
    } else {
      clearFieldError(input);
    }
  });

  // Email validation
  if (data.email && !isValidEmail(data.email)) {
    const emailInput = document.getElementById("email");
    showFieldError(emailInput, "Please enter a valid email address");
    isValid = false;
  }

  return isValid;
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show field error
function showFieldError(input, message) {
  clearFieldError(input);

  input.style.borderColor = "#c62828";

  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error";
  errorDiv.style.color = "#c62828";
  errorDiv.style.fontSize = "14px";
  errorDiv.style.marginTop = "4px";
  errorDiv.textContent = message;

  input.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(input) {
  input.style.borderColor = "";
  const existingError = input.parentNode.querySelector(".field-error");
  if (existingError) {
    existingError.remove();
  }
}

// Show notification
function showNotification(message, type = "info") {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${
              type === "success" ? "check-circle" : "info"
            }"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i data-lucide="x"></i>
            </button>
        </div>
    `;

  // Style the notification
  notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === "success" ? "#2e7d32" : "#1565c0"};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 24px rgba(16,33,19,0.12);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;

  // Add CSS for animation
  if (!document.querySelector("#notification-styles")) {
    const style = document.createElement("style");
    style.id = "notification-styles";
    style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                margin-left: auto;
            }
            .notification-close:hover {
                background: rgba(255,255,255,0.1);
            }
        `;
    document.head.appendChild(style);
  }

  // Add to page
  document.body.appendChild(notification);

  // Initialize icons
  lucide.createIcons();

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Animation observer for scroll-triggered animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".product-card, .service-card, .feature-item, .cert-item, .contact-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Product image gallery (for future use)
function initializeProductGallery() {
  const productImages = document.querySelectorAll(".product-img");

  productImages.forEach((img) => {
    img.addEventListener("click", function () {
      openImageModal(this.src, this.alt);
    });
  });
}

function openImageModal(src, alt) {
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <img src="${src}" alt="${alt}" class="modal-image">
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">
                    <i data-lucide="x"></i>
                </button>
            </div>
        </div>
    `;

  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
    `;

  document.body.appendChild(modal);
  lucide.createIcons();

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  // Remove on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.remove();
      document.body.style.overflow = "";
    }
  });
}

// Search functionality (for future enhancement)
function initializeSearch() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    const debouncedSearch = debounce(performSearch, 300);
    searchInput.addEventListener("input", debouncedSearch);
  }
}

function performSearch(e) {
  const query = e.target.value.toLowerCase();
  // Implement search logic here
  console.log("Searching for:", query);
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(category, action, label = null) {
  // Implement analytics tracking here
  console.log("Track event:", { category, action, label });
}

// Form field enhancements
function initializeFormEnhancements() {
  // Auto-format phone numbers
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function (e) {
      // Simple phone formatting (can be enhanced)
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 0) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      }
      e.target.value = value;
    });
  });

  // Auto-capitalize names
  const nameInputs = document.querySelectorAll(
    'input[name="firstName"], input[name="lastName"]'
  );
  nameInputs.forEach((input) => {
    input.addEventListener("input", function (e) {
      const words = e.target.value.split(" ");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
      e.target.value = capitalizedWords.join(" ");
    });
  });
}

// Initialize form enhancements when page loads
document.addEventListener("DOMContentLoaded", initializeFormEnhancements);

// Export functions for potential external use
window.ELShahdWebsite = {
  showNotification,
  trackEvent,
  openImageModal,
};
