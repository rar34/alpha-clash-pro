// function play(){
//     const home = document.getElementById('home-section');
//     const playGround = document.getElementById('play-ground-section');
//     home.classList.add('hidden');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // stop the game by pressing Esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet, playerPressed);
    if (playerPressed === expectedAlphabet) {
        // console.log('you get a point');
        const currentScore = textElementValueById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementById('current-score', updatedScore);

        // const currentScoreElement = setTextElementById('current-score');
        // currentScoreElement.innerText = updatedScore;



        //---------------------------------------
        // start a new round
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // let currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // console.log(newScore)

        // update score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColor(expectedAlphabet);
        continueGame()
    }
    else {
        const currentLife = textElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }





        // console.log("you loss a point");
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;


    }
}


// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log("Your random alphabet is ", alphabet);

    // set alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}


function play() {
    hideElementById('home-section');
    showElementById('play-ground-section');
    hideElementById('final-score-section')

    setTextElementById('current-life',5);
    setTextElementById('current-score',0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground-section');
    showElementById('final-score-section');

    // update final score
    const finalScore = textElementValueById('current-score');
    setTextElementById('final-score', finalScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}