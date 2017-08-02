var MapWrapper = function(container, coords, zoom) { // map constructor
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom    
  });
  this.markers = [];
}

MapWrapper.prototype = {
  
  addMarker: function(coords, details, text) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      title: details,
      information: text
    });

 // infoWindow - not working when in its own function
 var infoWindow = new google.maps.InfoWindow({
   content: text
  });

  marker.addListener('click', function() {
  infoWindow.open(this.googleMap, marker);
  });

    this.markers.push(marker);
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, "click", function(event) {
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.addMarker(position);
    }.bind(this));
  },

  bounceMarkers: function() {
    this.markers.forEach(function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      })
    },
  
  //NOT WORKING HERE, MOVED TO ADD MARKER FUNCTION
  // addInfoWindow: function() {
  //  var infoWindow = new google.maps.InfoWindow("test");
  //  google.maps.event.addListener(this.marker,'click',function(){
  //   infoWindow.open(this.googleMap, this.marker);
  
  // });
  // }


//NOT WORKING
// takesToLisbon: function() {
//   var lisbon = {lat: 38.722, lng: -9.139};
//   google.maps.event.addDomListener(this.googleMap, "click", function() {
//        this.googleMap.setCenter(lisbon) 
//     });
//   }
}
  
