//burger
const iconMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu__body');
const pageMenuBurger = document.querySelector('.menu-page__burger');
const pageMenuBody = document.querySelector('.menu-page__body');
const searchSelect = document.querySelector('.search-page__title');
const categoriesSearch = document.querySelector('.categories-search');
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

    