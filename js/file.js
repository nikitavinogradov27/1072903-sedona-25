
var btn = document.querySelector(".button_search_interactive");
var open = document.querySelector(".modal");
var flag = 1;

btn.addEventListener ('click', function () {
    if (flag % 2 == 1) {
        console.log('Клик по кнопке1');
        open.classList.add('modal_search_form');
        console.log(open.className);
} else {
        console.log('Клик по кнопке2');
        open.classList.remove('modal_search_form');
        console.log(open.className);
        }
    flag++;
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        console.log('Клик по кнопке2');
        open.classList.remove('modal_search_form');
        console.log(open.className);
        flag++;
        }
});
