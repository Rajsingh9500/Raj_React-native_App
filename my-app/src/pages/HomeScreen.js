import { View, Text, Button, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Touchable } from 'react-native'
import styles from '../../style'


export default function HomeScreen({navigation}) {
  const [name , setName] = useState({a: 7 , b:22})
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>HomeScreen</Text>

          
      <Button title='Detail' onPress={()=>navigation.navigate('Detail') }></Button>
        <TouchableOpacity onPress={(e)=>{setName({...e , b:55})}} style={styles.a}>
            <Image style = {styles.img}  source={require('../../assets/img1.jpg')}/>
        </TouchableOpacity>
        <Text>{name.b}</Text> 
    
    </View>
  )
}