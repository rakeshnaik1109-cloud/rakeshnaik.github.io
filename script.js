
function toggleDarkMode() {

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

}

if(localStorage.getItem("darkMode") === "true") {

document.body.classList.add("dark");

}


// Publication auto-format

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
