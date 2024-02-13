// function play(){
//     const home = document.getElementById('home-section');
//     const playGround = document.getElementById('play-ground-section');
//     home.classList.add('hidden');
//     playGround.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log("Your random alphabet is ", alphabet);

    // set alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}


function play(){
    hideElementById('home-section');
    showElementById('play-ground-section');
    continueGame();
}