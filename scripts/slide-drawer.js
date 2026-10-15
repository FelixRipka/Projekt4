// "STØT" drawer

const drawer = document.getElementById("supportDrawer");
const drawerBtn = document.querySelector(".support-btn");
const drawerClose = document.getElementById("supportDrawerClose");

drawerBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    drawer.classList.toggle("open");
});

drawerClose.addEventListener("click", () => {
    drawer.classList.remove("open");
});


// "SKRIV UNDER FOR GRISENE" drawer

const sign = document.getElementById("signDrawer");
const signClose = document.getElementById("signDrawerClose");

document.addEventListener("click", (e) => {
    if (e.target instanceof Element && e.target.closest(".sign-btn")) {
        e.preventDefault();
        sign.classList.toggle("open");
    }
});

signClose.addEventListener("click", () => {
    sign.classList.remove("open");
});