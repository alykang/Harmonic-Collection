console.log ("hello world");
const questionDisplay = document.querySelector ('#questions')
const answerDisplay = document.querySelector ('#answer')

const questions = [
    {
        id:0,
        text:"How much light will the plant recieve?",
        answers:[
            {
                text: "Low light",
            },
            {
                text: "Medium light",
            },
            {
                text: "Bright light",
            },
        ]
    },
    {
        id: 1,
        text: "How often will you remember to water your plant?",
        answers: [
            {
                text: "I will probably forget",
            },
            {
                text: "I'll remember every once in a while",
            },
            {
                text: "I won't forget ", 
            },
        ]

    },
    {
        id:2,
        text:"Do you have any pets?",
        answers: [
            {
                text: "Yes, I have cats/dogs",
            },
            {
                text: "Yes, I have pets that are not cats/dogs",
            },
            {
               text: "Nope, no pets",
            },
        ]
    },
]

const answers = [
    { 
        combination: ["Low light", "I will probably forget", "Yes, I have cats/dogs"],
        text: "Pepperomia Obtusifolia",
        image: "https://hortology.co.uk/cdn/shop/products/Peperomia-obtusifolia-Variegata-indoor-plant.jpg?v=1552723603",
        alt: "Pepperomia Obtusifolia"
    },
    {
        combination: ["Medium light", "I'll remember every once in a while","Yes, I have pets that are not cats/dogs"],
        text:"Calathea Rattlesnake",
        image: "https://resources.ediblearrangements.com/resources/en-us/i/a/mwwp_Calathea_Rattlesnake.jpg",
        alt: "Calathea Rattlesnake"
    },
    {
        combination: ["Bright light", "I won't forget", "Nope, no pets"],
        text:"Bird of Paradise",
        image: "https://www.shoppigment.com/cdn/shop/products/Bird_s-nest_Fern_5N8A3571_web_5a7aaad3-746c-46bb-a0e9-7a76b9326a77.jpg?v=1667937129",
        alt: "Bird of Paradise"
    }
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement ('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleCLick(question.id, answer.text))
            const answerImage = document.createElement ('img')
        
            
            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
          
           
        
            
            answerBlock.append(answerTitle, answerInfo)
            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}
populateQuestions()

const handleCLick = (questionId, chosenAnswer)=> {
    if(unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
const itemToRemove = unansweredQuestions.indexOf(questionId)

if(itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1)
}
console.log(chosenAnswers)
console.log(unansweredQuestions)

disableQuestionBlock(questionId, chosenAnswer)
const lowestQuestionId = Math.min(...unansweredQuestions)
location.href = '#' + lowestQuestionId

if(!unansweredQuestions.length) {
    location.href = '#answer'
    showAnswer()
    }
}
const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            //first answer object is default
            result = answers[0]
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)


    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}