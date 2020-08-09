function mapInit() {
	let mymap = L.map('mapid').setView([51.505, -0.09], 13);
	var attribution = '&copy; <a href="https://carto.com/">Carto</a>';
	var tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png", { attribution });
	tiles.addTo(mymap);
}

mapInit();