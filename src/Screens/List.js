import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";

class List extends Component {
  state = {
    name: [
      {
        id: 0,
        name: "Roshani",
      },
      {
        id: 1,
        name: "Abhijeet",
      },
      {
        id: 2,
        name: "Pranav",
      },
      {
        id: 3,
        name: "Girija",
      }
    ]
  }
  alertItemName = (item) => {
    alert(item.name);
  };
  render() {
    return (
      <View>
        {this.state.name.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}>
            <Text style={styles.text}>
                {item.name}
                </Text>
          </TouchableOpacity>
        ))
        }
      </View>
    )
  }
}

export default List;

const styles = StyleSheet.create({

    container:{
        padding:10,
        marginTop:3,
        backgroundColor:"#d9f9b1",
        alignItems:'center',
    },
    text:{
        color:'#4f603c'
    }
});
