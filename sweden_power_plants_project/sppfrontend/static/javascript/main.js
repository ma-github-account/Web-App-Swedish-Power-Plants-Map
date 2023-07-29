document.addEventListener('DOMContentLoaded', init)

function init() {
  //  Leaflet Map
  const map = L.map('map').setView([62.50, 16.35], 5)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // Fetch API - GET Request
  const fetchGetRequest = async (url, func) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      return func(json)
    } catch (error) {
      console.log(error.message)
    }
  }

  const fossil_fuel_Icon = L.icon({
      iconUrl:"media/fossil_fuel.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const radiation_Icon = L.icon({
      iconUrl:"media/radiation.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const hydro_power_Icon = L.icon({
      iconUrl:"media/hydro_power.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const wind_turbine_Icon = L.icon({
      iconUrl:"media/wind_turbine.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const placeImageElement = document.getElementById('placeimage');
  const menuTitleElement = document.getElementById('menu_title');
  const menuTextElement = document.getElementById('menu_text');
  const menuTextElement1 = document.getElementById('menu_text1');
  const menuTextElement2 = document.getElementById('menu_text2');

  const onEachFeatureHandler = (feature, layer) => {
    let placeName = feature.properties.place_name
    layer.bindPopup(`Place name is <br/><center><b>${placeName}</b></center>`)
    let noImageAvailable = './media/place_images/no_image_available.jpg';


    layer.on('click', (e) => {
      let featureImage = feature.properties.image ? feature.properties.image : noImageAvailable
      let featureDescription = feature.properties.site
      let featureDescription1 = feature.properties.coordinates
      let featureDescription2 = feature.properties.info

      menuTitleElement.innerHTML = `Power Plant Name: ${placeName}`;
      placeImageElement.setAttribute('src', featureImage);
      menuTextElement.innerHTML = featureDescription;
      menuTextElement1.innerHTML = featureDescription1;
      menuTextElement2.innerHTML = featureDescription2;
    })
  }

  // GeoJSON Layer
  const addAllPlacesToMapWithIcon1 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(fossil_fuel_Icon)
      }
    }).addTo(map)

    styleGeoJSONOnClick(places)
  }

  const addAllPlacesToMapWithIcon2 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(radiation_Icon)
      }
    }).addTo(map)

    styleGeoJSONOnClick(places)
  }

  const addAllPlacesToMapWithIcon3 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(hydro_power_Icon)
      }
    }).addTo(map)

    styleGeoJSONOnClick(places)
  }

  const addAllPlacesToMapWithIcon4 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(wind_turbine_Icon)
      }
    }).addTo(map)

    styleGeoJSONOnClick(places)
  }

  fetchGetRequest('/api/v1/placescat1/', addAllPlacesToMapWithIcon1)
  fetchGetRequest('/api/v1/placescat2/', addAllPlacesToMapWithIcon2)
  fetchGetRequest('/api/v1/placescat3/', addAllPlacesToMapWithIcon3)
  fetchGetRequest('/api/v1/placescat4/', addAllPlacesToMapWithIcon4)
}