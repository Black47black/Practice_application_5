/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// const adv = document.querySelector('.promo__adv'); // мой способ, который тоже работает
// // adv.remove();


const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');


// adv.forEach(item => {
//     item.remove();
// }); // 1 cпособ по курсу

adv.forEach(function(item){
    item.remove();
}); // 2 cпособ по курсу

genre.textContent = 'ДРАМА'; // поменяли жанр на ДРАМА

poster.style.backgroundImage = 'url("/030/img/bg.jpg")';// решение 3 задания 

movieList.innerHTML = '';

movieDB.movies.sort();

// console.log(poster.innerHTML); // команда innerHTML позволяет полчать элементы со страницы

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

