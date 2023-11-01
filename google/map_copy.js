const codes = JSON.parse(localStorage.getItem("codes"));
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: 34.1807323, lng: -118.3208831 },
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Add markers to the map.
  const markers = codes.map((item, i) => {
    const location = item.location;
    const label = item.code_help;
    // const label = item.address + "," + item.city + "\n" + item.code_help;
    console.log(location);
    console.log(label);
    const marker = new google.maps.Marker({
      location,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });
  console.log(markers);

  console.log(markerClusterer);
  // Add a marker clusterer to manage the markers.
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}

window.initMap = initMap;
