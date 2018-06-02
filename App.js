import React from 'react';
import coffeeShops from './coffeeShops.json';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  AsyncStorage,
  Platform,
  TextInput,
  TouchableHighlight
} from 'react-native';

const isAndroid = Platform.OS == "Android";

export default class App extends React.Component {

  // initial state
  state = {
    coffeeShops: coffeeShops,
    location: ""
  }


  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}  >
          <Text style={styles.title}>Coffee Shops Near You</Text>
        </View>
        <TextInput
          style={styles.textInput} 
          onSubmitEditing={this.onNewItem}
          placeholder='Add New Item'
          returnKeyType="done"
          onChangeText={this.onChangeText}
          value={this.state.item}
          />
        
        <FlatList
          data={coffeeShops}
          renderItem={({item}) => (
              <View style={{backgroundColor: 'white'}}>
                <Text>{item.name}</Text>
              </View>
          )} 
        />
      </View>
    );
  }

} // App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
});
