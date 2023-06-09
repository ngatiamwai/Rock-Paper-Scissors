const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'Rock'        
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'        
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'          
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result= 'It is a draw!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result= 'You Win!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result= 'You lost!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result= 'You Win!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result= 'You lose!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result= 'You Win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result= 'You lose!'
    }
    resultDisplay.innerHTML = result
}
