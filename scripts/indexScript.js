$(document).ready(function () {

    function success(pos) {
            
        var apiWeather = "http://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&units=imperial&appid=6401d645d8148174fc14a582998bade2";
        $.getJSON(apiWeather, function(data){
           
            var city = data.name;
            var fTemp = data.main.temp
            var description = data.weather[0].description;
            var humidity = data.main.humidity;
            $("#city").html(city);
            $("#fTemp").html(fTemp); 
            $("#description").html(description);
            $("#humidity").html(humidity);           

        });
      };
      
      function error(err) {
        //console.warn(`ERROR(${err.code}): ${err.message}`);
        alert(`ERROR(${err.code}): ${err.message}`);
      };
      
      navigator.geolocation.getCurrentPosition(success, error);
    });

    /*
     console.log('city:'+data.name);
     console.log('fTemp:'+data.main.temp);
    console.log('description:'+data.weather[0].description);
    console.log('humidity:'+data.main.humidity)

    var celsius = (data.main.temp - 32) * 5/9;
    console.log('celsius:'+ celsius)
     //var crd = pos.coords;
        //lat = crd.latitude;
        //long = crd.longitude;
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=imperial", function(data) {	// add '&units=imperial' to get U.S. measurements
    var api = "https://fcc-weather-api.glitch.me/api/current?";
    var apiWeather = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6401d645d8148174fc14a582998bade2";
    $.getJSON(apiWeather, function(data){
        console.log(data.coord.lat)
    });
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`temp: ${pos.main}`)
        console.log(`More or less ${crd.accuracy} meters.`);
        */
