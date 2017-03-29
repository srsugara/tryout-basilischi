import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Login extends Component{
  navigate(routeName){
    this.props.navigator.push({
      name:routeName
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/Refactory.png')}
          />
          <Text style={styles.title}>
            Basilischi Squad
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={this.navigate.bind(this,'contact')} style={styles.buttonContainer} >
            <Text style={styles.buttonText}>
              See Contacts!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#34495e'
  },
  logoContainer:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    width:120,
    height:50
  },
  title:{
    color:'rgba(241, 196, 15,0.9)',
    marginTop:10,
    width:120,
    textAlign:'center'
  },
  formContainer:{
    flexGrow:1,
    padding:20,
    alignItems: 'center',
  },
  buttonContainer:{
    width:120,
    backgroundColor:'rgba(44, 62, 80,1.0)',
    paddingVertical:10
  },
  buttonText:{
    textAlign:'center',
    color:'rgba(241, 196, 15,1.0)',
    fontWeight:'700'
  }
});
