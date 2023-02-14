ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.938631, 30.323055],
      controls: [],
      zoom: 17
    },
    (myPlacemark = new ymaps.Placemark(
      [59.938631, 30.323055],
      {
        hintContent: "ул. Большая Конюшенная, 19/8"
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [54, 54]
      }
    ))
  );

  var geolocationControl = new ymaps.control.GeolocationControl();
  myMap.controls.add(geolocationControl, {
    float: "none",
    position: {
      top: "70px",
      left: "30px"
    }
  });

  var typeSelector = new ymaps.control.TypeSelector();
  myMap.controls.add(typeSelector, {
    float: "none",
    position: {
      top: "71px",
      left: "70px"
    }
  });

  var zoomControl = new ymaps.control.ZoomControl();
  myMap.controls.add(zoomControl, {
    size: "small",
    float: "none",
    position: {
      bottom: "100px",
      right: "30px"
    }
  });

  if (document.documentElement.clientWidth < 768) {
    myPlacemark.options.set("iconImageSize", [41, 41]);

    geolocationControl.options.set("position", {
      top: 40,
      left: 30
    });

    typeSelector.options.set("position", {
      top: 40,
      left: 70
    });

    zoomControl.options.set("position", {
      bottom: 50,
      right: 30
    });
  }

  if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1440
  ) {
    myPlacemark.options.set("iconImageSize", [57, 57]);
  }

  myMap.geoObjects.add(myPlacemark);
}
