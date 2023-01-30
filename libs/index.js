
const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

const streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1 });

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: MAX_ZOOM,
});

const googleMaps = L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: MAX_ZOOM
})

const googleMapsSatellite = L.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
    maxZoom: MAX_ZOOM
})

const map = L.map('map', {
    center: MAP_CENTER,
    zoom: INIT_ZOOM,
    maxZoom: MAX_ZOOM,
    layers: [],
    // layers: [osm],
    zoomControl: false,
});
map.addControl(L.control.zoom({ position: 'bottomright' }));

// define rectangle geographical bounds
var bounds = [[55.000000, 22.000000], [2.000000, 86.000000]];
// create an orange rectangle
// const rectangle = L.rectangle(bounds, { color: "#ff7800", weight: 2, fill: false }).addTo(map);
// console.log(rectangle)
// zoom the map to the rectangle bounds
map.fitBounds(bounds);

const baseLayers = {
    'OpenStreetMap': osm,
    'Streets': streets,
    'Google Maps': googleMaps,
    'Google Satellite': googleMapsSatellite

};

// const layerControl = L.control.layers(baseLayers, null, { collapsed: false, position: "bottomleft" }).addTo(map);

let mapLayer = L.tileLayer(
    DATA_URL,
    {
        // opacity: 0.7,
        zIndex: 9999,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

// slider listers
var slider = document.getElementById("opacity-slider");

// slider.oninput = function () {
//     mapLayer.setOpacity(this.value / 100)
// }
