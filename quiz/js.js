// array(постоянный массив, с нуля счет)
const quizData = [
    {
        question:"В каком году была проведена в России министерская реформа?",
        a:"1802",
        b:"1803",
        c:"1804",
        correct: "a",
    },
    {
        question:"С правлением какого монарха связан термин «Негласный комитет",
        a:"Павел I",
        b:"Николай I",
        c:"Александр I",
        correct:"c",
    },
    {
        question:"Кто создал «Свод законов Российской империи»?",
        a:"Сперанский",
        b:"Аракчеев",
        c:"Киселев",
        correct:"a",
    },
    {
        question:"Кто входил в Священный союза с 1815 года?",
        a:"Австрия",
        b:"Швеция",
        c:"Пруссия",
        correct:"a",
        
    },
    {
        question:"Орган местного крестьянского управления:",
        a:"Сход",
        b:"Собрание",
        c:"Хутор",
        correct:"a",
        
    },
    {
        question:"Назовите автора «О незыблемости самодержавия»?",
        a:"Победоносцев",
        b:"Катков",
        c:"Толстой",
        correct:"a",
        
    },
    {
        question:"С кем был заключён Айгунский договор в 1858:",
        a:"Китай",
        b:"Япония",
        c:"Пруссия",
        correct:"a",
        
    },
    {
        question:"В каком году был раскол организации «Земля и воля»?",
        a:"1879",
        b:"1889",
        c:"1869",
        correct:"a",
        
    },
    {
        question:" Инициатор создания и протектор Рейнского союза:",
        a:"Наполеон I",
        b:"Франц II",
        c:"Георг III",
        correct:"a",
        
    },
    {
        question:"В каком году произошло восстание декабристов?",
        a:"1825",
        b:"1828",
        c:"1830",
        correct:"a",
        
    },
    


];
/*
Метод Document интерфейса возвращает Element объект, представляющий элемент
id свойство которого соответствует указанной строке. Поскольку идентификаторы элементов должны быть 
уникальными, если они указаны, они являются полезным способом быстрого 
 получения доступа к определенному элементу
*/
const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

/*
querySelectorAll Возвращает статическое (не оперативное) значение, 
NodeList представляющее список элементов документа, которые соответствуют указанной группе селекторов
*/
const answerEls = document.querySelectorAll('.answer')

/*
JavaScript let - это ключевое слово,
используемое для объявления переменных в JavaScript, 
которые ограничены областью блока.
*/

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){


    deselectAnswers()
    /* innerText
    позволяет разработчикам считывать или изменять видимое текстовое содержимое элемента,
    игнорируя любые HTML-теги и форматирование, которые могут присутствовать
    */


    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers(){
    // выполняет указанную функцию один раз для каждого элемента в массиве.


    
// Символ => используется для определения функции, в то время как тело функции заключено в фигурные скобки.
// Символ "=>" известен как символ "равно больше, чем" или хэш-цепочка.


    answerEls.forEach(answerEls => answerEls.cheked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer 

}
 /*addEventListener Добавляет элементу действие,
 которое будет выполнено после срабатывания события. Например, на клик мышки или нажатие клавиши.
*/

submitBtn.addEventListener('click', () => {
    const answer = getSelected()//заданная нами функция

    if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Вы правильно ответили на ${score}/${quizData.length} вопросов!</h2>

            <button onclick="location.reload()">Пройти снова</button>
            `
        }
    }
})
function out(){
    var h4;
    h4 = document.getElementById('out');
    h4.innerHTML =  `<h2>вопрос ${quizData.length} из 10</h2>

    <button onclick="щге"></button>
    `
}
