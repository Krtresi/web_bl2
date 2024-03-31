const questions = [
    {
        question: "Яка країна відома своєю великою кількістю водоспадів?",
        answers: [
            { text: "Канада", correct: true },
            { text: "Італія", correct: false },
            { text: "Австралія", correct: false },
            { text: "Японія", correct: false },
        ]
    },
    {
        question: "Яке місто є домівкою найвищого хмарочоса у світі, 'Бурдж Халіфа'?",
        answers: [
            { text: "Нью-Йорк", correct: false },
            { text: "Пекін", correct: false },
            { text: "Дубай", correct: true },
            { text: "Токіо", correct: false },
        ]
    },
    {
        question: "Яке місце вважається 'столицею мистецтва' і є домівкою Лувру?",
        answers: [
            { text: "Рим", correct: false },
            { text: "Барселона", correct: false },
            { text: "Париж", correct: true },
            { text: "Лондон", correct: false },
        ]
    },
    {
        question: "Як називається найбільший океан на Землі?",
        answers: [
            { text: "Атлантичний океан", correct: false },
            { text: "Індійський океан", correct: false },
            { text: "Тихий океан", correct: true },
            { text: "Північний Льодовитий океан", correct: false },
        ]
    },
    {
        question: "Який вид транспорту можна використовувати для подорожей в Амазонському дощовому лісі?",
        answers: [
            { text: "Літак", correct: false },
            { text: "Корабель", correct: false },
            { text: "Ліхтарик", correct: false },
            { text: "Каное", correct: true },
        ]
    }
    // Додайте інші питання тут
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
  
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;



    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}


startQuiz(); // Додати виклик функції startQuiz() для початку квізу після завантаження сторінки
