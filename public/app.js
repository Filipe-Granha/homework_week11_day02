var initialize = function() {
  var center = { lat: 51.507351, lng: -0.127758 };
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, 10);

  var warwick = { lat: 51.4894986, lng: -0.1947981};

  mainMap.addMarker(center, "Do not click!", "Somewhere central in London!");
  mainMap.addMarker(warwick, "Click", "Warwick Road");

  mainMap.addClickEvent();

  var bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var chicago = {lat: 41.850, lng: -87.650};

  google.maps.event.addDomListener(mainMap, 'click', function() {
    mainMap.setCenter(chicago)
  });


  // var lisbonButton = document.querySelector("#button-takes-to-lisbon");
  // lisbonButton.addEventListener("click", mainMap.takesToLisbon.bind(mainMap));

  
  // mainMap.addInfoWindow();
}

window.addEventListener("load", initialize);