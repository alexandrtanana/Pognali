var businessPopupOpen = document.querySelector(".add-profile__business-link");
var businessPopup = document.querySelector(".business-popup");
var businessPopupClose = document.querySelector(".business-popup__close-button");

businessPopupOpen.addEventListener("click", function(event){
  event.preventDefault();
  businessPopup.classList.add("business-popup--active");
});

businessPopupClose.addEventListener("click", function(){
  businessPopup.classList.remove("business-popup--active");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    businessPopup.classList.remove("business-popup--active");
  }
});
