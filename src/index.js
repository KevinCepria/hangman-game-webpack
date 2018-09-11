import Hangman from './hangman'
import getPuzzle from './request'

let hangman1;
const wordEl= document.getElementById('word')
const tryEl = document.getElementById('numTry')
const resetEl = document.getElementById('reset')

const startGame = async()=>{
    const word = await getPuzzle(2) 
    hangman1 = new Hangman(word.puzzle, 5)
    render()
}

const render = ()=>{
    wordEl.innerHTML = ''
    tryEl.textContent = hangman1.message

    hangman1.getWordGuess().split('').forEach(letter => {
        const letEl = document.createElement('span')
        letEl.textContent = letter
        wordEl.appendChild(letEl)
    })
}

window.addEventListener('keypress', (event)=>{
    const guess = String.fromCharCode(event.charCode)
    try{
        hangman1.guess(guess)
        render()
    }catch(error){
        throw error
    }
})

resetEl.addEventListener('click',startGame)

startGame()
// (async function(){
//     const x = await getPuzzle('US')
//     console.log(x)
// })()


// getPuzzle('PH').then(data=>{
//     console.log(data)
// }).catch(error =>{     
//     console.log(error)   
// } )





