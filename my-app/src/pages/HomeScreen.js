import { View, Text, Button, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Touchable } from 'react-native'
import styles from '../../style'


export default function HomeScreen({navigation}) {
  const [count , setCount] = useState(0)
  const [name , setName] = useState({a: 7 , b:22})
  return (
     

    
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>HomeScreen {count}</Text>
<Button title='add' onPress={()=> {
  setCount(count+1)
  
}}/>
  
  
<Button title='sub' onPress={()=> {if (count > 0) {
  setCount(count-1) 
  
}}}/>
<Text>{count}</Text>
          
      <Button title='Detail' onPress={()=>navigation.navigate('Detail', {id: 'id1', arr :[23,44,55,32,5],name: 'custome header'})}/>
        <TouchableOpacity onPress={(e)=>{setName({...e , b:55})}} style={styles.a}>
            <Image style = {styles.img}  source={require('../../assets/img1.jpg')}/>
        </TouchableOpacity>
        <Text>{name.b}</Text> 
        <Text>{}</Text>
        
    
    </View>
  )
}