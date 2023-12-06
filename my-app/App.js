import { View, Text, ScrollView, Image, Linking } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import styles from "./style";
const Stack = createNativeStackNavigator();
export default function () {
return (


<>
<NavigationContainer>
  <Stack.Navigator 
  initialRouteName='Home'>
    <Stack.Screen name='Detail' component={DetailScreen}/>
    <Stack.Screen options={{title : 'raj'}} name='Home' component={HomeScreen}/>
  </Stack.Navigator>
</NavigationContainer>

{/* <View>
<Text style = {{margin:50}} onPress={()=> {Linking.openURL('https://google.com')}}>
  Google 
</Text>
</View>


<ScrollView showsVerticalScrollIndicator = {false} horizontal = {false}>
       <View style = {styles.srl1}>
    <View style = {styles.img1 }>
    <Image  style = {styles.img1} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    <View style = {styles.img1 }>
    <Image  style = {styles.img1} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    <View style = {styles.img1 }>
    <Image  style = {styles.img1} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    <View style = {styles.img1 }>
    <Image  style = {styles.img1} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    </View>
    </ScrollView>

   
    <ScrollView showsHorizontalScrollIndicator = {false} horizontal= {true}>
   {}
    <View style = {styles.srl}>
    <View style = {styles.img }>
    <Image  style = {styles.img} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    <View style = {styles.img }>
    <Image  style = {styles.img} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    <View style = {styles.img }>
    <Image  style = {styles.img} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    <View style = {styles.img }>
    <Image  style = {styles.img} source={require('./assets/images/pic1.jpg')}>
     

    </Image>
    </View>
    </View>
    </ScrollView> */}
   
    </>
    
  )
}



