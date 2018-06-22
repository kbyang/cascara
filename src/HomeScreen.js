import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Platform,
  TextInput,
  Dimensions,
  Button
} from 'react-native';
import {
  List,
  ListItem,
  Input,
} from 'react-native-elements';

import coffeeShops from '../data/coffeeShops.json';

const {SCREEN_HEIGHT, SCREEN_WIDTH} = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Coffee Shops Near You',
  };

  // initial state
  state = {
    coffeeShops: coffeeShops,
    location: ""
  }

  constructor() {
    super();
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "0%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.input}>
          <Input
            placeholder='Type here....'
            />
        </View>

        <View style={styles.list}>
          <FlatList
            data={coffeeShops}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                subtitle={'woof'}
                containerStyle={{ borderBottomWidth: 0 }} //for custom ItemSeparatorComponent

                onPress={() => this.props.navigation.navigate('Details', {
                    id: item.name,
                  }
                )}
              />
            )}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    width: SCREEN_WIDTH,
    borderBottomWidth: 1
  },
  list: {
    flex: 1
  }
});