function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}


function getARandomAlphabet(){
    // get and get a alphabet array
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    // console.log(alphabets)

    // create a random index between 0 to 25

    const index = Math.round(Math.random()*25);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet;
}