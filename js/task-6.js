// Є input, у який користувач вводить бажану кількість елементів.Після натискання
// на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю
//  елементів і очищатися значення в інпуті.При повторному натисканні на кнопку Create
//  поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy
//  колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в
// input, воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє
// умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка
// приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки < div > елементів, скільки вказано в параметрі
// amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію
// getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію
// destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі
// створені елементи.

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttondestroy = document.querySelector('[data-destroy]');
let widthDiv = 30;
let heightDiv = 30;

buttonCreate.addEventListener('click', event => {
  fooCreateSquare(event, boxesEl);
});
function fooCreateSquare(event, context) {
  context.innerHTML = '';
  let array = [];
  let num = inputEl.value;
  for (let i = 0; num > i; i++) {
    context.insertAdjacentHTML(
      'beforeend',
      `<div
    style="width: ${widthDiv}px; height:${heightDiv}px; background-color:${getRandomHexColor()}" >eee</div>`
    );
    widthDiv += 10;
    heightDiv += 10;
  }
  num = 0;
  widthDiv = 30;
  heightDiv = 30;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
