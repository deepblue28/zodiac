import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated} from 'react-native'; //imported from react native







export default class profile extends Component {

  animation = new Animated.Value(0);
  animationSpring = new Animated.Value(0);


  componentDidMount() { 
    Animated.timing(this.animation, {
      duration: 2000,
      toValue: 1
    }).start()


    Animated.spring(this.animationSpring, {
        toValue: 100,
        speed: 0,
        bounciness: 10
    }).start()

  }


render() {
    return (
      //view is parent Component, text is child
      //ImageBackground parent element
      
       <View styles={styles.container}>
        

        <View style={styles.header}>
            <Animated.Text style={{...styles.Text, fontSize: 30, fontWeight: 500, opacity: this.animation}}>What's your sign</Animated.Text>
        </View>

          <View style={styles.MenuContainer}>
        
        <Image style={{width: 60, height: 60}}
          source={{uri: 'http://www.clker.com/cliparts/b/7/b/2/1222277214403740641Aquarius.svg.med.png'}}
        /> 

        <Image style={{width: 60, height: 60}}
          source={{uri: 'http://www.clker.com/cliparts/b/4/2/5/1222277224836626404Aries.svg.med.png'}}
        /> 


        <Image style={{width: 60, height: 60}}
          source={{uri: 'http://www.clker.com/cliparts/1/f/c/f/12222772391191676953Gemini.svg.med.png'}}
        /> 

        <Image style={{width: 60, height: 60}}
          source={{uri: 'http://www.clker.com/cliparts/6/a/e/e/1222277271120416501Taurus.svg.med.png'}}
        /> 

        <Image style={{width: 60, height: 60}}
          source={{uri: 'http://www.clker.com/cliparts/f/c/2/8/12222772761413931807Virgo.svg.med.png'}}
        /> 


          </View>

         </View>
 
     

        
       
        
        

        
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    height: '100%',
    width: '100%'
  },



  /*overlay: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(165, 180, 199, .2)'
  },*/

  header: {
    height: '27%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', 
},



MenuContainer: {
  height: '33%',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 40,
  
  
},




});
