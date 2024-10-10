// load categories

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
 };
 
 
 // display categories
 
 const displayCategories = (data) => {
    data.forEach((item) => {
     console.log(item);
    });
 
 };
 
 loadCategories();