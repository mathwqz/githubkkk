const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const favoriteMovieInput = document.getElementById('favorite-movie');
const userList = document.querySelector('#user-list ul');

function addUser(name, email, favoriteMovie) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${name} | E-mail: ${email} | Filme Favorito: ${favoriteMovie}`;
    listItem.style.animation = 'fadeIn 0.5s ease-in-out';
    userList.appendChild(listItem);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const favoriteMovie = favoriteMovieInput.value.trim();

    if (!name || !email || !favoriteMovie) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    addUser(name, email, favoriteMovie);
    form.reset();
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

window.onload = () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease-in-out';
    document.body.style.opacity = 1;
};