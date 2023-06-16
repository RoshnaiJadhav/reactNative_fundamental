import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Button = (props) => {
    const {title,onPress,style}=props;

  return (
   <TouchableOpacity style={[StyleSheet.button,style]} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
})