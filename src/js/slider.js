//build swiper
let sliders = document.querySelectorAll('._swiper');
if(sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
/*         if (slider.classList.contains('_gallery')){

        } */
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }
//
//set page swiper
if(document.querySelector('.mainslider')){
    let mainslider = new Swiper('.mainslider__body', {
        observer: true,
        observeParents: true,
        slidersPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        //loop: true,
        pagination: {
            el: '.mainslider__dotts',
            clickable: true,
        },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    })
    let mainsliderImages = document.querySelectorAll('.mainslider__image');
    let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

    for (let index = 0; index < mainsliderImages.length; index++) {
        const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
        mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
    }
}
//
if(document.querySelector('.products-slider')){
    let productsSlider = new Swiper('.products-slider__item', {
        observer: true,
        observeParents: true,
        slidersPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 400,
        allowTouchMove: false,
        //loop: true,
        navigation:{
            nextEl: '.products-slider__arrow_next',
            prevEl: '.products-slider__arrow_prev',
        },
        pagination:{
            el: '.products-slider__info',
            type: 'fraction',
        },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    })
}