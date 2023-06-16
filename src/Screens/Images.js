import React from 'react';
import {View, Image, StyleSheet,ScrollView} from 'react-native';
import Logo from '../../assets/Logo.png'
const styles = StyleSheet.create({
  container: {
   paddingTop: 50,
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   alignContent:'space-around',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:10,
    
  },
 
});

const Images = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Image  source={require('../../assets/Logo.png')} style={styles.tinyLogo} />
      <Image  source={require('../../assets/craft.png')} style={styles.tinyLogo} />
      <Image  source={require('../../assets/download.png')} style={styles.tinyLogo} />
      </ScrollView>
    </View>
  );
};

export default Images;