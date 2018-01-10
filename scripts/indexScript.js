$(document).ready(function () {
    var temperatureC;
    var temperatureF;
    var units = "F";
    
    function success(pos) {
            
        var apiWeather = "http://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&units=imperial&appid=6401d645d8148174fc14a582998bade2";
        $.getJSON(apiWeather, function(data){
           
            //var city = data.name;
            temperatureF = data.main.temp ;
            temperatureC = parseFloat((temperatureF - 32) / 1.8).toFixed(1);
            var description = data.weather[0].description;
            var humidity = data.main.humidity;
            var tempChange = false;
            
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
          console.log(temperatureF);
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


 

