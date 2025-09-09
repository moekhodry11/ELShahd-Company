// Products Page JavaScript

// Product data for modal display
const productData = {
  straw: {
    title: "Premium Straw",
    description:
      "High-quality wheat and rice straw, carefully harvested and processed to ensure optimal nutritional value and cleanliness. Perfect for livestock bedding and feed supplement.",
    specifications: {
      "Moisture Content": "12-15%",
      "Crude Protein": "3-5%",
      "Crude Fiber": "35-40%",
      "Ash Content": "8-12%",
      "Foreign Matter": "< 2%",
      Color: "Golden Yellow",
      "Cut Length": "2-15cm",
      "Bale Weight": "15-25kg",
      "Bale Density": "120-150 kg/m³",
    },
    packaging: [
      "Small rectangular bales (15-25kg)",
      "Large rectangular bales (300-500kg)",
      "Round bales (200-300kg)",
      "Loose bulk packaging",
    ],
    applications: [
      "Livestock bedding material",
      "Feed supplement for ruminants",
      "Mulching material",
      "Construction material (straw bale construction)",
      "Biomass fuel",
    ],
    storage:
      "Store in dry, well-ventilated areas. Protect from moisture and direct sunlight. Recommended storage temperature: 15-25°C.",
    shelfLife: "12-18 months when stored properly",
    images: [
      "../images/animal feed/item 1.jpg",
      "../images/animal feed/item 8.jpg",
    ],
  },
  alfalfa: {
    title: "Dried Alfalfa",
    description:
      "Nutrient-rich dried alfalfa, sun-dried to preserve maximum nutritional value. Excellent source of protein, fiber, and essential minerals for livestock health and productivity.",
    specifications: {
      "Moisture Content": "10-12%",
      "Crude Protein": "18-22%",
      "Crude Fiber": "25-30%",
      Calcium: "1.2-1.8%",
      Phosphorus: "0.2-0.3%",
      Potassium: "2.0-3.0%",
      Carotene: "150-250 mg/kg",
      Color: "Green to Dark Green",
      "Leaf to Stem Ratio": "40:60",
    },
    packaging: [
      "Compressed bales (20-25kg)",
      "Small square bales (15-20kg)",
      "Large square bales (500-600kg)",
      "Pellets (25-50kg bags)",
    ],
    applications: [
      "High-protein feed for dairy cattle",
      "Feed for horses and rabbits",
      "Supplement for poultry feed",
      "Organic fertilizer base",
      "Green fodder alternative",
    ],
    storage:
      "Store in cool, dry conditions. Avoid direct sunlight and moisture. Ideal storage temperature: 10-20°C with good ventilation.",
    shelfLife: "12-18 months when properly stored",
    images: [
      "../images/animal feed/item 2.jpg",
      "../images/animal feed/item 7.JPG",
    ],
  },
  hay: {
    title: "Premium Hay",
    description:
      "Top-grade hay with optimal nutritional balance for dairy and beef cattle. Harvested at the perfect growth stage to ensure maximum palatability and digestibility.",
    specifications: {
      "Moisture Content": "12-15%",
      "Crude Protein": "8-12%",
      "Crude Fiber": "28-32%",
      "Total Digestible Nutrients": "55-60%",
      "Relative Feed Value": "120-140",
      Calcium: "0.4-0.8%",
      Phosphorus: "0.2-0.4%",
      "Cut Quality": "First/Second Cut",
      Color: "Green to Light Brown",
    },
    packaging: [
      "Small square bales (15-25kg)",
      "Large square bales (400-600kg)",
      "Round bales (250-400kg)",
      "Custom packaging available",
    ],
    applications: [
      "Primary feed for dairy cattle",
      "Feed for beef cattle",
      "Horse feed and bedding",
      "Feed for sheep and goats",
      "Emergency drought feed",
    ],
    storage:
      "Store in dry, well-ventilated barns or sheds. Keep off ground and protect from rain. Maintain proper air circulation.",
    shelfLife: "18-24 months under proper storage conditions",
    images: [
      "../images/animal feed/item 3.jpg",
      "../images/animal feed/item 6.jpg",
    ],
  },
  chaff: {
    title: "Quality Chaff",
    description:
      "Finely processed chaff suitable for various livestock feeding requirements. Consistent particle size and optimal moisture content for easy mixing and feeding.",
    specifications: {
      "Moisture Content": "10-14%",
      "Crude Protein": "4-7%",
      "Crude Fiber": "30-35%",
      "Particle Size": "2-5cm",
      "Bulk Density": "180-220 kg/m³",
      "Ash Content": "6-10%",
      "Foreign Matter": "< 1%",
      Color: "Light Brown to Golden",
      Uniformity: "95%+ consistent cut",
    },
    packaging: [
      "Bulk bags (500-1000kg)",
      "Compressed bales (25-40kg)",
      "Loose bulk delivery",
      "Custom packaging options",
    ],
    applications: [
      "Feed ingredient for livestock",
      "Bedding material",
      "Compost base material",
      "Soil conditioner",
      "Biomass fuel pellet base",
    ],
    storage:
      "Store in dry conditions with good ventilation. Protect from moisture and pests. Ideal humidity: below 65%.",
    shelfLife: "12-15 months when stored properly",
    images: [
      "../images/animal feed/item 4.jpg",
      "../images/animal feed/item 5.jpg",
    ],
  },
  citrus: {
    title: "Premium Citrus",
    description:
      "Fresh oranges, lemons, and other citrus fruits from carefully selected Egyptian orchards. Harvested at peak ripeness and handled with care to maintain freshness.",
    specifications: {
      "Sugar Content (Brix)": "11-14°",
      Acidity: "0.8-1.2%",
      "Juice Content": "45-55%",
      "Size Range": "60-90mm diameter",
      Color: "Uniform orange/yellow",
      "Skin Thickness": "4-6mm",
      "Vitamin C": "50-60mg/100g",
      Moisture: "85-90%",
      "Shelf Life": "3-4 weeks refrigerated",
    },
    packaging: [
      "Cardboard cartons (15-20kg)",
      "Plastic crates (18-20kg)",
      "Net bags (5-10kg)",
      "Bulk containers (300-500kg)",
    ],
    applications: [
      "Fresh consumption",
      "Juice processing",
      "Food industry ingredient",
      "Essential oil extraction",
      "Dried fruit processing",
    ],
    storage:
      "Cold storage at 2-8°C with 85-90% relative humidity. Maintain proper ventilation and avoid temperature fluctuations.",
    shelfLife: "3-4 weeks under proper cold storage conditions",
    images: ["../images/fruits/item 1.jpg", "../images/fruits/item 2.jpg"],
  },
  seasonal: {
    title: "Seasonal Fruits",
    description:
      "A variety of seasonal fruits including grapes, pomegranates, dates, and other premium varieties. Each fruit is carefully selected for export quality standards.",
    specifications: {
      "Sugar Content": "Varies by fruit type",
      "Moisture Content": "75-90%",
      "Size Grade": "Premium select",
      Color: "Variety specific",
      Firmness: "Optimal for shipping",
      "Skin Quality": "Blemish-free",
      Maturity: "Peak ripeness",
      Packaging: "Export grade",
      "Shelf Life": "Varies by type",
    },
    packaging: [
      "Specialized fruit cartons",
      "Ventilated plastic crates",
      "Protective foam inserts",
      "Temperature-controlled containers",
    ],
    applications: [
      "Fresh fruit markets",
      "Gourmet food industry",
      "Processing and canning",
      "Dried fruit production",
      "Juice and beverage industry",
    ],
    storage:
      "Temperature and humidity controlled storage specific to each fruit type. Generally 0-5°C with appropriate humidity levels.",
    shelfLife: "Varies by fruit type: 1-8 weeks under proper storage",
    images: ["../images/fruits/item 3.jpg", "../images/fruits/item 4.jpg"],
  },
};

// Initialize products page functionality
document.addEventListener("DOMContentLoaded", function () {
  initializeProductNavigation();
  initializeImageGallery();
  initializeProductModals();
  initializeScrollAnimations();
  initializeProductFiltering();
});

// Product navigation functionality
function initializeProductNavigation() {
  const navItems = document.querySelectorAll(".product-nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all items
      navItems.forEach((nav) => nav.classList.remove("active"));

      // Add active class to clicked item
      this.classList.add("active");

      // Get category and filter products
      const category = this.getAttribute("data-category");
      filterProductsByCategory(category);

      // Smooth scroll to products section
      const targetSection =
        category === "all"
          ? document.getElementById("animal-feed")
          : document.getElementById(category);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 120;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Filter products by category
function filterProductsByCategory(category) {
  const productSections = document.querySelectorAll(".product-section");

  productSections.forEach((section) => {
    if (category === "all") {
      section.style.display = "block";
    } else if (section.id === category) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

// Image gallery functionality
function initializeImageGallery() {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const gallery = this.closest(".product-image-gallery");
      const mainImage = gallery.querySelector(".product-img");
      const allThumbnails = gallery.querySelectorAll(".thumbnail");

      // Remove active class from all thumbnails
      allThumbnails.forEach((thumb) => thumb.classList.remove("active"));

      // Add active class to clicked thumbnail
      this.classList.add("active");

      // Update main image
      mainImage.src = this.src;
      mainImage.alt = this.alt;

      // Add fade effect
      mainImage.style.opacity = "0";
      setTimeout(() => {
        mainImage.style.opacity = "1";
      }, 150);
    });
  });
}

// Product modal functionality
function initializeProductModals() {
  // Create modal HTML if it doesn't exist
  if (!document.getElementById("product-modal")) {
    const modalHTML = `
            <div id="product-modal" class="product-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="modal-title"></h3>
                        <button class="modal-close" onclick="closeProductModal()">
                            <i data-lucide="x"></i>
                        </button>
                    </div>
                    <div class="modal-body" id="modal-body">
                        <!-- Content will be loaded here -->
                    </div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  // Close modal when clicking outside
  document
    .getElementById("product-modal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeProductModal();
      }
    });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeProductModal();
    }
  });
}

// Open product modal
function openProductModal(productId) {
  const modal = document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  const product = productData[productId];

  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  // Set modal title
  modalTitle.textContent = product.title;

  // Create modal content
  const modalContent = `
        <div class="modal-product-info">
            <div class="modal-product-images">
                <div class="modal-main-image">
                    <img src="${product.images[0]}" alt="${
    product.title
  }" class="modal-img">
                </div>
                ${
                  product.images.length > 1
                    ? `
                    <div class="modal-thumbnails">
                        ${product.images
                          .map(
                            (img, index) => `
                            <img src="${img}" alt="${product.title} ${
                              index + 1
                            }" 
                                 class="modal-thumbnail ${
                                   index === 0 ? "active" : ""
                                 }"
                                 onclick="changeModalImage('${img}')">
                        `
                          )
                          .join("")}
                    </div>
                `
                    : ""
                }
            </div>
            
            <div class="modal-product-details">
                <p class="modal-description">${product.description}</p>
                
                <div class="modal-section">
                    <h4><i data-lucide="clipboard-list"></i> Technical Specifications</h4>
                    <div class="spec-grid">
                        ${Object.entries(product.specifications)
                          .map(
                            ([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-label">${key}:</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="package"></i> Packaging Options</h4>
                    <ul class="modal-list">
                        ${product.packaging
                          .map((item) => `<li>${item}</li>`)
                          .join("")}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="target"></i> Applications</h4>
                    <ul class="modal-list">
                        ${product.applications
                          .map((item) => `<li>${item}</li>`)
                          .join("")}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="warehouse"></i> Storage Requirements</h4>
                    <p>${product.storage}</p>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="calendar"></i> Shelf Life</h4>
                    <p>${product.shelfLife}</p>
                </div>
                
                <div class="modal-actions">
                    <a href="../index.html#contact" class="btn btn-accent btn-lg">
                        <i data-lucide="mail"></i>
                        Request Quote for ${product.title}
                    </a>
                    <a href="tel:+201026074490" class="btn btn-outline btn-lg">
                        <i data-lucide="phone"></i>
                        Call for Details
                    </a>
                </div>
            </div>
        </div>
    `;

  modalBody.innerHTML = modalContent;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Initialize Lucide icons in modal
  lucide.createIcons();
}

// Close product modal
function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Change modal image
function changeModalImage(imageSrc) {
  const modalImg = document.querySelector(".modal-img");
  const thumbnails = document.querySelectorAll(".modal-thumbnail");

  // Remove active class from all thumbnails
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  // Add active class to clicked thumbnail
  event.target.classList.add("active");

  // Change main image with fade effect
  modalImg.style.opacity = "0";
  setTimeout(() => {
    modalImg.src = imageSrc;
    modalImg.style.opacity = "1";
  }, 150);
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe product cards
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
    observer.observe(card);
  });

  // Observe standard cards
  const standardCards = document.querySelectorAll(".standard-card");
  standardCards.forEach((card) => {
    card.classList.add("slide-in-up");
    observer.observe(card);
  });
}

// Product filtering and search
function initializeProductFiltering() {
  // This could be extended to include search functionality
  // For now, we'll just set up the foundation

  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce(function (e) {
        const query = e.target.value.toLowerCase();
        filterProductsBySearch(query);
      }, 300)
    );
  }
}

// Filter products by search query
function filterProductsBySearch(query) {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const title = card
      .querySelector(".product-title")
      .textContent.toLowerCase();
    const description = card
      .querySelector(".product-description")
      .textContent.toLowerCase();
    const features = Array.from(card.querySelectorAll(".feature-tag"))
      .map((tag) => tag.textContent.toLowerCase())
      .join(" ");

    const searchableText = `${title} ${description} ${features}`;

    if (query === "" || searchableText.includes(query)) {
      card.style.display = "block";
      card.classList.remove("filtered-out");
    } else {
      card.style.display = "none";
      card.classList.add("filtered-out");
    }
  });
}

// Utility function for debouncing
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

// Update navigation active state based on scroll
function updateProductNavigation() {
  const sections = document.querySelectorAll(".product-section");
  const navItems = document.querySelectorAll(".product-nav-item");
  const scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navItems.forEach((item) => item.classList.remove("active"));
      const correspondingNav = document.querySelector(
        `[data-category="${sectionId}"]`
      );
      if (correspondingNav) {
        correspondingNav.classList.add("active");
      }
    }
  });
}

// Add scroll listener for navigation updates
window.addEventListener("scroll", debounce(updateProductNavigation, 100));

// Analytics tracking for product interactions
function trackProductInteraction(action, productId) {
  // This would integrate with your analytics system
  if (window.ELShahdWebsite && window.ELShahdWebsite.trackEvent) {
    window.ELShahdWebsite.trackEvent("Product", action, productId);
  }
}

// Track product card clicks
document.addEventListener("click", function (e) {
  const productCard = e.target.closest(".product-card");
  if (productCard) {
    const productTitle =
      productCard.querySelector(".product-title")?.textContent;
    if (productTitle) {
      trackProductInteraction("Card Click", productTitle);
    }
  }
});

// Export functions for external use
window.ProductsPage = {
  openProductModal,
  closeProductModal,
  changeModalImage,
  filterProductsByCategory,
  filterProductsBySearch,
};
