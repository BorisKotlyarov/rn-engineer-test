import axios from 'axios';

class NasaService {
  constructor() {
    this.api_key = '8gcFo4cmNMRrQ3nqP46lAMb6mrxcHnjat8oGB7Gw';
    this.http = axios.create({
      baseURL: 'https://api.nasa.gov/neo/rest/v1/neo',
    });

    this.http.interceptors.request.use(
      config => {
        config.params = {...config.params, api_key: this.api_key};
        console.log(config.url);
        return config;
      },
      function(error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );
  }

  getAsteroid(asteroidId) {
    return this.http.get(`/${asteroidId}`);
  }

  asteroids() {
    return this.http.get('/browse');
  }
}

export default new NasaService();
