var countrySelectButton = document.querySelector(".country-select--choose");
var countryDeleteButton = document.querySelector(".plan-step__delete-country--removable");
var countrySelectPopup = document.querySelector(".chose-country");

countrySelectButton.addEventListener("click", function(){
  countrySelectPopup.classList.toggle("chose-country--active");
  countrySelectButton.classList.toggle("country-select--blue");
  if (document.documentElement.clientWidth < 768) {
    countryDeleteButton.classList.toggle("plan-step__delete-country--inactive");
  }
});

window.addEventListener("keydown", function(event){
  if(event.keyCode === 27) {
    countrySelectPopup.classList.remove("chose-country--active");
    countrySelectButton.classList.remove("country-select--blue");

    if (document.documentElement.clientWidth < 768) {
      countryDeleteButton.classList.remove("plan-step__delete-country--inactive");
    }
  }
});
