import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Input, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class HomePage extends Component {
  state = {
    value: null,
  };

  onChangeValue = value => {
    this.setState({value});
  };

  submit = () => {
    const {setAsteroidId} = this.props;
    setAsteroidId(this.state.value);
    this.setState({value: null});
  };

  render() {
    const {randomSubmit} = this.props;
    return (
      <View>
        <TextInput
          placeholder="Enter Asteroid ID"
          value={this.state.value}
          onChangeText={this.onChangeValue}
        />
        <Button disabled={!this.state.value} onPress={this.submit}>
          <Text>Submit</Text>
        </Button>
        <Button onPress={randomSubmit}>
          <Text>Random Asteroid</Text>
        </Button>
      </View>
    );
  }
}

export default HomePage;
