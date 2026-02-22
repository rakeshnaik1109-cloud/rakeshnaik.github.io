


/* =====================================================
   LOAD SAVED DARK MODE
===================================================== */

if(localStorage.getItem("darkMode") === "true") {

document.body.classList.add("dark");

}


/* =====================================================
   PUBLICATION AUTO-FORMAT
===================================================== */

const publications = [

{
authors: "R. Naik",
title: "Machine learning-enabled SERS sensing platform",
journal: "Work in Progress",
year: "2026"
},

{
authors: "R. Naik",
title: "Interferometry-based optical sensing system",
journal: "Work in Progress",
year: "2025"
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




