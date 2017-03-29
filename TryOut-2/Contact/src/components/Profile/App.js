import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Brader!</Text>
        <Button
          onPress={() => navigate('Detail',{user:'Syauqi'})}
          title="Go"
        />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `Detail of ${state.params.user}`,
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Information Detail of {params.user}</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent details</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Detail',{user:'Syauqi'})}>
          <Text style={styles.buttonText}>
            Go recent details
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all details</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Detail',{user:'Syauqi'})}
          title="Go all details"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Profile',
};

const styles=StyleSheet.create({
  buttonContainer:{
    backgroundColor:'rgba(44, 62, 80,1.0)',
    paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
    color:'rgba(255, 255, 255,1.0)',
    fontWeight:'700'
  }
});

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Detail: { screen: DetailScreen },
});

module.exports = SimpleApp;
