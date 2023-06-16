import {Button, StyleSheet, Text, View ,Separator} from 'react-native'
import React from 'react'

const Button_S = () => {
  return (
    <View>
     <Text style={styles.textStyle}>Button Styling</Text>
     <Text style={styles.textStyle}>Accessibility</Text>
     <Text> The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.</Text>
     <Button title='Press me ' onPress={()=>Alert.alert('simple button pressed')}></Button>
    
     <Text> Adjust the color in a way that looks standard on each platform. On iOS,
        the color prop controls the color of the text. On Android, the color
        adjusts the background color of the button.</Text>
     <Button title='Press me' color="#f194ff" onPress={()=>Alert.alert('Button with adjusted color pressed')}></Button>
     
     <Text>  All interaction for the component are disabled.</Text>
     <Button title='Press me' disabled onPress={()=>Alert.alert('Cannot press this one')}></Button>
     
     <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
  
     
    </View>
  )
}

export default Button_S;

const styles = StyleSheet.create({
  textStyle:{
    color:'purple',
    fontSize:30,
    padding:20,
    fontWeight:30,
    textAlign: 'center',
  }
})