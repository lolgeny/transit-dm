var map, marker, hall = {lat: 51.703047, lng: -0.180949};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: hall,
    zoom: 15
  });
  marker = new google.maps.Marker({
    position: hall,
    map: map
  });
}
