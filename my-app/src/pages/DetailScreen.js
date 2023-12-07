import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'


export default function DetailScreen({navigation}) {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home') }></Button>
    </View>
  )
}