import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated} from 'react-native'; //imported from react native
import { Assets } from 'react-navigation-stack';
import { Asset } from 'expo-asset';
//import { TextInput } from 'react-native-gesture-handler';







export default class home extends Component {

  // animation = new Animated.Value(0);
  // animationSpring = new Animated.Value(0);


  // componentDidMount() { 
  //   Animated.timing(this.animation, {
  //     duration: 1000,
  //     toValue: 1
  //   }).start()


  //   Animated.spring(this.animationSpring, {
  //       toValue: 100,
  //       speed: 0,
  //       bounciness: 10
  //   }).start()

  // }
    


  render() {
    return (
    
      <ImageBackground style={styles.container}> 

        <View style={styles.overlay}>

          <View style={styles.header}>
            {/* <Animated.Text style={{...styles.text, opacity: this.animation}}>What's your sign</Animated.Text> */}
            <Text style={{fontSize: 50}}>WELCOME!</Text>
            <Text style={{fontSize: 20, marginTop: 20}}>Get info and insight into your zodiac sign and maybe see you're 
            compatiable with.</Text>

                  
            
          </View>
          
           
           <View style={styles.MenuContainer}>
              {/* <Animated.Text style={{...styles.text, opacity: this.animation}}>Home screen</Animated.Text>
              <Animated.Text style={{...styles.text, left: this.animationSpring}}>Home </Animated.Text> */}
          </View>

         </View> 
 
     </ImageBackground>

        
       
        
        

        
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    height: '100%',
    width: '100%'
  },


  overlay: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(17, 124, 232, .3)',
    
  },

  header: {
    height: '27%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // add coma for each 
},



MenuContainer: {
  height: '32%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 30,
  
},

Text: {
color: 'green',
fontWeight: 600,


},



});
