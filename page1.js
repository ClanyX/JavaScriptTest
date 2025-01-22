const username = document.getElementById('username').value;
const lastname = document.getElementById('lastname').value;
const age = document.getElementById('age').value;
const gender = document.querySelector('input[name="gender"]:checked').value;

const output = document.getElementById('personId');

function setNewID(){
    console.log(username, lastname, age, gender);
    output.innerHTML = `Name: ${username} Lastname: ${lastname} Age: ${age} Gender: ${gender}`;
}

document.getElementById('submitBtn').addEventListener('submit', function(event) {
    event.preventDefault();
    setNewID();
});