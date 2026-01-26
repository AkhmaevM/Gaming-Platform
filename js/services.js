const arrowLeftBtn = document.querySelector('.reviews__arrow');
const arrowRightBtn = document.querySelector('.reviews__arrow-right');

arrowLeftBtn.onmouseover=function(){
    console.log('mouseover');
    arrowLeftBtn.src = '../img/Button/left-hover.svg'
}

arrowLeftBtn.onmouuseleave=function(){
    console.log('mouseoleave');
    arrowLeftBtn.src = '../img/Button/nonact/left.svg'
}
