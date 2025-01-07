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
}

function setUser(){
    let id  = getRandom(Object.keys(users).length);
    idText.innerText = id;
    nameText.innerText = users[id];
}