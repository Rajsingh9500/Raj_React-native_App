import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import styles from '../../style'


export default function DetailScreen({navigation , route}) {
   const [obj , setObj] = useState(route.params)
  return (
    console.log(obj),
    <View style = {{flex:1, alignItems:'center' }}>
      <Text>{obj.id} DetailScreen{obj.arr   }</Text>
      <Text>DetailScreen</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home') }></Button>
     <Image style = {{height : 400,width:300}} source={require('../../assets/img2.jpg')}></Image>
    
    </View>
  )
}