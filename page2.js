const alfabet = 'abcdefghijklmnopqrstuvwxyz';
const alfabetArray = alfabet.split('');


function getWord(){
    let randomLetter = alfabetArray[Math.floor(Math.random() * alfabetArray.length)];
    fetch(`https://api.datamuse.com/words?sp=${randomLetter}*`)
    .then(response => response.json())
    .then(values => {
        const randomWord = values[Math.floor(Math.random() * values.length)].word;
        //must be edited
        sendWord(randomWord);
    })
    .catch(error => console.error(error));
} 

//rename and complete this function
function sendWord(word){
    document.getElementById('outputText').innerHTML = word;
}

document.getElementById('sendInput').addEventListener('submit', function(event) {
    event.preventDefault();
    getWord();
});