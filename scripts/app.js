const container = document.querySelector('.container');
const movieYears = document.querySelector('.userInputYears');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieYearsToDisplay = document.querySelector('.favoriteMovieYears');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let yearsInStorage = localStorage.getItem('years');
let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');

/*console.log(titleInStorage);
console.log(imageUrlInStorage);*/

if(titleInStorage && imageUrlInStorage && yearsInStorage){
    movieYearsToDisplay.textContent = yearsInStorage;
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = ` url('${imageUrlInStorage}')`;

};

btn.addEventListener('click', ()=> {
    let movieYearsInput = movieYears.value;
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('years', movieYearsInput);
    localStorage.setItem('title',movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieYearsToDisplay.textContent = movieYearsInput;
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(51,51,82,0.685), rgba(73,49,49,0.582)),
    url('${posterUrlInput}')`;
    movieYears.value = '';
    movieTitle.value = '';
    moviePosterUrl.value = '';




});