// Make sure this is at the top of Status.js
if (!window.quizQuestions) {
    window.quizQuestions = {
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
}

// Get data from localStorage
const answers = JSON.parse(localStorage.getItem('answers'));
const category = localStorage.getItem('category');

// Calculate results and statistics
const questions = quizQuestions[category];
const totalQuestions = questions.length;
const results = answers.map((answer, index) => ({
    userAnswer: answer,
    correctAnswer: questions[index].correct,
    isCorrect: answer === questions[index].correct
}));

const correctAnswersCount = results.filter(r => r.isCorrect).length;
const incorrectAnswersCount = totalQuestions - correctAnswersCount;
const scorePercentage = (correctAnswersCount / totalQuestions) * 100;

// Update the results display
document.getElementById('categoryTitle').innerHTML = `
    <span class="badge bg-primary">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
`;

// Create statistics cards
document.getElementById('quizStats').innerHTML = `
    <div class="row g-4 mb-4">
        <div class="col-md-3">
            <div class="card text-center h-100 border-primary">
                <div class="card-body">
                    <h5 class="card-title">Total Questions</h5>
                    <h2 class="card-text">${totalQuestions}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center h-100 border-success">
                <div class="card-body">
                    <h5 class="card-title">Correct Answers</h5>
                    <h2 class="card-text text-success">${correctAnswersCount}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center h-100 border-danger">
                <div class="card-body">
                    <h5 class="card-title">Incorrect Answers</h5>
                    <h2 class="card-text text-danger">${incorrectAnswersCount}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card text-center h-100 border-info">
                <div class="card-body">
                    <h5 class="card-title">Score Percentage</h5>
                    <h2 class="card-text text-info">${scorePercentage.toFixed(1)}%</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="progress mb-4" style="height: 25px;">
        <div class="progress-bar bg-success" style="width: ${scorePercentage}%">
            ${scorePercentage.toFixed(1)}%
        </div>
    </div>
`;

// Create detailed answers table
const answersTableHTML = `
    <div class="table-responsive">
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Your Answer</th>
                    <th scope="col">Correct Answer</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                ${results.map((result, index) => `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${questions[index].options[result.userAnswer]}</td>
                        <td>${questions[index].options[result.correctAnswer]}</td>
                        <td>
                            ${result.isCorrect 
                                ? '<span class="badge bg-success">Correct</span>' 
                                : '<span class="badge bg-danger">Incorrect</span>'}
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
`;

document.getElementById('answersTable').innerHTML = answersTableHTML;

// Add this after existing code in Status.js

// Certificate generation functionality
const certificateThemes = {
    classic: {
        background: '#FFFFFF',
        border: '#1a237e',
        secondary: '#0d47a1',
        text: '#263238',
        accent: '#2196f3'
    },
    modern: {
        background: '#FFFFFF',
        border: '#00695c',
        secondary: '#00897b',
        text: '#004d40',
        accent: '#26a69a'
    },
    elegant: {
        background: '#FFFFFF',
        border: '#8d6e63',
        secondary: '#6d4c41',
        text: '#3e2723',
        accent: '#d7ccc8'
    }
};

document.getElementById('previewCertificate').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const theme = document.getElementById('colorTheme').value;
    
    if (!userName || !userEmail) {
        alert('Please fill in all required fields');
        return;
    }

    const certificateHTML = generateCertificateHTML(userName, theme);
    document.getElementById('certificateContainer').innerHTML = certificateHTML;
    document.getElementById('certificatePreview').style.display = 'block';
});

document.getElementById('downloadCertificate').addEventListener('click', function() {
    const format = document.getElementById('fileFormat').value;
    const size = document.getElementById('certificateSize').value;
    
    html2canvas(document.getElementById('certificateContainer')).then(canvas => {
        const link = document.createElement('a');
        link.download = `Quiz_Certificate_${new Date().getTime()}.${format}`;
        link.href = canvas.toDataURL(`image/${format}`);
        link.click();
    });
});

function generateCertificateHTML(userName, theme) {
    const themeColors = certificateThemes[theme];
    const dateCompleted = new Date().toLocaleDateString();
    const certificateId = `QA${Math.random().toString(36).substr(2, 9)}`;
    
    return `
        <div style="
            border: 25px solid ${themeColors.border};
            border-image: linear-gradient(45deg, ${themeColors.border}, ${themeColors.secondary || themeColors.border}) 1;
            background: linear-gradient(${themeColors.background}DD, ${themeColors.background}DD),
                        url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiNFRUUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==');
            color: ${themeColors.text};
            padding: 60px;
            text-align: center;
            position: relative;
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
            margin: 20px;
        ">
            <div class="certificate-header" style="
                position: relative;
                margin-bottom: 40px;
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 20px;
                    opacity: 0.8;
                    font-size: 24px;
                    font-weight: bold;
                    font-family: Arial, sans-serif;
                ">
                    <span style="color: #0066cc;">Quiz</span><span style="color: #FFD700;">Master</span>
                </div>
                <div style="
                    position: absolute;
                    top: 10px;
                    right: 20px;
                    text-align: right;
                    font-family: 'Courier New', monospace;
                ">
                    <div style="font-size: 14px; color: ${themeColors.text}80;">Certificate ID</div>
                    <div style="font-size: 16px;">${certificateId}</div>
                    <div style="font-size: 14px; margin-top: 5px; color: ${themeColors.text}80;">Date Issued</div>
                    <div style="font-size: 16px;">${dateCompleted}</div>
                </div>
            </div>

            <div style="
                background: ${themeColors.accent || themeColors.border}20;
                padding: 20px;
                border-radius: 10px;
                margin: 40px 0;
            ">
                <h1 style="
                    font-size: 54px;
                    margin: 0;
                    background: linear-gradient(45deg, ${themeColors.text}, ${themeColors.border});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-family: 'Georgia', serif;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                ">Certificate of Excellence</h1>
            </div>

            <div style="margin: 40px 0;">
                <p style="
                    font-size: 24px;
                    font-family: 'Calibri', sans-serif;
                    color: ${themeColors.text}99;
                ">This is to certify that</p>
                
                <h2 style="
                    font-size: 42px;
                    margin: 20px 0;
                    color: ${themeColors.text};
                    font-family: 'Brush Script MT', cursive;
                    text-shadow: 2px 2px 4px ${themeColors.text}20;
                ">${userName}</h2>
                
                <p style="
                    font-size: 24px;
                    font-family: 'Calibri', sans-serif;
                    color: ${themeColors.text}99;
                ">has successfully completed the</p>
                
                <h3 style="
                    font-size: 36px;
                    margin: 20px 0;
                    color: ${themeColors.border};
                    font-family: 'Georgia', serif;
                ">${category.charAt(0).toUpperCase() + category.slice(1)} Quiz</h3>
                
                <div style="
                    background: ${themeColors.border}15;
                    display: inline-block;
                    padding: 15px 40px;
                    border-radius: 50px;
                    margin: 20px 0;
                ">
                    <span style="
                        font-size: 28px;
                        color: ${themeColors.text};
                        font-weight: bold;
                    ">Score: ${correctAnswersCount}/${totalQuestions}</span>
                </div>
            </div>

            <div style="
                margin-top: 60px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
            ">
                <div style="flex: 1;">
                    <img src="Assets/sign1.jpg" alt="Director Signature" style="
                        width: 150px;
                        margin-bottom: 10px;
                    ">
                    <div style="
                        border-top: 2px solid ${themeColors.text}40;
                        padding-top: 10px;
                        font-size: 18px;
                        color: ${themeColors.text}99;
                    ">Director of Education</div>
                </div>
                <div style="flex: 1;">
                    <img src="Assets/seal.jpg" alt="Official Seal" style="
                        width: 120px;
                        opacity: 0.8;
                    ">
                </div>
                <div style="flex: 1;">
                    <img src="Assets/sign2.jpg" alt="Examiner Signature" style="
                        width: 150px;
                        margin-bottom: 10px;
                    ">
                    <div style="
                        border-top: 2px solid ${themeColors.text}40;
                        padding-top: 10px;
                        font-size: 18px;
                        color: ${themeColors.text}99;
                    ">Chief Examiner</div>
                </div>
            </div>

            <div style="
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 14px;
                color: ${themeColors.text}60;
            ">
                Verify this certificate at www.quizapp.com/verify/${certificateId}
            </div>
        </div>
    `;
}

