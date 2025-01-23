const output = document.getElementById('personId');
const personAray = [];

function setNewID(){
    const username = (document.getElementById('username').value).trim();
    const lastname = (document.getElementById('lastname').value).trim();
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const person = {
        id: personAray.length + 1,
        username : username,
        lastname : lastname,
        age: age,
        gender: gender,
    };
    personAray.push(person);

    document.getElementById('username').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('age').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;

    let genderAssci = '';
    for(let i = 0; i < person.gender.length; i++){
        const genderCode = `${gender.charCodeAt(i)}`;
        genderAssci += genderCode;
    }

    const outputText = `${((parseInt(person.age)).toString(2) * 1e-8 + person.id)}##${(person.username).split('').reverse().join('')}##${(person.lastname).split('').reverse().join('')}##${genderAssci}`;
    output.innerHTML = outputText;
}

document.getElementById('submitBtn').addEventListener('submit', function(event) {
    event.preventDefault();
    setNewID();
});

function copyToClip(){
    const outputT = document.getElementById('personId').innerText;
    navigator.clipboard.writeText(outputT).then(() => {
        alert('Copied to clipboard');
    }).catch((err) => {
        alert('Failed to copy', err);
    });
}

function getPersonID(){
    const personId = ((document.getElementById('getIdInput').value).trim()).split('##');
    const ageHelper = personId[0].split('.');
    const person = {
        id: parseInt(personId[0]),
        username: personId[1].split('').reverse().join(''),
        lastname: personId[2].split('').reverse().join(''),
        age: parseInt((ageHelper[1]), 2),
        gender: (personId[3].length <= 9) ? 'man' : 'female'
    }
    document.getElementById('personInfo').innerHTML = `ID: ${person.id} <br> Username: ${person.username} <br> Lastname: ${person.lastname} <br> Age: ${person.age} <br> Gender: ${person.gender}`;
    document.getElementById('getIdInput').value = '';
}

document.getElementById('getId').addEventListener('submit', function(event){
    event.preventDefault();
    getPersonID();
});