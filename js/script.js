
var open = document.querySelector(".modal_search");
var btn = document.querySelector(".button_search_interactive");
btn.addEventListener ('click', function () {
    console.log('Клик по кнопке');
    open.classList.add('modal_');
}
);
