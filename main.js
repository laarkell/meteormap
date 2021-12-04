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

fetch("./meteorite.json") //only works on web
.then(response => {
   return response.json();
})
.then(data => console.log(data));

// const data = require('./meteorite.json'); //need node module

for (let i = 0; i < data.length; i++) {
  var marker = L.marker([data[i].reclat, data[i].reclong]).addTo(map);
};
