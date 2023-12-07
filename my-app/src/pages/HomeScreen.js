import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import styles from '../../style'

export default function HomeScreen({navigation}) {
  return (
    <View>
          <Text>HomeScreen</Text>

          
      <Button title='Detail' onPress={()=>navigation.navigate('Detail') }></Button>
        <TouchableOpacity style = {styles.a}>
            <Image style = {styles.img}  source={require('../../assets/img1.jpg')}/>
        </TouchableOpacity>
    
    </View>
  )
}