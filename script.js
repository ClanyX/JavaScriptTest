//Map
const users = {
    1: "012345678",
}

const  idText = document.getElementById('id');
const  nameText = document.getElementById('name');

//Random number generator
function getRandom(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function createRandomID(){
    const characters = '0123456789';
    let result = '';
    let isUnique = false;

    for (let i = 0; i < 9; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    isUnique = Object.keys(users).some(id => users[id] === result);

    if(!isUnique){
        users[Object.keys(users).length + 1] = result;
    } else{
        alert('ID already exists');
    }

    setUser();
    console.log(users);
}

function setUser(){
    let id  = getRandom(Object.keys(users).length);
    idText.innerText = id;
    nameText.innerText = users[id];
}

const themeBtn = document.getElementById('btn');
const body = document.body;

themeBtn.addEventListener('click', () =>{
    body.dataset.bsTheme = body.dataset.bsTheme === 'light' ? 'dark' : 'light';
});

const textList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const textChange = document.getElementById('changeText');

const changeText = setInterval(() =>{
    textChange.innerText = textList[randomNumber(0, textList.length - 1)];
}, 1000);

function randomNumber(min, max){
    let randomNum =  Math.floor(Math.random() * (max - min + 1)) + min;
    let lastNumber = 0;

    if(randomNum !== lastNumber){
        lastNumber = randomNum;
        return randomNum;
    } else{
        return randomNumber(min, max);
    }
}