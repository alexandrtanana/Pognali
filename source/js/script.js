var menu = document.querySelector('.main-nav__site-nav');
var menuToggle = document.querySelector('.main-nav__toggle');
//
if (menu && menuToggle) {
  menu.classList.remove('main-nav__site-nav--no-js');
  menuToggle.classList.remove('main-nav__toggle--no-js');

  menuToggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle('main-nav__site-nav--open');
    menuToggle.classList.toggle('main-nav__toggle--open');
  });
}

// проверка формы
var form = document.querySelector('.request-form');
var textFieldRequired = form.querySelectorAll('.custom-text-field__input:required');
if (form && textFieldRequired) {
  form.setAttribute('novalidate', '');
  form.addEventListener("submit", function(evt) {
    for (var i = 0; i < textFieldRequired.length; i++) {
      textFieldRequired[i].classList.remove('custom-text-field__input--required');
    }
    var textFieldInvalid = form.querySelectorAll('.custom-text-field__input:invalid');
    if (textFieldInvalid.length > 0) {
      evt.preventDefault();
      for (var i = 0; i < textFieldInvalid.length; i++) {
        textFieldInvalid[i].classList.add('custom-text-field__input--required');
        var eror = 1;
      }
      form.querySelector('.custom-text-field__input:invalid').focus();
    }
  });
}
