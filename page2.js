const alfabet = 'abcdefghijklmnopqrstuvwxyz';
let alfabetArray = alfabet.split('');
let randomLetter = alfabetArray[Math.floor(Math.random() * alfabetArray.length)];


fetch(`https://api.datamuse.com/words?sp=${randomLetter}*`)
    .then(response => response.json())
    .then(values => {
        const randomWord = values[Math.floor(Math.random() * values.length)].word;
        console.log(randomWord);
    })
    .catch(error => console.error(error));
