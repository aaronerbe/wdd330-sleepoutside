//re-added product-listing page to force netlify to fix its brain
//js for the product-listing html page
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParams, capitalizeWord } from './utils.mjs';

//load header/footer wk 3
loadHeaderFooter();

const category = getParams('category');
//added to make product-listing have new code to force it to not use the cached version
console.log(category);
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);

// finally call the init method to show our products
myList.init();

//add category name to Top Products on html page & breadcrumb
const categoryElement = document.getElementById('category-name');
categoryElement.innerHTML = capitalizeWord(category);
//also add it to localstorage so it can be used when item is selected.  can't see another way to pull category across to the details page
localStorage.setItem('category', category);
