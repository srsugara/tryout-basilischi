// import './App';
// import './src/components/Login/Login';
// import './src/components/ListView/ListView';
import React,{Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  StyleSheet,
} from 'react-native';

import Login from './src/components/Login/Login';
import Contact from './src/components/ListView/ListView';

class RouteAuth extends Component {

    renderScene(route,navigator) {
      if(route.name=='root'){
        return <Login navigator={navigator} />
      }if(route.name=='contact'){
        return <Contact navigator={navigator} />
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <Navigator
            initialRoute={{name:'root'}}
            renderScene={this.renderScene.bind(this)}
          />
        </View>
      );
    }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#34495e'
  }
});


AppRegistry.registerComponent('Contact', () => RouteAuth);
