
// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const timerDisplay = document.getElementById("timeRemaining");
let timer;
let secondsLeft = 300; // 5 minutes timer
let answers = []; // Array to store user's answers
let correctAnswersCount = 0;
let currentQuestionIndex = 0;
const answeredQuestions = new Set();

// Sample questions for each category
const quizQuestions = {
  "history": [
    { question: "When did Sri Lanka gain independence?", options: ["1945", "1948", "1950", "1960"], correct: 1 },
    { question: "Who was the first President of Sri Lanka?", options: ["J.R. Jayewardene", "D.B. Wijetunga", "Chandrika Kumaratunga", "Ranasinghe Premadasa"], correct: 0 },
    { question: "Who was the first Prime Minister of Sri Lanka?", options: ["D.S. Senanayake", "S.W.R.D. Bandaranaike", "J.R. Jayewardene", "Maithripala Sirisena"], correct: 0 },
    { question: "In which year Sri Lanka became a republic?", options: ["1972", "1960", "1956", "1948"], correct: 0 },
    { question: "Which Sri Lankan King built the Sigiriya?", options: ["King Kasyapa", "King Vijaya", "King Dutugemunu", "King Parakramabahu"], correct: 0 },
    { question: "Which Sri Lankan leader was awarded the Nobel Peace Prize?", options: ["Chandrika Kumaratunga", "D.B. Wijetunga", "Ranasinghe Premadasa", "Sirimavo Bandaranaike"], correct: 3 },
    { question: "Who is the founder of Sri Lanka Freedom Party?", options: ["Sirimavo Bandaranaike", "J.R. Jayewardene", "D.B. Wijetunga", "Maithripala Sirisena"], correct: 0 },
    { question: "When was the Battle of Mulleriyawa fought?", options: ["1565", "1560", "1550", "1570"], correct: 1 },
    { question: "Who was the last King of Sri Lanka?", options: ["King Sri Vikrama Rajasinha", "King Kasyapa", "King Vijayabahu", "King Parakramabahu"], correct: 0 },
    { question: "Who was the first Ceylonese to hold the post of Governor-General?", options: ["Sir Oliver Goonetilleke", "J.R. Jayewardene", "D.S. Senanayake", "Sirimavo Bandaranaike"], correct: 0 }
  ],
  "programming": [
    { question: "What is the correct way to declare a variable in JavaScript?", options: ["var x = 5;", "variable x = 5;", "x = 5;", "int x = 5;"], correct: 0 },
    { question: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "/*", "#", "<!--"], correct: 0 },
    { question: "What is the output of 2 + '2' in JavaScript?", options: ["22", "4", "NaN", "Error"], correct: 0 },
    { question: "Which method is used to add elements to the end of an array?", options: ["push()", "append()", "add()", "insert()"], correct: 0 },
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Making Language", "Hyper Text Making Language", "High Text Markup Language"], correct: 0 },
    { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
    { question: "What is the correct file extension for JavaScript files?", options: [".js", ".javascript", ".jscript", ".java"], correct: 0 },
    { question: "Which operator is used for equality comparison in JavaScript?", options: ["==", "=", "===", "equals"], correct: 2 },
    { question: "What is the correct way to write a function in JavaScript?", options: ["function myFunction()", "def myFunction()", "void myFunction()", "method myFunction()"], correct: 0 },
    { question: "Which method is used to remove the last element from an array?", options: ["pop()", "remove()", "delete()", "splice()"], correct: 0 }
  ],
  "popculture": [
    { question: "Who is known as the 'King of Sri Lankan Cinema'?", options: ["Gamini Fonseka", "Tony Ranasinghe", "Jackson Anthony", "Ravindra Randeniya"], correct: 0 },
    { question: "Which Sri Lankan singer is known as 'The Voice of Asia'?", options: ["Nanda Malini", "Clarence Wijewardene", "H.R. Jothipala", "Victor Ratnayake"], correct: 0 },
    { question: "Who composed the song 'Master Sir'?", options: ["Clarence Wijewardene", "Rookantha Gunathilake", "Sunil Perera", "W.D. Amaradeva"], correct: 0 },
    { question: "Which Sri Lankan band performed 'Mal Mal Mal'?", options: ["Gypsies", "Marians", "Super Golden Chimes", "Purple Range"], correct: 0 },
    { question: "Who is the director of 'Parasathumal'?", options: ["Dharmasena Pathiraja", "Lester James Peries", "Prasanna Vithanage", "Asoka Handagama"], correct: 0 },
    { question: "Which Sri Lankan actress won the Best Actress Award at SAARC Film Festival 2019?", options: ["Swarna Mallawarachchi", "Malini Fonseka", "Yashoda Wimaladharma", "Sangeetha Weeraratne"], correct: 0 },
    { question: "Who is the lead singer of Bathiya and Santhush?", options: ["Bathiya Jayakody", "Santhush Weeraman", "Both", "Neither"], correct: 2 },
    { question: "Which year was Rupavahini established?", options: ["1982", "1979", "1985", "1980"], correct: 0 },
    { question: "Who sang 'Sanda Thaniwela'?", options: ["Milton Mallawarachchi", "H.R. Jothipala", "W.D. Amaradeva", "Victor Ratnayake"], correct: 0 },
    { question: "Which Sri Lankan film won the Golden Peacock at IFFI?", options: ["Gamperaliya", "Nidhanaya", "Rekava", "Viragaya"], correct: 1 }
  ],
  "science": [
    { question: "Who discovered the theory of relativity in 1905?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"], correct: 0 },
    { question: "Who discovered penicillin in 1928?", options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"], correct: 0 },
    { question: "Who proposed the heliocentric model in 1543?", options: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler", "Tycho Brahe"], correct: 0 },
    { question: "Who discovered the law of gravity in 1687?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"], correct: 0 },
    { question: "Who discovered the structure of DNA in 1953?", options: ["Watson and Crick", "Rosalind Franklin", "Linus Pauling", "Maurice Wilkins"], correct: 0 },
    { question: "Who invented the telephone in 1876?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "George Westinghouse"], correct: 0 },
    { question: "Who discovered radioactivity in 1896?", options: ["Henri Becquerel", "Marie Curie", "Wilhelm Röntgen", "Ernest Rutherford"], correct: 0 },
    { question: "Who proposed the theory of evolution in 1859?", options: ["Charles Darwin", "Gregor Mendel", "Alfred Wallace", "Jean-Baptiste Lamarck"], correct: 0 },
    { question: "Who discovered the electron in 1897?", options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "Max Planck"], correct: 0 },
    { question: "Who invented the periodic table in 1869?", options: ["Dmitri Mendeleev", "Antoine Lavoisier", "Henry Moseley", "Glenn Seaborg"], correct: 0 }
  ]
}; 

const loadQuiz = () => {
    const questions = quizQuestions[category];
    
    // Create question indicators
    const sidebar = document.getElementById('questionIndicators');
    sidebar.innerHTML = '';
    
    questions.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `question-indicator ${index === 0 ? 'current' : ''}`;
        indicator.textContent = index + 1;
        indicator.onclick = () => jumpToQuestion(index);
        sidebar.appendChild(indicator);
    });

    // Initialize answers array
    answers = new Array(questions.length).fill(null);
    
    // Load first question immediately
    loadQuestion(0);
    
    // Start timer
    startTimer();
};

const loadQuestion = (index) => {
    const questions = quizQuestions[category];
    const question = questions[index];
    
    const questionCard = document.getElementById('questionCard');
    questionCard.innerHTML = `
        <h3 class="mb-4">Question ${index + 1} of ${questions.length}</h3>
        <h4 class="mb-4">${question.question}</h4>
        <div class="options-container">
            ${question.options.map((option, optIndex) => `
                <button class="option-btn ${isOptionSelected(index, optIndex) ? 'selected' : ''}" 
                        onclick="selectOption(${index}, ${optIndex})">
                    ${option}
                </button>
            `).join('')}
        </div>
    `;

    updateNavigationButtons();
    updateQuestionIndicators();
};

const selectOption = (questionIndex, optionIndex) => {
    answers[questionIndex] = optionIndex;
    answeredQuestions.add(questionIndex);
    loadQuestion(questionIndex);
};

const isOptionSelected = (questionIndex, optionIndex) => {
    return answers[questionIndex] === optionIndex;
};

const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions[category].length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
};

const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
};

const jumpToQuestion = (index) => {
    currentQuestionIndex = index;
    loadQuestion(index);
};

const updateNavigationButtons = () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
    
    if (currentQuestionIndex === quizQuestions[category].length - 1) {
        nextBtn.innerHTML = 'Submit Quiz <i class="fas fa-check ms-2"></i>';
        nextBtn.onclick = submitQuiz;
    } else {
        nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right ms-2"></i>';
        nextBtn.onclick = nextQuestion;
    }
};

const updateQuestionIndicators = () => {
    const indicators = document.querySelectorAll('.question-indicator');
    indicators.forEach((indicator, index) => {
        indicator.className = 'question-indicator';
        if (answeredQuestions.has(index)) indicator.classList.add('answered');
        if (index === currentQuestionIndex) indicator.classList.add('current');
    });
};

const startTimer = () => {
    timer = setInterval(function () {
        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        timerDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (secondsLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
        secondsLeft--;
    }, 1000);
};

const submitQuiz = () => {
    clearInterval(timer);
    const questions = quizQuestions[category];
    correctAnswersCount = 0;

    questions.forEach((question, index) => {
        if (answers[index] === question.correct) {
            correctAnswersCount++;
        }
    });

    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('correctAnswersCount', correctAnswersCount);
    localStorage.setItem('category', category);

    window.location.href = 'Status.html';
};

// Start the quiz when page loads
window.onload = loadQuiz;
