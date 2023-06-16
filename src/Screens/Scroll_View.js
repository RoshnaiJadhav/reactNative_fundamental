import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'

class Scroll_View extends Component {
  state={
    name:[
        {'name':'Roshani','id':1},
        {'name':'Roshani','id':2},
        {'name':'Roshani','id':3},
        {'name':'Roshani','id':4},
        {'name':'Roshani','id':5},
        {'name':'Roshani','id':6},
        {'name':'Roshani','id':7},
        
    ]
  }
  render(){
    return (
    <View>
        <ScrollView>

            {
                this.state.name.map((item,idex) => (
                    <View key={item.id} style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                ))
            }
        </ScrollView>
      <Text>ScrollView</Text>
    </View>
  )
    }
}

export default Scroll_View

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        height:200,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
     }

})