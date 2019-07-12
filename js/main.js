

const menu          = document.querySelector('.menu');
const burgerButton  = document.querySelector('#burger-menu');

burgerButton.addEventListener('click', hide_show);


function hide_show(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }else{
        menu.classList.add('is-active')
    }
   
}
