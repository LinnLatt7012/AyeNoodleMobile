import * as React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import {RadioButtonGroup, RadioButton} from 'react-native-paper';

export default class RadioButtom extends Component {
  state = {
    value: 'first',
  };

  render() {
    return (
      <RadioButtonGroup
        onValueChange={value => this.setState({value})}
        value={this.state.value}>
        <View>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
      </RadioButtonGroup>
    );
  }
}
