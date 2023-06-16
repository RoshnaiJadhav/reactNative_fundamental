import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Button from './Button';

const Counter = () => {
    const [count,setCount]=useState(0);
    const Increment =()=>{
        setCount(count+1);
    };
    const Decrement=()=>{
        setCount(count-1);
    };

  return (
    <View>
      <Text>Count :{count}</Text>
      <Button title='Increment' onPress={Increment}/>
      <Button title='Decrement' onPress={Decrement}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})