// DARK MODE TOGGLE

function toggleDarkMode() {

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

}


// LOAD SAVED DARK MODE

if(localStorage.getItem("darkMode") === "true") {

document.body.classList.add("dark");

}



// PUBLICATION AUTO-FORMAT

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



// IMAGE SCROLL ANIMATION (FIXED)

const cards = document.querySelectorAll(".image-card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const rect = card.getBoundingClientRect();

if(rect.top < window.innerHeight - 100){

card.classList.add("show");

}

});

});


// OPTIONAL: Trigger animation on page load

window.dispatchEvent(new Event("scroll"));


