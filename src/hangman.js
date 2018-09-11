class Hangman {
    
    constructor(word , numTry){
        this.word = word.toLowerCase().split('');
        this.guessedLetters = []
        this.numTry = numTry
        this.status = 'playing'
        this.message = `Guesses Left: ${this.numTry}`
    }

    getWordGuess(){
        let guess='';
    
        this.word.forEach(letter => {
            guess += (this.guessedLetters.includes(letter) || letter === ' ')? letter : '*'
        });
    
        return guess
    }

    guess(letter){
        if(this.isPlaying()){
    
            const guess = letter.toLowerCase()
            const isUnique = !this.guessedLetters.includes(guess)
            const correctGuess = this.word.includes(guess)
        
            isUnique && correctGuess ? this.guessedLetters.push(guess) :  this.numTry --      
            
            this.calculateStatus()
        }
    }

    calculateStatus(){
        if(this.numTry === 0){
            this.status = 'failed'
            this.message = `Nice Try! The word was "${this.word.join('')}"`
        }
        else if (!this.getWordGuess().includes('*')){
            this.status = 'finished'
            this.message = 'Great Work! You guessed the word!'
        }
        else this.message = `Guesses Left: ${this.numTry}`
    }

    isPlaying(){
        return this.status === 'playing'
    }
}

export { Hangman as default}

// const Hangman = function (word , numTry){
//     this.word = word.toLowerCase().split('');
//     this.guessedLetters = []
//     this.numTry = numTry
//     this.status = 'playing'
//     this.message = `Guesses Left: ${this.numTry}`
  
// }

// Hangman.prototype.getWordGuess = function(){
//     let guess='';

//     this.word.forEach(letter => {
//         guess += (this.guessedLetters.includes(letter) || letter === ' ')? letter : '*'
//     });

//     return guess
// }

// Hangman.prototype.guess = function(letter){

//     if(this.isPlaying()){
    
//     const guess = letter.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const correctGuess = this.word.includes(guess)

//     isUnique && correctGuess ? this.guessedLetters.push(guess) :  this.numTry --      
    
//     this.calculateStatus()
//     }
// }

// Hangman.prototype.calculateStatus = function(){
//     if(this.numTry === 0){
//         this.status = 'failed'
//         this.message = `Nice Try! The word was "${this.word.join('')}"`
//     }
//     else if (!this.getWordGuess().includes('*')){
//         this.status = 'finished'
//         this.message = 'Great Work! You guessed the word!'
//     }
//     else this.message = `Guesses Left: ${this.numTry}`

// }

// Hangman.prototype.isPlaying = function(){
//     return this.status === 'playing'
// }


