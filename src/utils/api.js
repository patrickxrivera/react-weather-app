import axios from 'axios';

const apiKey = 'e7819a0645bb3723fbfe223ad074c870';

const api = {
  fetchCurrentWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tallahassee,us&units=imperial&mode=json&appid=${apiKey}`;

    return axios
           .get(url)
           .then(response => {
             const city = response.data.name;
             const currentTemp = Math.round(response.data.main.temp);
             const high = Math.round(response.data.main['temp_min']);
             const low = Math.round(response.data.main['temp_max']);
             return [city, currentTemp, high, low];
           });
  }
}

export default api;
