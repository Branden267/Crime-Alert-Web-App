<!DOCTYPE html>
<html>
<head>
<title></title>
<style>
    * {
        margin: 0;
        padding: 0;
    }
#map {
    height: 500px;
    width: 100%;
}
</style>
</head>
<body>

<div id="map"></div>

<script>
function initMap() {
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
</script>
<script async defer src="https://maps.googleapis.com/maps/api/
js?key=AIzaSyAsop5XwnDZ2hOo-AVAu0zn0MflUAv3Pe8&callback=initMap"></script>

</body>
</html>