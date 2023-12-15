import { View, Text, TextInput, StyleSheet, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import styles from '../../style'
import AsyncStorage from '@react-native-async-storage/async-storage';
//set data 


const storeData = async (Mytext) => {
  try {
    const jsonValue = JSON.stringify(Mytext);
    await AsyncStorage.setItem('data', jsonValue);

    alert('Data stored successfully')
  } catch (e) {
    // saving error
  }
};
//  get data 
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('data');
    
    if(jsonValue != null){
      obj = JSON.parse(jsonValue)
      alert(obj.Name + ',' + obj.Phone +'value not render')
    }
  } catch (e) {
    // error reading value
  }
};


export default function TextScreen({navigation}) {
  const [Mytext ,setMytext ] = useState({})
  return (
    <View style = {{flex:1,justifyContent:'center'}}>
   <Button title='Detail' onPress={()=>navigation.navigate('Detail') }></Button>
   
      <Text style = {{textAlign:'center', marginBottom:20,}}>{Mytext.Name}</Text>
      <Text style={{textAlign:'center', marginBottom:20}}>{Mytext.Phone}</Text>
      <TextInput onChangeText={(e)=> {setMytext({...Mytext , Name:e})}} placeholder='Name' placeholderTextColor={'red'} style = {styles.input}/>
      <TextInput onChangeText={(e)=> {setMytext({...Mytext , Phone:e})}} placeholder='Phone' placeholderTextColor={'red'} style = {styles.input}/>
       
      <Button title='Set data' onPress={()=>{storeData(Mytext)}}></Button>
      <Button title='Get Data' onPress={()=>{getData()}}/>

    </View>
  )
}  