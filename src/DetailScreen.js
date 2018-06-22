import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Dimensions,
  Button
} from 'react-native';

import coffeeShops from '../data/coffeeShops.json';

export default class DetailScreen extends React.Component {
  render() {
  	const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(id)}</Text> 
      </View>
    );
  }
}