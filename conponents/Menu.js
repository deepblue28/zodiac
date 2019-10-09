import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native'; //imported from react native
 
// export it as component to other pages
export default class Menu extends Component {
    
    render() {
        return (
            <View style={styles.Menu}>
              <Image source={this.props.ZodiacImage}
                style={styles.image} />
            </View>
        ); // don't forget semi-colon!
    }
}

const styles = StyleSheet.create({
  
   Menu: {
       width: '33.333333%',
       height: '50%',
       /*backgroundColor: 'red',
       borderColor: 'black',
       borderWidth: 2,*/
       marginTop: 40,
       
},

   image: {
       height: '90%',
       width: '85%',
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: 15,
       resizeMode: 'contain',
       paddingHorizontal: 60,
       
       
       
    }
  
  
  });
  