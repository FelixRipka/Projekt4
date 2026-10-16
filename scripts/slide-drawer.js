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
const signBtn = document.querySelector(".sign-btn");
const signClose = document.getElementById("signDrawerClose");

signBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    sign.classList.toggle("open");
});

signClose.addEventListener("click", () => {
    sign.classList.remove("open");
});


// "SKRIV UNDER FOR GRISENE" counter
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const signCounter = document.getElementById("signCounter");

const firstNameError = document.querySelector(".missing-input__firstname");
const lastNameError = document.querySelector(".missing-input__lastname");
const emailError = document.querySelector(".missing-input__email");

const signForm = document.getElementById("signForm");

// start counter at 0 and hide error messages by default
signCounter.textContent = "0";
firstNameError.style.display = "none";
lastNameError.style.display = "none";
emailError.style.display = "none";

signForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stops the page from refreshing i think
    
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

    // adds +1 to the counter ONLY if all 3 required fields have userinput when submitting
    if (isValid) {
        let currentCount = parseInt(signCounter.textContent, 10);
        signCounter.textContent = currentCount + 1;
    }
});