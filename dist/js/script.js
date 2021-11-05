//burger
const iconMenu=document.querySelector('.icon-menu');
const bodyMenu=document.querySelector('.menu__body');
const pageMenu=document.querySelector('.menu-page__burger');
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
if(pageMenu){
    pageMenu.addEventListener("click",function(e){
        pageMenu.classList.toggle('_active');
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

    