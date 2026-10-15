(() => {
    const config = window.animalQuizConfig;
    if (!config) {
        throw new Error("Animal quiz configuration is missing.");
    }

    const container = document.querySelector(`#${config.containerId}`);
    const questionElement = container?.querySelector(".animal-quiz__question");
    const answersElement = container?.querySelector(".animal-quiz__answers");
    const resultSection = container?.querySelector(".animal-quiz__result");
    const resultText = container?.querySelector(".animal-quiz__result-text");
    const factText = container?.querySelector(".animal-quiz__fact-text");
    const nextButton = container?.querySelector(".animal-quiz__next");
    const completionHeading = config.completionHeading;

    if (!container || !questionElement || !answersElement || !resultSection ||
        !resultText || !factText || !nextButton || !completionHeading ||
        !Array.isArray(config.questions) || config.questions.length === 0) {
        throw new Error("Animal quiz markup or configuration is incomplete.");
    }

    let currentQuestion = 0;

    function loadQuestion() {
        const question = config.questions[currentQuestion];
        resultSection.classList.add("animal-quiz__hidden");
        nextButton.classList.add("animal-quiz__hidden");
        nextButton.textContent = currentQuestion === config.questions.length - 1 ? "AFSLUT" : "NÆSTE";
        questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
        answersElement.replaceChildren();

        question.answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.type = "button";
            answerButton.classList.add("animal-quiz__answer");

            const circle = document.createElement("span");
            circle.classList.add("animal-quiz__answer-circle");
            circle.setAttribute("aria-hidden", "true");

            const answerText = document.createElement("span");
            answerText.textContent = answer;

            answerButton.append(circle, answerText);
            answerButton.addEventListener("click", () => selectAnswer(index));
            answersElement.appendChild(answerButton);
        });
    }

    function selectAnswer(selectedIndex) {
        const question = config.questions[currentQuestion];
        const answers = answersElement.querySelectorAll(".animal-quiz__answer");

        answers.forEach((answer) => {
            answer.disabled = true;
        });

        if (selectedIndex === question.correct) {
            answers[selectedIndex].classList.add("correct");
            resultText.textContent = `Svaret er korrekt: ${question.answers[question.correct]}`;
        } else {
            answers[selectedIndex].classList.add("wrong");
            answers[question.correct].classList.add("correct");
            resultText.textContent = `Det korrekte svar var: ${question.answers[question.correct]}`;
        }

        factText.textContent = question.fact;
        resultSection.classList.remove("animal-quiz__hidden");
        nextButton.classList.remove("animal-quiz__hidden");
    }

    function showCompletion() {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `animal-quiz__complete-button ${config.completionButtonClass}`;
        button.textContent = config.completionButtonText;

        const heading = document.createElement("h1");
        heading.textContent = completionHeading;

        container.replaceChildren(heading, button);
    }

    nextButton.addEventListener("click", () => {
        currentQuestion += 1;

        if (currentQuestion >= config.questions.length) {
            showCompletion();
            return;
        }

        loadQuestion();
    });

    loadQuestion();
})();
