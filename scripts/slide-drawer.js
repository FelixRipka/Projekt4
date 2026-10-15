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

// Counter and Validation Logic on Submit
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const signCounter = document.getElementById("signCounter");

const firstNameError = document.querySelector(".missing-input__firstname");
const lastNameError = document.querySelector(".missing-input__lastname");
const emailError = document.querySelector(".missing-input__email");

const signForm = document.getElementById("signForm");

// Initialize counter at 0 and hide errors by default
signCounter.textContent = "0";
firstNameError.style.display = "none";
lastNameError.style.display = "none";
emailError.style.display = "none";

signForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Stops the page from refreshing
    
    let isValid = true;

    if (firstNameInput.value.trim() === "") {
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstNameError.style.display = "none";
    }

    if (lastNameInput.value.trim() === "") {
        lastNameError.style.display = "block";
        isValid = false;
    } else {
        lastNameError.style.display = "none";
    }

    if (emailInput.value.trim() === "") {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Only +1 to the counter if all 3 required fields have text when submitting
    if (isValid) {
        let currentCount = parseInt(signCounter.textContent, 10);
        signCounter.textContent = currentCount + 1;
    }
});