import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native'; //imported from react native







export default class settings extends Component {
  render() {
    return (
      //view is parent Component, text is child
      //ImageBackground parent element
      <ImageBackground style={styles.container}> 

        <View style={styles.overlay}>

           <View style={styles.header}>
               <Text style={styles.sign}>settings</Text>
           </View>

           <View style={styles.MenuContainer}>
             
            
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
// apply css variable to any child or parent component
  title: {
    color: 'black',
    fontSize: 23,
  },

  overlay: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(17, 124, 232, .3)'
  },

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
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 30,
  



}


});
