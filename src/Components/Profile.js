import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = (props) => {
    console.log("props",props);
  return (
    <View>
      <Text>{props.data}</Text>
    </View>
  )
}
class ProfileProps extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.email}</Text>
            </View>
        )
    }
}

export default Profile

const styles = StyleSheet.create({})