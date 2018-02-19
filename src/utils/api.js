import axios from 'axios';

// Weather API
const apiKey = 'e7819a0645bb3723fbfe223ad074c870';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const urlSettings = `,us&units=imperial&mode=json&appid=${apiKey}`;

const api = {
  fetchCurrentWeather(city) {
    const url = `${baseUrl}weather?q=${city}${urlSettings}`;

    return axios
           .get(url)
           .then(response => {
             const city = response.data.name;
             const currentTemp = Math.round(response.data.main.temp);
             const high = Math.round(response.data.main['temp_max']);
             const low = Math.round(response.data.main['temp_min']);
             const wind = Math.round(response.data.wind.speed);
             const clouds = response.data.clouds.all;
             let description = response.data.weather[0].description;
             description = titleCase(description);

             return [ city,
                      currentTemp,
                      high,
                      low,
                      wind,
                      clouds,
                      description,
                    ];
           });
  },

  fetchForecasts() {
    const url = `${baseUrl}forecast/daily?q=${this.city}${urlSettings}`;

    return axios
           .get(url)
           .then((response) => {
             const allForecasts = response.data.list;
             const selectForecasts = allForecasts.slice(0, 5);
             return selectForecasts;
           });
  }
}

const titleCase = (words) => {
  return words
         .split(' ')
         .map(word => word[0].toUpperCase() + word.slice(1))
         .join(' ');
};

export default api;
