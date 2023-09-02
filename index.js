
const submit = document.querySelector("#submit")

let computerInput = ''
let losses = 0
let wins = 0


submit.addEventListener('click', () =>{
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    const computerText = document.querySelector('#computer-Input')
    
    console.log(randomNumber)
    

    if(randomNumber == 1)
    {
        computerInput = 'rock'
    }
     if(randomNumber == 2)
    {
        computerInput = 'paper'
    }
     if(randomNumber == 3)
    {
        computerInput = 'scissors'
    }
    computerText.innerHTML = `Computer chose ${computerInput}`
    play()
})

function play()
{
    const userInput = document.querySelector("#choice").value
    const lossesText = document.querySelector('#losses')
    const winsText = document.querySelector('#wins')
    if(userInput == 'rock' && computerInput == 'paper') 
    {
        alert('you lose')
        losses += 1
        lossesText.innerHTML = `You have ${losses} losses`
    }
     if(userInput == 'paper' && computerInput == 'rock') 
    {
        alert('you win')
        wins += 1
        winsText.innerHTML = `You have ${wins} wins`
    }
     if(userInput =='scissors' && computerInput == 'paper')
    {
        alert('you win')
        wins += 1
        winsText.innerHTML = `You have ${wins} wins`

    }
     if(userInput == 'rock' && computerInput =='scissors')
    {
        alert('you win')
        wins += 1
        winsText.innerHTML = `You have ${wins} wins`

    }
     if(userInput == 'paper' && computerInput =='scissors')
    {
        alert('you lose')
        losses += 1
        lossesText.innerHTML = `You have ${losses} losses`
    }
     if(userInput =='scissors' && computerInput == 'rock')
    {
        alert('you lose')
        losses += 1
        lossesText.innerHTML = `You have ${losses} losses`
    }

    if(userInput == computerInput)
    {
        alert('Tie!')
    }
}