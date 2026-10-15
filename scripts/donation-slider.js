// const opretter en variabel, som ikke senere får en ny værdi.
// Listen er sorteret efter minimumsbeløb og indeholder teksterne til hvert beløbsniveau.
const impactLevels = [
	{
		// minimum er den laveste donation, hvor denne tekst skal vises.
		minimum: 50,
		// Teksten før "ELLER" i HTML'en.
		equivalent: "EN KOP KAFFE",
		// Teksten efter "ELLER". <br> laver et linjeskift, når teksten indsættes som HTML.
		description: "5 DAGES MAD TIL EN HUND<br>PÅ ET DANSK INTERNAT",
	},
	{
		minimum: 100,
		equivalent: "EN GOD GÅTUR",
		description: "MAD TIL EN HUND<br>I FLERE DAGE",
	},
    	{
		minimum: 150,
		equivalent: "EN GOD GÅTUR",
		description: "MAD TIL EN HUND<br>I FLERE DAGE",
	},
	{
		minimum: 250,
		equivalent: "EN TRYGT HJEM",
		description: "PLEJE OG OMSORG<br>TIL EN INTERNATHUND",
	},
    	{
		minimum: 300,
		equivalent: "EN GOD GÅTUR",
		description: "MAD TIL EN HUND<br>I FLERE DAGE",
	},
	{
		minimum: 400,
		equivalent: "En tur på Mac Donalds med familien",
		description: "Hjælp en hund<br>videre til en kærligt hjem",
	},
];

// Find hver donationsboks separat, så flere bokse kan ligge på samme side.
document.querySelectorAll(".donation-widget").forEach((widget) => {
	// querySelector finder kun elementer inde i den aktuelle boks.
	const slider = widget.querySelector("[data-donation-slider]");
	const amount = widget.querySelector("[data-donation-amount]");
	const equivalent = widget.querySelector("[data-donation-equivalent]");
	const description = widget.querySelector("[data-donation-description]");

	// Spring over en wrapper, hvis den mangler et af de elementer, slideren kræver.
	if (!slider || !amount || !equivalent || !description) {
		return;
	}

	// En funktion samler opdateringen af beløb og tekster ét sted.
	function updateDonation() {
		// slider.value er tekst, så Number(...) omdanner værdien til et tal.
		const value = Number(slider.value);
		// ... laver en kopi af niveau-listen, reverse() vender rækkefølgen,
		// og find() vælger første niveau, hvor donationen når minimumsbeløbet.
		const impact = [...impactLevels].reverse().find((level) => value >= level.minimum);

		// textContent ændrer synlig tekst. Backticks og ${value} indsætter beløbet.
		amount.textContent = `${value} KR`;
		equivalent.textContent = impact.equivalent;
		// innerHTML fortolker <br> i den faste beskrivelse som et linjeskift.
		description.innerHTML = impact.description;
	}

	// input-hændelsen sker, mens slideren flyttes, og udløser opdateringen.
	slider.addEventListener("input", updateDonation);
	// Sæt tekst og beløb korrekt fra start, også hvis startværdien ændres i HTML.
	updateDonation();
});
