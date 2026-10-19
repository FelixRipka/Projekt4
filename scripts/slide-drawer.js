// "STØT" drawer
const support = document.getElementById("supportDrawer");
if (support) {
    const supportBtns = document.querySelectorAll(".support-btn");
    const supportClose = document.getElementById("supportDrawerClose");
    const supportForm = document.getElementById("supportForm");

    supportBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); 
            support.classList.toggle("open");
        });
    });

    supportClose.addEventListener("click", () => {
        support.classList.remove("open");
    });

    // "STØT" interactivity
    const firstNameInputSupport = document.getElementById("firstNameInputSupport");
    const lastNameInputSupport = document.getElementById("lastNameInputSupport");
    const emailInputSupport = document.getElementById("emailInputSupport");

    const customAmountInput = document.querySelector(".customAmountInput");
    const customAmountWrapper = document.querySelector(".input-wrapper.optional-required");
    const customAmountErrorSupport = document.querySelector(".missing-input__customAmount");
    const firstNameErrorSupport = document.querySelector(".missing-input__firstnameSupport");
    const lastNameErrorSupport = document.querySelector(".missing-input__lastnameSupport");
    const emailErrorSupport = document.querySelector(".missing-input__emailSupport");

    const supportBenefits = document.querySelector(".support-benefits");

    // get all rows of buttons inside the support form
    const buttonRows = document.querySelectorAll("#supportForm .buttons-row");
    const typeButtons = buttonRows[0].querySelectorAll("button"); // row 1 ("Bliv Medlem" & "Støt én gang")
    const amountButtons = buttonRows[1].querySelectorAll("button"); // row 2 (donationAmount1, 2, 3 & "Andet")

    const donationAmount1 = document.getElementById("donationAmount1");
    const donationAmount2 = document.getElementById("donationAmount2");
    const donationAmount3 = document.getElementById("donationAmount3");
    const onceOrMonth = document.getElementById("onceOrMonth");

    // hide custom amount wrapper and error messages by default
    customAmountWrapper.style.display = "none";
    customAmountErrorSupport.style.display = "none";
    firstNameErrorSupport.style.display = "none";
    lastNameErrorSupport.style.display = "none";
    emailErrorSupport.style.display = "none";

    // Helper function to update state based on whether "Bliv Medlem" is active
    function updateSupportDrawerState() {
        const isMemberActive = typeButtons[0].classList.contains("donation-button__selected");

        if (isMemberActive) {
            donationAmount1.textContent = "100 kr.";
            donationAmount2.textContent = "50 kr.";
            donationAmount3.textContent = "30 kr.";
            supportBenefits.classList.remove("support-benefits--hidden");
            if (onceOrMonth) onceOrMonth.textContent = "månedligt beløb";
        } else {
            donationAmount1.textContent = "500 kr.";
            donationAmount2.textContent = "250 kr.";
            donationAmount3.textContent = "100 kr.";
            supportBenefits.classList.add("support-benefits--hidden");
            if (onceOrMonth) onceOrMonth.textContent = "engangsbeløb";
        }
    }

    // initial selected buttons are "Bliv Medlem" (index 0) and donationAmount1 (index 0)
    typeButtons.forEach(btn => {
        btn.classList.remove("donation-button__selected");
        btn.classList.add("donation-button");
    });
    typeButtons[0].classList.add("donation-button__selected");
    typeButtons[0].classList.remove("donation-button");

    amountButtons.forEach(btn => {
        btn.classList.remove("donation-button__selected");
        btn.classList.add("donation-button");
    });
    amountButtons[0].classList.add("donation-button__selected");
    amountButtons[0].classList.remove("donation-button");

    updateSupportDrawerState();

    // row 1 ("Bliv Medlem" & "Støt én gang")
    typeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            typeButtons.forEach(b => {
                b.classList.remove("donation-button__selected");
                b.classList.add("donation-button");
            });
            btn.classList.add("donation-button__selected");
            btn.classList.remove("donation-button");

            updateSupportDrawerState();
        });
    });

    // row 2 (amounts / Andet)
    amountButtons.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            amountButtons.forEach(b => {
                b.classList.remove("donation-button__selected");
                b.classList.add("donation-button");
            });
            btn.classList.add("donation-button__selected");
            btn.classList.remove("donation-button");

            // If "Andet" (the last button) is clicked, show custom wrapper, otherwise hide it
            if (idx === amountButtons.length - 1) {
                customAmountWrapper.style.display = "flex";
            } else {
                customAmountWrapper.style.display = "none";
                customAmountErrorSupport.style.display = "none";
                customAmountInput.value = "";
            }
        });
    });

    // check if the required inputs in "STØT" have userinputs
    supportForm.addEventListener("submit", function(e) {
        let isValid = true;

        if (firstNameInputSupport.value.trim() === "") {
            firstNameErrorSupport.style.display = "block";
            isValid = false;
        } else {
            firstNameErrorSupport.style.display = "none";
        }

        if (lastNameInputSupport.value.trim() === "") {
            lastNameErrorSupport.style.display = "block";
            isValid = false;
        } else {
            lastNameErrorSupport.style.display = "none";
        }

        if (emailInputSupport.value.trim() === "") {
            emailErrorSupport.style.display = "block";
            isValid = false;
        } else {
            emailErrorSupport.style.display = "none";
        }

        // check customAmount only if "Andet" is currently selected
        const isAndetSelected = amountButtons[amountButtons.length - 1].classList.contains("donation-button__selected");
        if (isAndetSelected) {
            if (customAmountInput.value.trim() === "") {
                customAmountErrorSupport.style.display = "block";
                isValid = false;
            } else {
                customAmountErrorSupport.style.display = "none";
            }
        } else {
            customAmountErrorSupport.style.display = "none";
        }

        // only prevent page refresh if validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });
}

// "SKRIV UNDER FOR GRISENE" drawer
const sign = document.getElementById("signDrawer");
if (sign) {
    const signClose = document.getElementById("signDrawerClose");
    const signForm = document.getElementById("signForm");

    document.addEventListener("click", (e) => {
        const signBtn = e.target.closest(".sign-btn");
        if (!signBtn) return;

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

    signCounter.textContent = "0";
    firstNameErrorSign.style.display = "none";
    lastNameErrorSign.style.display = "none";
    emailErrorSign.style.display = "none";

    signForm.addEventListener("submit", function(e) {
        e.preventDefault(); 
        
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

        if (isValid) {
            let currentCount = parseInt(signCounter.textContent, 10);
            signCounter.textContent = currentCount + 1;
        }
    });
}