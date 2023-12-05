import { View, Text, ScrollView, Image, Linking } from 'react-native'
import React from 'react'
import styles from "./style";
export default function () {
return (

<>
<View>
<Text style = {{margin:50}} onPress={()=> {Linking.openURL('https://google.com')}}>
  Google 
</Text>
</View>


<ScrollView showsVerticalScrollIndicator = {false} horizontal = {false}>
   {/*  <View style = {styles.a} >
      <View style = {styles.main}>
        <Text style = {{fontSize:24,
        color:'green', transform:[{rotate:'30deg'},{scale:1},{translateY:40}]}
        }>Hello</Text>
      </View>
      <View style = {[styles.main , styles.a1]}>
        <Text  style = {{fontSize:24,
        color:'purple', transform:[{rotate:'45deg'}]} }>
          Hello</Text>
      </View>
      <View style = {styles.main}>
        <Text style = {styles.txt}>Hello</Text>
      </View>
      <View style = {[styles.main , styles.a1]}>
        <Text>Hello</Text>
      </View>
        
        
    </View> */}
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
   {/*  <View style = {styles.a} >
      <View style = {styles.main}>
        <Text style = {{fontSize:24,
        color:'green', transform:[{rotate:'30deg'},{scale:1},{translateY:40}]}
        }>Hello</Text>
      </View>
      <View style = {[styles.main , styles.a1]}>
        <Text  style = {{fontSize:24,
        color:'purple', transform:[{rotate:'45deg'}]} }>
          Hello</Text>
      </View>
      <View style = {styles.main}>
        <Text style = {styles.txt}>Hello</Text>
      </View>
      <View style = {[styles.main , styles.a1]}>
        <Text>Hello</Text>
      </View>
        
        
    </View> */}
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
    </ScrollView>
   
    </>
    
  )
}



