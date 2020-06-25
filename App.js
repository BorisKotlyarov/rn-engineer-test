import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import HomePage from './components/HomePage.js';
import AsteroidDetail from './components/AsteroidDetail.js';
import NasaService from './service';

class App extends Component {
  state = {
    asteroidId: null,
    asteroidDetails: null,
  };

  randomSubmit = async () => {
    const response = await NasaService.asteroids();
    const asteroidId =
      response.data.near_earth_objects[
        this._random(response.data.near_earth_objects.length)
      ].id;

    this.setState({asteroidId, asteroidDetails: null});
    this.submit();
  };

  submit = async () => {
    console.log('this.state.asteroidId: ', this.state.asteroidId);
    try {
      const response = await NasaService.getAsteroid(this.state.asteroidId);
      console.log(this.state.asteroidId, response);

      this.setState({asteroidDetails: response.data});
      Actions.asteroidDetail();
    } catch (e) {
      console.log(e);
      this.setState({asteroidId: null});
    }
  };

  _random(length) {
    return Math.round(Math.random() * (length - 1));
  }

  setAsteroidId = asteroidId => {
    console.log('asteroidId:', asteroidId);
    this.setState({asteroidId}, this.submit);
  };

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="home"
            component={props => (
              <HomePage
                {...props}
                randomSubmit={this.randomSubmit}
                setAsteroidId={this.setAsteroidId}
              />
            )}
            title="Home"
            initial
          />
          <Scene
            key="asteroidDetail"
            component={props => (
              <AsteroidDetail {...props} data={this.state.asteroidDetails} />
            )}
            title="Asteroid Detail"
          />
        </Stack>
      </Router>
    );
  }
}

export default App;
