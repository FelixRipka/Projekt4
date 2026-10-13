function initializeCarousel() {
	const carousel = document.querySelector("[data-issue-carousel]");
	if (!carousel) return;

	const track = carousel.querySelector(".carousel-track");
	const buttons = carousel.querySelectorAll("[data-carousel-direction]");
	let isAnimating = false;

	function move(direction) {
		if (isAnimating) return;
		isAnimating = true;

		const firstCard = track.firstElementChild;
		const gap = parseFloat(getComputedStyle(track).gap) || 0;
		const step = firstCard.getBoundingClientRect().width + gap;

		track.style.transition = "none";
		if (direction === "previous") {
			track.prepend(track.lastElementChild);
			track.style.transform = `translateX(-${step}px)`;
		} else {
			track.style.transform = "translateX(0)";
		}
		track.getBoundingClientRect();
		track.style.transition = "";

		track.addEventListener("transitionend", () => {
			if (direction === "next") {
				track.style.transition = "none";
				track.append(track.firstElementChild);
				track.style.transform = "translateX(0)";
				track.getBoundingClientRect();
				track.style.transition = "";
			}
			isAnimating = false;
		}, { once: true });

		requestAnimationFrame(() => {
			track.style.transform = direction === "next" ? `translateX(-${step}px)` : "translateX(0)";
		});
	}

	buttons.forEach((button) => {
		button.addEventListener("click", () => move(button.dataset.carouselDirection));
	});
}

initializeCarousel();
