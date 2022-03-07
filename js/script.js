const btns = document.querySelectorAll('.sale__btn');

btns.forEach(btn => {
    btn.addEventListener('click',
    function() {
        const direction = this.dataset.direction;
        const inp = this.parentElement
        .querySelector('.counter__value');
        const currentValue = +inp.value;
        let newVelue;

        if (direction === 'plus') {
            newVelue = currentValue + 1;
        } else {
            newVelue = currentValue - 1 > 0 ?
            currentValue - 1 : 0;
        }
        inp.value = newVelue;
    })
})





$(document).ready(function () {
    //обращение к тэгу
    $('.reviews__td').click(function (event) {
        //что бы открывался только 1 спойлер
        if ($('.reviews').hasClass('one')) {
            $('.reviews__td').not($(this)).removeClass('active');
            $('.reviews__text').not($(this).next()).slideUp(300);
        }
        //добавление класса ----------- при нажатии открывет спойлер
        $(this).toggleClass('active').next().slideToggle(300);        
        $(this).toggleClass('as').next();
    });

    $('.question__subtitle').click(function (event) {
        //что бы открывался только 1 спойлер
        if ($('.question').hasClass('one')) {
            $('.question__subtitle').not($(this)).removeClass('activ');
            $('.question__subtext').not($(this).next()).slideUp(300);
        }
        //добавление класса ----------- при нажатии открывет спойлер
        $(this).toggleClass('activ').next().slideToggle(300);  
    });
    
});

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__down');
    const menulist = document.querySelector('.header__list');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menulist.classList.toggle('_actives');
    });
}

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.header__list');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}