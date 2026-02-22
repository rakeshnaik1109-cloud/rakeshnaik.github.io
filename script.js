





/* =====================================================
   PUBLICATION AUTO-FORMAT
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
  authors: "Rakesh Naik,SK Srivastava ",
  title: "Machine Learning-Based Detection and Classification of Bacterial and Fungal Species and Their Mixture through Raman Spectra Analysis",
  journal: "Workshop on Computational Techniques in Optics & Photonics",
  year: "2024"
}

];

const pubList = document.getElementById("pub-list");

if(pubList){

pubList.innerHTML = "";

publications.forEach(pub => {

const div = document.createElement("div");

div.innerHTML = `
<p>
${pub.authors}, 
"${pub.title}," 
<i>${pub.journal}</i>, 
${pub.year}
</p>
`;

pubList.appendChild(div);

});

}


/* =====================================================
   IMAGE SCROLL ANIMATION (ONE-BY-ONE)
===================================================== */

const cards = document.querySelectorAll(".image-card");

function showCardsOnScroll(){

cards.forEach(card => {

const rect = card.getBoundingClientRect();

if(rect.top < window.innerHeight - 100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll", showCardsOnScroll);
window.addEventListener("load", showCardsOnScroll);


/* =====================================================
   PROFESSIONAL IMAGE GALLERY WITH NAVIGATION
===================================================== */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("zoomedImg");

const images = document.querySelectorAll(".image-card img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;


/* Only run gallery if modal exists */

if(modal && modalImg && images.length > 0){

// OPEN IMAGE

images.forEach((img, index) => {

img.addEventListener("click", () => {

modal.style.display = "block";
modalImg.src = img.src;
currentIndex = index;

});

});


// CLOSE BUTTON

if(closeBtn){

closeBtn.onclick = () => modal.style.display = "none";

}


// CLICK OUTSIDE TO CLOSE

modal.addEventListener("click", (e) => {

if(e.target === modal){

modal.style.display = "none";

}

});


// NEXT BUTTON

if(nextBtn){

nextBtn.onclick = () => {

currentIndex = (currentIndex + 1) % images.length;
modalImg.src = images[currentIndex].src;

};

}


// PREVIOUS BUTTON

if(prevBtn){

prevBtn.onclick = () => {

currentIndex = (currentIndex - 1 + images.length) % images.length;
modalImg.src = images[currentIndex].src;

};

}


// KEYBOARD NAVIGATION

document.addEventListener("keydown", (e) => {

if(modal.style.display === "block"){

if(e.key === "ArrowRight" && nextBtn) nextBtn.onclick();

if(e.key === "ArrowLeft" && prevBtn) prevBtn.onclick();

if(e.key === "Escape") modal.style.display = "none";

}

});

}


/* =====================================================
   TRIGGER ANIMATION ON PAGE LOAD
===================================================== */

window.dispatchEvent(new Event("scroll"));






