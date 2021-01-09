const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt("Enter new Player's name");
    para.textContent = "Player's Name: " + name;
}

