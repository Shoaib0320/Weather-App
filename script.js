async function getWeather() {
    var city = document.getElementById('inp').value;
    var apiKey = '3b0f9a516ca8e82aae5177d2b31bd6d5'; // Replace with your OpenWeatherMap API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        var response = await axios.get(url);
        var data = response.data;
        var temp = data.main.temp;
        var weatherData = `Temperature in ${city}: ${temp}°C`;

        document.getElementById('showweatherdata').innerText = weatherData;

       var weatherIcon = document.getElementById('weather-icon');
        if (temp > 30) {
            weatherIcon.src = 'sunny.png'; // Path to sun image
            weatherIcon.alt = 'Sunny';
        } else {
            weatherIcon.src = 'cloud.png'; // Path to cloud image
            weatherIcon.alt = 'Cloudy';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('showweatherdata').innerText = 'Error fetching weather data. Please try again.';
    }
}
