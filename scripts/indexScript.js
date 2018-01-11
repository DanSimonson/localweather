$(document).ready(function () {
    /* No Global variables necessary
    --------------------------------
    var temperatureC;
    var temperatureF;
    var units = "F";
    -------------------------------
    */
    
    function success(pos) {
        //must use https to be compatible with html5
        var api = "https://fcc-weather-api.glitch.me/api/current?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude;  

        $.getJSON(api, function(data){
            
            var units = "F";
            var temperatureC = data.main.temp;
            var temperatureF = parseFloat(temperatureC * 9 / 5 + 32).toFixed(1);          
            $("#city").html(data.name);
            $("#temperature").html(temperatureF + "&deg;F"); 
            $("#description").html(data.weather[0].description);
            $("#humidity").html(data.main.humidity);
            $("#city").html(data.name);
            $("#temp-units").click(function(){
                if(units == "C") {
                    units = "F";
                    $("#temperature").html(temperatureF + " &deg;F");                    
                }
                else {
                    units = "C";
                    $("#temperature").html(temperatureC + " &deg;C");                    
                }
            });
            setBackground(temperatureF);    
        });
      };
      
      function error(err) {
        //console.warn(`ERROR(${err.code}): ${err.message}`);
        alert(`ERROR(${err.code}): ${err.message}`);
      };
      
      navigator.geolocation.getCurrentPosition(success, error);

      function setBackground(temperatureF){
          
        $('body').css('background-image','url(img/weather.jpg');         
              
        if (temperatureF >= 80) {
            $("#thermometer").html("<i class = 'fa fa-thermometer-three-quarters'></i>");
        }
        else if (temperatureF >= 50 && temperatureF <= 79){
            $("#thermometer").html("<i class = 'fa fa-thermometer-half'></i>");
        }
        else if (temperatureF >= 37 && temperatureF <= 49){
            $("#thermometer").html("<i class = 'fa fa-thermometer-quarter'></i>");
        }
        else if (temperatureF <= 36){
            $("#thermometer").html("<i class = 'fa fa-thermometer-empty'></i>");
        }
      }
    });


 

