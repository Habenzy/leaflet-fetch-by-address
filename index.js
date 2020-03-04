let myMap = L.map('map').setView([44.476, -73.212], 13)

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(myMap)

let myMarker = L.marker([44.5, -73.2]).addTo(myMap)

myMarker.bindPopup("I like CHEEEEEESSSSEEEE! Grommit")

function placeMarker(address, myInfo) {

	fetch(`https://nominatim.openstreetmap.org/search/?q=${address}&format=json`)
		.then((data) => {
			return data.json()
		})
		.then((locInfo) => {
			let info = locInfo[0]
			let lat = info.lat
			let lon = info.lon
			let thisMarker = L.marker([lat, lon]).addTo(myMap).bindPopup(myInfo)
			thisMarker.on('mouseover', () => {
				thisMarker.openPopup()
			})
		})
}

placeMarker('1250 Maston Hill rd granville vt', 'you can never go back')
