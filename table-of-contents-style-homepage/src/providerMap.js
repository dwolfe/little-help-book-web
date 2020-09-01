let singleLocationMap = L.map('mapid').setView([44.0521,-123.0868], 10);

function mapInit() {
	let attribution = '&copy; <a href="https://carto.com/">Carto</a>';
	let tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
		{ attribution });
	tiles.addTo(singleLocationMap);
}

function addMarker(placeInfo) {
    
}