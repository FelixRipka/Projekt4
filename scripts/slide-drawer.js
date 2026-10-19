// "STØT" drawer
const support = document.getElementById("supportDrawer");
const supportBtn = document.querySelector(".support-btn");
const supportClose = document.getElementById("supportDrawerClose");

supportBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    support.classList.toggle("open");
});

supportClose.addEventListener("click", () => {
    support.classList.remove("open");
});

// "STØT" interactivity
const customAmountInputSupport = document.getElementById(".customAmount")
const firstNameInputSupport = document.getElementById("firstNameInputSupport");
const lastNameInputSupport = document.getElementById("lastNameInputSupport");
const emailInputSupport = document.getElementById("emailInputSupport");

const customAmountInput = document.querySelector(".customAmountInput");
const customAmountErrorSupport = document.querySelector(".missing-input__customAmount");
const firstNameErrorSupport = document.querySelector(".missing-input__firstnameSupport");
const lastNameErrorSupport = document.querySelector(".missing-input__lastnameSupport");
const emailErrorSupport = document.querySelector(".missing-input__emailSupport");

const supportBenefits = document.querySelector(".support-benefits");


// hide customAmount, support-benefits and error messages by default
supportBenefits.style.display = "none";
customAmountInput.style.display = "none";
customAmountErrorSupport.style.display = "none";

firstNameErrorSupport.style.display = "none";
lastNameErrorSupport.style.display = "none";
emailErrorSupport.style.display = "none";

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
const firstNameInputSign = document.getElementById("firstNameInputSign");
const lastNameInputSign = document.getElementById("lastNameInputSign");
const emailInputSign = document.getElementById("emailInputSign");
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

    if (firstNameInputSign.value.trim() === "") {
        firstNameErrorSign.style.display = "block";
        isValid = false;
    } else {
        firstNameErrorSign.style.display = "none";
    }

    if (lastNameInputSign.value.trim() === "") {
        lastNameErrorSign.style.display = "block";
        isValid = false;
    } else {
        lastNameErrorSign.style.display = "none";
    }

    if (emailInputSign.value.trim() === "") {
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