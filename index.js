

console.log("sanity check");

// Initialize and add the map
function initMap() {
  // The location of the cafe
  var office = {lat: 35.656440, lng: -105.951910};
  // The map, centered at the cafe
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: office});
  // The marker, positioned at the cafe
  var marker = new google.maps.Marker({position: office, map: map});
}
 