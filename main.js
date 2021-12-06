"use strict";

var map = L.map('map').setView([40, -105], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);

var metIcon = L.icon({
    iconUrl: 'dot.png',
    iconSize:     [10, 10], // size of the icon
});

var markers = [];
fetch('./meteorite.json')
  .then(response => response.json())
  .then(data => {
    if (!data || data.length < 1) return console.log("no data");
    for (let i = 0; i < 100; i++) {
        if (!data[i].reclat || !data[i].reclong) continue;
        console.log(data[i]);
        markers.push(L.marker([data[i].reclat, data[i].reclong], {icon: metIcon}).addTo(map));
      };
      console.log("markers added =", markers.length); // now you can access all the markers in this array
  })
  .catch (err => { console.error("an error???", err); });
