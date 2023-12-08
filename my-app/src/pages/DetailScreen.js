import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import styles from '../../style'

export default function DetailScreen({navigation}) {
  return (
    <View style = {{flex:1, alignItems:'center' }}>
      <Text>DetailScreen</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home') }></Button>
     <Image style = {{height : 400,width:300}} source={require('../../assets/img2.jpg')}></Image>
    
    </View>
  )
}