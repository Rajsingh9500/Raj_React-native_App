
import {Dimensions, ImageBackground, Text, View } from 'react-native';
import React from "react";
import styles from "./style";
/*  const a = Dimensions.get('screen').height; */
/* alert(`width  = ${Dimensions.get('screen').fontScale}`) */

export default function App() {
  return (
   <> 
   <ImageBackground  style ={styles.img} source={require('./assets/images/pic1.jpg')}>
   <View style = {styles.a}>
   <Text>Discover Mindfull hiking</Text>
  </View>
  <ImageBackground style = {styles.b} source={require('./assets/images/pic2.jpg')}>
  <View style = {styles.b  }>
    <Text>
      hey coder
    </Text>
    </View>
  </ImageBackground>
    </ImageBackground>
    </>
  
  );
} 




