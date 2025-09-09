// Contact Page JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all contact page functionality
  initFAQ();
  initContactForm();
  initAnimations();
  initMapInteractions();
  initFormValidation();
});

// FAQ Accordion Functionality
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon i");

    if (question && answer && icon) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            const otherAnswer = otherItem.querySelector(".faq-answer");
            const otherIcon = otherItem.querySelector(".faq-icon i");
            if (otherAnswer) otherAnswer.style.maxHeight = "0px";
            if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove("active");
          answer.style.maxHeight = "0px";
          icon.style.transform = "rotate(0deg)";
        } else {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.style.transform = "rotate(45deg)";
        }
      });
    }
  });
}

// Contact Form Handling
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      submitForm();
    }
  });

  // Real-time validation
  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => clearFieldError(input));
  });
}

// Form Validation
function initFormValidation() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  // Add validation rules
  const validationRules = {
    firstName: { required: true, minLength: 2 },
    lastName: { required: true, minLength: 2 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    companyName: { required: true, minLength: 2 },
    country: { required: true },
    inquiryType: { required: true },
    message: { required: true, minLength: 10 },
  };

  // Store rules on form for later use
  form.validationRules = validationRules;
}

function validateForm() {
  const form = document.getElementById("contactForm");
  if (!form) return false;

  let isValid = true;
  const rules = form.validationRules;

  Object.keys(rules).forEach((fieldName) => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field && !validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const form = field.closest("form");
  const rules = form.validationRules[field.name];
  if (!rules) return true;

  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Required validation
  if (rules.required && !value) {
    isValid = false;
    errorMessage = "This field is required";
  }

  // Email validation
  if (isValid && rules.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address";
    }
  }

  // Phone validation
  if (isValid && rules.phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
      isValid = false;
      errorMessage = "Please enter a valid phone number";
    }
  }

  // Minimum length validation
  if (isValid && rules.minLength && value.length < rules.minLength) {
    isValid = false;
    errorMessage = `This field must be at least ${rules.minLength} characters long`;
  }

  // Update field UI
  updateFieldValidation(field, isValid, errorMessage);

  return isValid;
}

function updateFieldValidation(field, isValid, errorMessage) {
  const formGroup = field.closest(".form-group");
  if (!formGroup) return;

  // Remove existing validation classes and messages
  formGroup.classList.remove("error", "success");
  const existingError = formGroup.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  if (field.value.trim()) {
    if (isValid) {
      formGroup.classList.add("success");
    } else {
      formGroup.classList.add("error");

      // Add error message
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.innerHTML = `<i data-lucide="alert-circle"></i> ${errorMessage}`;
      formGroup.appendChild(errorDiv);

      // Re-initialize Lucide icons
      if (window.lucide) {
        lucide.createIcons();
      }
    }
  }
}

function clearFieldError(field) {
  const formGroup = field.closest(".form-group");
  if (formGroup && !field.value.trim()) {
    formGroup.classList.remove("error", "success");
    const errorMessage = formGroup.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
  }
}

// Form Submission
function submitForm() {
  const form = document.getElementById("contactForm");
  const submitBtn = form.querySelector(".form-submit");

  // Disable submit button and show loading state
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending Message...';
  submitBtn.querySelector("i").style.animation = "spin 1s linear infinite";

  // Re-initialize icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Show success message
    showFormSuccess();

    // Reset form
    form.reset();

    // Clear all validation states
    const formGroups = form.querySelectorAll(".form-group");
    formGroups.forEach((group) => {
      group.classList.remove("error", "success");
      const errorMessage = group.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    });

    // Reset submit button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    // Re-initialize icons
    if (window.lucide) {
      lucide.createIcons();
    }
  }, 2000);
}

function showFormSuccess() {
  // Create success notification
  const notification = document.createElement("div");
  notification.className = "form-success-notification";
  notification.innerHTML = `
        <div class="success-content">
            <i data-lucide="check-circle"></i>
            <div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for your inquiry. We'll get back to you within 24 hours.</p>
            </div>
        </div>
    `;

  // Add success notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ffffff;
        border: 2px solid #2e7d32;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 24px rgba(46, 125, 50, 0.2);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;

  const successContent = notification.querySelector(".success-content");
  successContent.style.cssText = `
        display: flex;
        align-items: flex-start;
        gap: 12px;
    `;

  const icon = notification.querySelector("i");
  icon.style.cssText = `
        color: #2e7d32;
        font-size: 24px;
        flex-shrink: 0;
        margin-top: 2px;
    `;

  const h4 = notification.querySelector("h4");
  h4.style.cssText = `
        color: #2e7d32;
        margin: 0 0 4px 0;
        font-size: 1rem;
        font-weight: 600;
    `;

  const p = notification.querySelector("p");
  p.style.cssText = `
        color: #3a4a3f;
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.4;
    `;

  document.body.appendChild(notification);

  // Re-initialize icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Animation on Scroll
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe contact methods
  const contactMethods = document.querySelectorAll(".contact-method");
  contactMethods.forEach((method, index) => {
    method.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(method);
  });

  // Observe FAQ items
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(item);
  });
}

// Map Interactions
function initMapInteractions() {
  const mapContainer = document.querySelector(".map-container");
  if (!mapContainer) return;

  // Add map interaction handlers
  const directionsBtn = document.querySelector(".btn-directions");
  const viewLargerBtn = document.querySelector(".btn-view-larger");

  if (directionsBtn) {
    directionsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const coordinates = "30.0444,31.2357"; // Cairo coordinates - replace with actual
      const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;
      window.open(url, "_blank");
    });
  }

  if (viewLargerBtn) {
    viewLargerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const coordinates = "30.0444,31.2357"; // Cairo coordinates - replace with actual
      const url = `https://www.google.com/maps/place/${coordinates}/@${coordinates},15z`;
      window.open(url, "_blank");
    });
  }
}

// Contact Method Actions
document.addEventListener("click", function (e) {
  // Handle phone number click
  if (e.target.closest(".phone-action")) {
    e.preventDefault();
    const phoneNumber = e.target
      .closest(".phone-action")
      .getAttribute("href")
      .replace("tel:", "");

    // Show phone options on mobile
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show desktop notification
      showPhoneNotification(phoneNumber);
    }
  }

  // Handle email click
  if (e.target.closest(".email-action")) {
    e.preventDefault();
    const email = e.target
      .closest(".email-action")
      .getAttribute("href")
      .replace("mailto:", "");
    const subject = "Inquiry about ELShahd Products";
    const body =
      "Hello,\n\nI am interested in learning more about your products and services.\n\nPlease contact me at your earliest convenience.\n\nThank you!";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  // Handle WhatsApp click
  if (e.target.closest(".whatsapp-action")) {
    e.preventDefault();
    const phoneNumber = "+201234567890"; // Replace with actual WhatsApp number
    const message =
      "Hello! I am interested in your agricultural products and would like to discuss business opportunities.";
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
});

function showPhoneNotification(phoneNumber) {
  const notification = document.createElement("div");
  notification.innerHTML = `
        <div class="phone-notification">
            <h4>Call ELShahd</h4>
            <p class="phone-display">${phoneNumber}</p>
            <div class="phone-actions">
                <button class="btn-copy-phone">Copy Number</button>
                <button class="btn-close-notification">Close</button>
            </div>
        </div>
    `;

  notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 2000;
        min-width: 280px;
        text-align: center;
    `;

  document.body.appendChild(notification);

  // Add event listeners
  const copyBtn = notification.querySelector(".btn-copy-phone");
  const closeBtn = notification.querySelector(".btn-close-notification");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy Number";
      }, 2000);
    });
  });

  closeBtn.addEventListener("click", () => {
    document.body.removeChild(notification);
  });

  // Close on outside click
  setTimeout(() => {
    document.addEventListener("click", function closeNotification(e) {
      if (!notification.contains(e.target)) {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
        document.removeEventListener("click", closeNotification);
      }
    });
  }, 100);
}

// Utility Functions
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

// Add CSS for spinner animation
const style = document.createElement("style");
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .phone-notification h4 {
        color: #2e7d32;
        margin: 0 0 12px 0;
        font-size: 1.2rem;
    }
    
    .phone-notification .phone-display {
        font-size: 1.1rem;
        font-weight: 600;
        color: #102113;
        margin: 0 0 20px 0;
        padding: 12px;
        background: #f6f8f5;
        border-radius: 8px;
    }
    
    .phone-notification .phone-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
    }
    
    .phone-notification button {
        padding: 8px 16px;
        border: 2px solid #2e7d32;
        border-radius: 8px;
        background: transparent;
        color: #2e7d32;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s ease;
    }
    
    .phone-notification .btn-copy-phone:hover {
        background: #2e7d32;
        color: white;
    }
    
    .phone-notification .btn-close-notification {
        border-color: #999;
        color: #999;
    }
    
    .phone-notification .btn-close-notification:hover {
        background: #999;
        color: white;
    }
`;
document.head.appendChild(style);
