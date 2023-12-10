import { View, Text, TextInput, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import styles from '../../style'



export default function TextScreen(navigation) {
  const [Mytext ,setMytext ] = useState({})
  return (
    <View style = {{flex:1,justifyContent:'center'}}>
   {/*   <Button title='Detail' onPress={()=>navigation.navigate('Detail')}></Button> */}
   
      <Text style = {{textAlign:'center', marginBottom:20,}}>{Mytext.Name}</Text>
      <Text style={{textAlign:'center', marginBottom:20}}>{Mytext.Phone}</Text>
      <TextInput onChangeText={(e)=> {setMytext({...Mytext , Name:e})}} placeholder='Name' placeholderTextColor={'red'} style = {styles.input}/>
      <TextInput onChangeText={(e)=> {setMytext({...Mytext , Phone:e})}} placeholder='Phone' placeholderTextColor={'red'} style = {styles.input}/>

    </View>
  )
}  