var map = new GMaps({
  div: '#map',
  lat: 44.7623434,
  lng: 20.4135459,
    zoom: 17
});

map.addMarker({
  lat: 44.7621322,
  lng: 20.4151456,
  title: 'Pivologija',
  infoWindow: {
  content: '<p>Vasa prodavnica piva</p>'
}
});