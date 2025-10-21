const questions = [
    {
        question: "Когда мы начали встречаться ?",
        options: ["14 января", "14 апреля", "16 февраля", "19 января"],
        answer: "14 января"
    },
    {
        question: "Когда мы первый раз поцеловались ? ",
        options: ["19 января", "20 января", "14 января", "21 января"],
        answer: "20 января"
    },
    {
        question: "Когда у меня день рождения ?",
        options: ["5 мая", "11 июня", "4 мая", "13 апреля"],
        answer: "5 мая"
    },
    {
        question: "Когда мы первый раз занялись кхм кхм",
        options: ["23 марта", "23 апреля", "13 апреля", "14 июня"],
        answer: "23 марта"
    },
    {
        question: "Когда у моей бабушки день рождения ?",
        options: ["19 января", "30 июня", "15 февраля", "10 февраля"],
        answer: "10 февраля"
    },
    {
        question: "Когда у моего отца день рождения ?",
        options: ["4 июня", "30 июня", "1 августа", "7 августа"],
        answer: "7 августа"
    },
    {
        question: "Сколько мусе лет",
        options: ["6", "5", "8", "10"],
        answer: "6"
    },
    {
        question: "Какой мой любимый цвет",
        options: ["Фиолетовый", "Красный", "Белый", "Зеленый"],
        answer: "Фиолетовый"
    },
    {
        question: "Какой первый подарок я подарил тебе в телеграмме",
        options: ["Колечко", "Мишка", "Сердечко", "Тортик"],
        answer: "Колечко"
    },
    {
        question: "Во сколько по времени мы начали встречаться 14 января ?",
        options: ["23:37", "22:34", "23:47", "23:09"],
        answer: "23:37"
    }

]

let currentQuestion = 0
let score = 0

function loadQuestions() {
    const q = questions[currentQuestion]
    document.getElementById('question').innerHTML = q.question

    const optionsContainer = document.getElementById('options')
    optionsContainer.innerHTML = ''

    q.options.forEach((option, index) => {
        const label = document.createElement('label')
        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'answer'
        radio.value = option
        radio.id = `option${index}`

        label.appendChild(radio)
        label.appendChild(document.createTextNode(` ${option}`))
        optionsContainer.appendChild(label)
    })
    document.getElementById('quiz').style.display = 'block'
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked')
    if(!selected) {
        alert("Выберите ответ!")
        return
    }

    if(selected.value === questions[currentQuestion].answer) {
        score++
    }

    currentQuestion++

    if(currentQuestion < questions.length) {
        loadQuestions()
    } else {
        showResults()
    }
}

function showResults() {
    document.getElementById('quiz').style.display = 'none'
    const resultDiv = document.getElementById('results')

    let message = `Кристинка, ты ответила на ${score} из ${questions.length} вопросов правильно!`

    if(score === questions.length) {
        message += `<span class="heart"> Я люблю тебя, умничка❤️</span>`;
    }
    resultDiv.innerHTML = message
}
loadQuestions()