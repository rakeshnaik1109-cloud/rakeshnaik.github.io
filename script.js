



/* =====================================================
   PUBLICATION AUTO-FORMAT (With Author Highlighting)
===================================================== */
const publications = [
  {
    authors: "A Yadav, R Naik, E Gupta, PP Roy, SK Srivastava",
    title: "Single-shot, receptor-free, rapid detection and classification of five respiratory viruses by machine learning integrated SERS sensing platform",
    journal: "Biosensors and Bioelectronics 279, 117394",
    year: "2025"
  },
  {
    authors: "Arti Yadav, Rakesh Naik, Ekta Gupta, Partha Pratim Roy, SK Srivastava",
    title: "Machine Learning-Enabled SERS (ML-SERS) Sensor for Rapid Classification of SARS-CoV-2 Variants in Clinical Nasopharyngeal Swab (CNS) Samples",
    journal: "2025 Optica Sensing Congress (OSC), 1–2",
    year: "2025"
  },
  {
    authors: "A Yadav, R Naik, E Gupta, PP Roy, SK Srivastava",
    title: "Addressing Complexity and Variability Issues of SERS Spectra of Clinical Nasopharyngeal Swab (CNS) Samples for Respiratory Viruses Detection using Machine Learning",
    journal: "CLEO: Applications and Technology, AA109_3",
    year: "2025"
  },
  {
    authors: "Arti Yadav, Rakesh Naik, Ekta Gupta, Partha Pratim Roy, SK Srivastava",
    title: "Machine Learning-integrated SERS Platform for Single-Shot, Receptor-Free Rapid Detection and Classification of Respiratory Viruses",
    journal: "2025 Research Scholar Day, Department of Physics, 1",
    year: "2025"
  },
  {
    authors: "Rakesh Naik, SK Srivastava",
    title: "Machine Learning-Based Detection and Classification of Bacterial and Fungal Species and Their Mixture through Raman Spectra Analysis",
    journal: "Workshop on Computational Techniques in Optics & Photonics",
    year: "2024"
  }
];

const renderPublications = () => {
  const pubList = document.getElementById("pub-list");
  if (!pubList) return;

  pubList.innerHTML = publications.map(pub => {
    // UPDATED: Now looks for R Naik or Rakesh Naik to bold them
    const highlightedAuthors = pub.authors.replace(/(R Naik|Rakesh Naik)/g, "<strong>$1</strong>");
    
    return `
      <div class="blog-post">
        <p style="margin-bottom: 5px;">
          ${highlightedAuthors}, 
          <span style="color: var(--primary); font-weight: 500;">"${pub.title}"</span>
        </p>
        <p class="date"><i>${pub.journal}</i> — ${pub.year}</p>
      </div>
    `;
  }).join("");
};







/* =====================================================
   MODERN SCROLL ANIMATION (Intersection Observer)
==================================================== */
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  }, observerOptions);

  document.querySelectorAll(".image-card, .gallery-item, .project-card").forEach(el => {
    observer.observe(el);
  });
};


async function updateVisitorCount() {
    const countElement = document.getElementById('visit-count');
    if (!countElement) return;

    try {
        // Replace 'rakeshnaik.com' with your actual website name to make it unique
        const response = await fetch('https://api.countapi.xyz/hit/rakeshnaik.com/visits');
        const data = await response.json();
        
        // Update the number with a nice padding (e.g., 0042)
        countElement.innerText = data.value.toString().padStart(4, '0');
    } catch (error) {
        console.log("Visitor counter unavailable");
        countElement.innerText = "----";
    }
}

// Call this inside your DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", () => {
    updateVisitorCount();
    // ... your other functions (renderPublications, etc.)
});


/* =====================================================
   IMAGE GALLERY CONTROLLER
===================================================== */
const setupGallery = () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("zoomedImg");
  const images = Array.from(document.querySelectorAll(".image-card img, .gallery-item img"));
  let currentIndex = 0;

  if (!modal || !modalImg || images.length === 0) return;

  const updateModalImage = (index) => {
    currentIndex = index;
    modalImg.style.opacity = "0";
    setTimeout(() => {
      modalImg.src = images[currentIndex].src;
      modalImg.style.opacity = "1";
    }, 150);
  };

  images.forEach((img, index) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // Changed to flex for better centering
      updateModalImage(index);
    });
  });

  // Controls
  document.querySelector(".close")?.addEventListener("click", () => modal.style.display = "none");
  document.querySelector(".next")?.addEventListener("click", () => updateModalImage((currentIndex + 1) % images.length));
  document.querySelector(".prev")?.addEventListener("click", () => updateModalImage((currentIndex - 1 + images.length) % images.length));

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") updateModalImage((currentIndex + 1) % images.length);
      if (e.key === "ArrowLeft") updateModalImage((currentIndex - 1 + images.length) % images.length);
      if (e.key === "Escape") modal.style.display = "none";
    }
  });
};

/* =====================================================
   INITIALIZE EVERYTHING
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderPublications();
  setupScrollAnimations();
  setupGallery();
});

function togglePost(btn) {
    // Find the hidden content div relative to the button
    const fullContent = btn.parentElement.querySelector('.post-full-content');
    
    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "block";
        btn.innerHTML = "Show Less ↑";
        btn.style.background = "var(--primary)";
        btn.style.color = "white";
    } else {
        fullContent.style.display = "none";
        btn.innerHTML = "Read Full Story ↓";
        btn.style.background = "transparent";
        btn.style.color = "var(--primary)";
        
        // Optional: Scroll back up to the start of the post smoothly
        btn.parentElement.scrollIntoView({ behavior: 'smooth' });
    }
}
