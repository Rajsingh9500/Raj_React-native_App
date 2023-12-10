import { View, Text, TextInput, } from 'react-native'
import React from 'react'
import { Button } from 'react-native'


export default function TextScreen(navigation) {
  return (
    <View style = {{flex:1,justifyContent:'center'}}>
     <Button title='Detail' onPress={()=>navigation.navigate('Detail')}></Button>
      <Text>hello coder</Text>
      <TextInput placeholder='name' style = {{borderColor:'black' ,padding:20,}}></TextInput>

    </View>
  )
}