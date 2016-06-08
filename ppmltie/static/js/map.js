var mymap = L.map('mapid').setView([60.17, 24.94], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data (and currently tiles) &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(mymap);


var lam_station_meta = [];
var lam_markers = [];

$.getJSON("static/meta_traffic_stations.json", function( data ) {
  $.each( data, function(ind, item) {
    console.log(item);
    lam_station_meta.push(item);
    var marker = L.marker([item['lat'], item['lon']]).addTo(mymap)
      .bindPopup("<b>LAM station " + item['lam_code'] + " </b>" + 
                 "<br />" + item['name_fi']);
    lam_markers.push(marker);
  });
});
