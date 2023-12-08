import { View, Text, Button, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Touchable } from 'react-native'
import styles from '../../style'


export default function HomeScreen({navigation}) {
  const [name , setName] = useState({a: 7 , b:22})
  return (
    <View>
          <Text>HomeScreen</Text>

          
      <Button title='Detail' onPress={()=>navigation.navigate('Detail') }></Button>
        <TouchableOpacity onPress={(e)=>{setName({...e , b})}} style = {styles.a}>
            <Image style = {styles.img}  source={require('../../assets/img1.jpg')}/>
        </TouchableOpacity>
    
    </View>
  )
}