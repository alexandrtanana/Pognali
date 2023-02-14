var accordion = document.querySelector(".accordion");
var accordionButtons = accordion.querySelectorAll(".accordion__item");
var accordionLevel = accordion.querySelector(".accordion__level-wrapper");
var accordionAllLists = accordion.querySelectorAll(".accordion__list");

for (var i = 0; i < accordionButtons.length; i++) {
  if (
    document.documentElement.clientWidth < 768 ||
    document.documentElement.clientWidth >= 1440
  ) {
    accordionLevel.classList.add("accordion__level-wrapper--hidden");
    for (var j = 0; j < accordionAllLists.length; j++) {
      accordionAllLists[j].classList.add("accordion__list--hidden");
    }
    accordionButtons[i].addEventListener("click", function() {
      var title = this.querySelector(".accordion__title");
      title.classList.toggle("accordion__title--collapse");
      var accordionList = this.nextElementSibling;
      if (accordionList === accordionLevel) {
        accordionLevel.classList.toggle("accordion__level-wrapper--hidden");
      } else {
        accordionList.classList.toggle("accordion__list--hidden");
      }
    });
  }
}
