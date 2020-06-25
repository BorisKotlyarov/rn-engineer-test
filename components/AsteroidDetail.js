import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AsteroidDetail extends Component {
  render() {
    const {data} = this.props;
    const {name, nasa_jpl_url, is_potentially_hazardous_asteroid} = data;

    return (
      <View>
        <Text>name: {name}</Text>
        <Text>nasa_jpl_url: {nasa_jpl_url}</Text>
        <Text>
          is_potentially_hazardous_asteroid:{' '}
          {is_potentially_hazardous_asteroid ? 'true' : 'false'}
        </Text>
      </View>
    );
  }
}

export default AsteroidDetail;
