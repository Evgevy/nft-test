document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.main__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('main__btn--active'));
          btn.classList.add('main__btn--active');
        });
 
    });

});

