import React, { Component } from "react";
//import Geolocation from "@react-native-community/geolocation";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";


export default class GPSscreen extends Component {

    render(){
      return(
        <View style={styles.Container}>
          
          <Text>OOMDW</Text>

        </View>
        
      )
    }
  
  }

const styles = StyleSheet.create({
    Container:{
      marginTop:20,
      margin: 160
    }

})