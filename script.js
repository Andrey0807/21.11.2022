'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцениваете его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцениваете его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


if (personalMovieDb.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb > 30) {
    console.log("Вы классический зритель");
} else {
    (personalMovieDb.count <= 30)
    console.log("Вы киноман");
};

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDb.count >= 10 && personalMovieDb > 30) {
        console.log("Вы классический зритель");
    } else {
        (personalMovieDb.count <= 30)
        console.log("Вы киноман");
    }; 
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDb(personalMovieDb.privat);

console.log(personalMovieDb);

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYouGenres();