// const printInConsole = pageDocument => {
//   const objArray = document.querySelector(pageDocument);
//   const arrayItems = objArray.children;
//   const itemArrays = document.querySelectorAll('.item');
//   const topMessage = `Number of categories: ${arrayItems.length}`;
//   console.log(topMessage);

//   for (const li of itemArrays) {
//     let header = `Category: ${li.children[0].textContent}`;
//     let list = `Elements: ${li.children[1].children.length}`;
//     console.log(header);
//     console.log(list);
//   }
// };

// printInConsole('#categories')

const categoriesNames = document.querySelectorAll('h2');
console.log(`Number of categories: ${categoriesNames.length}`);
let categoriesList = document.querySelectorAll('ul ul');
categoriesList = Array.from(categoriesList);
const arrayOfCategoriesLength = categoriesList.map(
  el => el.querySelectorAll('li').length
);

arrayOfCategoriesLength.forEach((el, index) => {
  console.log(`Category: ${categoriesNames[index].textContent}`);
  console.log(`Elements: ${el}`);
});
