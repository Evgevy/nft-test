$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__button").toggleClass("header__button--hide")
        $(".header__links").toggleClass("header__links--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--last")
    })

})

$(document).ready(function (){
    $(".header__button").click(function(){
        $(".header__button").toggleClass("header__button--active")
    }) 

})

/*document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.header__button');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('header__button--active'));
          btn.classList.add('header__button--active');
        });
 
    });

});*/