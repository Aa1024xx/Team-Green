import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

let {height, width} = Dimensions.get('window');


const Fish = () => {
  const rand = Math.random(-1, 1);
  const rand1 = Math.random(-1, 1);

  return (
  <FontAwesome5 name="fish" size={24} color="black" style={{position:"absolute", top: rand * (height * 0.25) + height * 0.5, left: rand1 * (width * 0.8) + 200}} />
  )
}; 


const styles = StyleSheet.create({
    fish: {
        position:"absolute", 
        top: Math.random() * height, 
        left: Math.random() * width
    }
});

export default Fish;