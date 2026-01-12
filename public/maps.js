//declaring at top becomes accessible where needed
let map; 
let infoWindow;

function initMap() {
    console.log("INIT MAP FIRED");
    console.log("MAPS.JS LOADED")
  // Creating the map using coordinates from google maps
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.00952230088292, lng: -2.1733306605025526 },
    zoom: 16, //how zoomed in the map should appear.
    mapId: "map"
  });

  infoWindow = new google.maps.InfoWindow();

  // Points of Interest in an array [3]
  const wildlifePOIs = [
    {
      position: { lat: 53.008503096859926, lng: -2.1745116555640687 },
      title: "Dam-nation of the Beavers"
    },
    {
      position: { lat: 53.00874947346192, lng: -2.177576084674637 },
      title: "The Featherlands"
    },
    {
      position: { lat: 53.01023565110374, lng: -2.1804159650804276 },
      title: "Swamp of the Amphibians"
    },
    {
      position: { lat: 53.007994443847956, lng: -2.1811028198977165 },
      title: "The Burrow"
    }
  ];
  //cycle through each element in array to plot their location
  wildlifePOIs.forEach(poi => {
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: poi.position,
      title: poi.title
    });
  });

  // User's location
  const locationButton = document.getElementById("locationButton");
  locationButton.addEventListener("click", () => {
    const output = document.getElementById("output");

    //Error handling for select browsers
    if (!navigator.geolocation) {
      output.textContent = "Geolocation not supported.";
      return;
    }

    output.textContent = "Locating…";

    //get location
    navigator.geolocation.getCurrentPosition(
      pos => {
        const userPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };

        // Center map on user
        map.setCenter(userPos);

        // User's marker
        new google.maps.marker.AdvancedMarkerElement({
          map,
          position: userPos,
          title: "Your Location"
        });

        output.textContent = `Your position: (${userPos.lat}, ${userPos.lng})`;
      },
      err => {
        output.textContent = "Unable to retrieve your location.";
      }
    );
  });
}

window.initMap = initMap;
