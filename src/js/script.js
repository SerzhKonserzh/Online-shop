//burger
const iconMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu__body');
const pageMenuBurger = document.querySelector('.menu-page__burger');
const pageMenuBody = document.querySelector('.menu-page__body');
const searchSelect = document.querySelector('.search-page__title');
const categoriesSearch = document.querySelector('.categories-search');
let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
if(iconMenu){
    iconMenu.addEventListener("click",function(e){
        iconMenu.classList.toggle('_active');
    });
}
if(bodyMenu){
    iconMenu.addEventListener("click",function(e){
        bodyMenu.classList.toggle('_active');
    });
}
if(pageMenuBurger){
    pageMenuBurger.addEventListener("click",function(e){
        pageMenuBurger.classList.toggle('_active');
        pageMenuBody.classList.toggle('_active');
    });
}
if(searchSelect){
    searchSelect.addEventListener("click",function(e){
        categoriesSearch.classList.toggle('_active');
        searchSelect.classList.toggle('_active');
    });
}
for(let i = 0;i< checkboxCategories.length; i++){
    const checkboxCategory = checkboxCategories[i];
    checkboxCategory.addEventListener("change",function(e){
        checkboxCategory.classList.toggle('_active');
        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');
        if(checkboxActiveCategories.length>0){
            searchSelect.classList.add('_categories')
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text')+checkboxActiveCategories.length;
        }
        else
        {
            searchSelect.classList.remove('_categories')
        }
    });
}
//dynamic adaptive

//
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

    