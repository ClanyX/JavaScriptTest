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

    const outputText = `${(person.age * 1e-3 + person.id).toString(8)}##${(person.username).split('').reverse().join('')}##${(person.lastname).split('').reverse().join('')}##${genderAssci}`;
    output.innerHTML = outputText;
}

document.getElementById('submitBtn').addEventListener('submit', function(event) {
    event.preventDefault();
    setNewID();
});