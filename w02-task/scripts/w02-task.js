/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Kyle Peterson'
let currentYear = new Date().getFullYear();
let profilePicture = 'images/IMG_4157.JPG';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('#year');
const imageElement = document.getElementById('imag');

/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>${fullName}</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of Kyle Peterson');

/* Step 5 - Array */
const favFood = ['posta', 'cake', 'sushi', 'pho'];
const newFavFood = 'pizza';
favFood.push(newFavFood);

foodElement.innerHTML = favFood.join('<br>');
favFood.shift();
foodElement.innerHTML += '<br>' + favFood.join('<br>');
favFood.pop();
foodElement.innerHTML += '<br>' + favFood.join('<br>');