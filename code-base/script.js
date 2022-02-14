const navButton = document.getElementById("open-nav");
const navBar = document.getElementById("page-header");
const closeButton = document.getElementById("close-nav");

navButton.addEventListener("click", () => {
    if (navBar.style.display !== "none") {
        navBar.style.display = "none";
        navButton.style.visibility = "visible";
        closeButton.style.visibility = "hidden";
    }else {
        navBar.style.display = "flex";
        navButton.style.visibility = "hidden";
        closeButton.style.visibility = "initial";
    };
});
closeButton.addEventListener("click", () => {
    if (navBar.style.display !== "none") {
        navBar.style.display = "none";
        navButton.style.visibility = "visible";
        closeButton.style.visibility = "hidden";
    }else {
        navBar.style.display = "flex";
        navButton.style.visibility = "hidden";
        closeButton.style.visibility = "initial";
    };
});