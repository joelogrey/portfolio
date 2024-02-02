
// function contentSlide() {
  
// };
let slidesHome = document.getElementById("main-Content-1");
let slidesAbout = document.getElementById("main-Content-2");
let slidesContact = document.getElementById("main-Content-3");
let navsHome = document.getElementById("btnNav-Home");
let navsAbout = document.getElementById("btnNav-About");
let navsContact = document.getElementById("btnNav-Contact");


if (slidesHome.style.display === "block") {
    navsHome.style.borderBottom = "";
} else {
    navsHome.style.borderBottom = "2px solid #ff8fe3";
    
}

// Add a click event listener to the button
navsHome.addEventListener("click", function () {
    if (slidesHome.style.display === "none") {
        slidesHome.style.display = "block";
        slidesAbout.style.display = "none";
        slidesContact.style.display = "none"
        navsHome.style.borderBottom = "2px solid #ff8fe3";
        navsAbout.style.borderBottom = "";
        navsContact.style.borderBottom = "";
    } else {
        slidesHome.style.display = "none";
    }
});
navsAbout.addEventListener("click", function () {
    if (slidesAbout.style.display === "none") {
        slidesAbout.style.display = "block";
        slidesHome.style.display = "none";
        slidesContact.style.display = "none";
        navsAbout.style.borderBottom = "2px solid #ff8fe3";
        navsHome.style.borderBottom = "";
        navsContact.style.borderBottom = "";

    } else {
        slidesAbout.style.display = "none";
    }
});
navsContact.addEventListener("click", function () {
    if (slidesContact.style.display === "none") {
        slidesContact.style.display = "block";
        slidesHome.style.display = "none";
        slidesAbout.style.display = "none";
        navsContact.style.borderBottom = "2px solid #ff8fe3"
        navsAbout.style.borderBottom = "";
        navsHome.style.borderBottom = "";
    } else {
        slidesContact.style.display = "none";
    }
});