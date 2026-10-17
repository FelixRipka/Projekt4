let acc = document.getElementsByClassName("accordion"); /*variabel der får accordierne*/ 
let i;

for (i = 0; i < acc.length; i++) { /*Går igennem alle accordierne*/
  acc[i].addEventListener("click", function() { /*Sætter et event på hver accordion, så hvis der klikkes på en af dem vil funktionen under ske*/
    this.classList.toggle("active"); /*Den gør klassen active*/
    let panel = this.nextElementSibling; /*Laver en variabel med den klikkede accordions panel*/
    if (panel.style.maxHeight) { /*hvis panel har en maxHeight skal den lukke*/
      panel.style.maxHeight = null; 
    } else { 
      panel.style.maxHeight = panel.scrollHeight + "px"; /*Når den ikke har en maxHeight skal der laves en og den skal være penelets højde i px*/
    } 
  });
}