console.log ("hello world");
const questionDisplay = document.querySelector ('#questions')
const answerDisplay = document.querySelector ('#answer')

const questions = [
    {
        id:0,
        text:"Which best describes you",
        answers:[
            {
                text: "Introvert",
            },
            {
                text: "Extrovert",
            },
            {
                text: "Ambivert",
            },
        ]
    },
    {
        id: 1,
        text: "Favorite vacation spot",
        answers: [
            {
                text: "City",
            },
            {
                text: "Countryside",
            },
            {
                text: "Beach", 
            },
        ]

    },
    {
        id:2,
        text:"Best way to spend a Friday night",
        answers: [
            {
                text: "Movie night",
            },
            {
                text: "Out with friends",
            },
            {
               text: "Studying at the library",
            },
        ]
    },

    {
        id:3,
        text:"First place on your travel list",
        answers: [
            {
                text: "Italy",
            },
            {
                text: "Japan",
            },
            {
               text: "Aruba",
            },
        ]
    },
    
]

const answers = [
    { 
        combination: ["Introvert", "City", "Movie night","Italy"],
        text: "Monstera Deliciosa", 
        image: "https://images.thdstatic.com/productImages/13d9b637-1054-434a-8bf6-36793aa5dbfa/svn/brighter-blooms-monstera-plants-mon-swi3-64_600.jpg",
        alt: "Monstera Deliciosa"
    },
    {
        combination: ["Extrovert", "Countryside","Out with friends", "Japan"],
        text:"Philodendron Micans",
        image: "https://theplantpoint.co.uk/cdn/shop/products/philodendronmicans2_800x.jpg?v=1658949696",
        alt: "Philodendron Micans"
    },
    {
        combination: ["Ambivert", "Beach", "Studying at the library","Aruba"],
        text:"Parlor Palm",
        subtext:"Reminiscent of a palm tree, a beachy plant that tolerates many different environments",
        image: "https://cdn11.bigcommerce.com/s-2drwt2az/images/stencil/original/products/61287/137326/ppalm4newtb__75583.1676500381.jpg?c=2",
        alt: "Parlor Palm"
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

    const answerSubtext = document.createElement('h3');
    answerSubtext.textContent = result.subtext

    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)


    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    answerDisplay.scrollTo(0, 0)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "15%"
        }
    })

}