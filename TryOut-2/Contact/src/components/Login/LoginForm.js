import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity} from 'react-native';

export default class LoginForm extends Component{

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(241, 196, 15,0.5)"
          returnKeyType="next"
          onSubmitEditing={()=>this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(241, 196, 15,0.5)"
          returnKeyType="go"
          style={styles.input}
          ref={(input)=>this.passwordInput=input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    padding:20
  },
  input:{
    height:40,
    backgroundColor:'rgba(255, 255, 255,0.2)',
    marginBottom:10,
    color:'rgba(241, 196, 15,1.0)',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'rgba(44, 62, 80,1.0)',
    paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
    color:'rgba(241, 196, 15,1.0)',
    fontWeight:'700'
  }
});
