import { View, Text, Button, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import styles from '../../style'

export default function HomeScreen({navigation}) {
  return (
    <View>
          <Text>HomeScreen</Text>

          
      <Button title='Detail' onPress={()=>navigation.navigate('Detail') }></Button>
        <Pressable style = {styles.a}>
            <Image style = {styles.img}  source={require('../../assets/img1.jpg')}/>
        </Pressable>
    
    </View>
  )
}