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
    const signBtn = e.target.closest(".sign-btn");
    if (!signBtn) {
        return;
    }

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

const firstNameErrorSign = document.querySelector(".missing-input__firstnameSign");
const lastNameErrorSign = document.querySelector(".missing-input__lastnameSign");
const emailErrorSign = document.querySelector(".missing-input__emailSign");

const signForm = document.getElementById("signForm");

// start counter at 0 and hide error messages by default
signCounter.textContent = "0";
firstNameErrorSign.style.display = "none";
lastNameErrorSign.style.display = "none";
emailErrorSign.style.display = "none";

signForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stops the page from refreshing i think
    
    let isValid = true;

    if (firstNameInput.value.trim() === "") {
        firstNameErrorSign.style.display = "block";
        isValid = false;
    } else {
        firstNameErrorSign.style.display = "none";
    }

    if (lastNameInput.value.trim() === "") {
        lastNameErrorSign.style.display = "block";
        isValid = false;
    } else {
        lastNameErrorSign.style.display = "none";
    }

    if (emailInput.value.trim() === "") {
        emailErrorSign.style.display = "block";
        isValid = false;
    } else {
        emailErrorSign.style.display = "none";
    }

    // adds +1 to the counter ONLY if all 3 required fields have userinput when submitting
    if (isValid) {
        let currentCount = parseInt(signCounter.textContent, 10);
        signCounter.textContent = currentCount + 1;
    }
});