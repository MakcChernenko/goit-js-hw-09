// debugger;
'use strict';
const people = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    gender: 'male',
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
    gender: 'female',
  },
];
const sortByDescendingFriendCount = users =>
  users
    .map((user, i) => user)
    .toSorted((a, b) => b.friends.length - a.friends.length);
console.log(sortByDescendingFriendCount(people));
console.log(people);
// Залиш цей код для перевірки ментором.
// На що буде звертати увагу ментор при перевірці:
// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використаний метод toSorted()
// Виклик функції із зазначеним масивом users повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами повертає правильне значення
