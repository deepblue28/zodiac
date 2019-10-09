import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'; //imported from react native








export default class profile extends Component {
  render() {
    return (
      //view is parent Component, text is child
      //ImageBackground parent element
      
       <View styles={styles.container}>
        

          <View style={styles.header}>
             <Text style={styles.sign}>What's your zodiac</Text>
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

  title: {
    color: '#0E0E0E',
    fontSize: 23,
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
    color: '#fff', // add coma for each 
},

sign: {
  fontSize: 28,
  fontWeight: '500',
  fontFamily: 'Roboto',
  color: 'rgba(51, 51, 49, 1.0)',
  padding: 20,
  paddingLeft: 40,
  paddingRight: 40

},

MenuContainer: {
  height: '32%',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 40,
  
  
}


});
