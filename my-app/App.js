
import {Dimensions, ImageBackground, Text, View } from 'react-native';
import React from "react";
import styles from "./style";
/*  const a = Dimensions.get('screen').height; */
/* alert(`width  = ${Dimensions.get('screen').fontScale}`) */

export default function App() {
  return (
   <> 
   <ImageBackground  style ={styles.a} source={require('./assets/images/dasa.jpg')}>
   <View style = {styles.a}>
   <Text>hekllo</Text>
  </View>
  <View style = {styles.a}>
    <Text>
      hey coder
    </Text>
    </View>
    </ImageBackground>
    </>
  
  );
}



