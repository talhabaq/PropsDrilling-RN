import React, { createContext, useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { CounterContext } from '../App';


const OnMouseOver = () => {

    const{count,increment}=useContext(CounterContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click {count}</Text>
      <TouchableOpacity onPressIn={increment} ><Text>Mouse Count</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default OnMouseOver;
