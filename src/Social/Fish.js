import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

let {height, width} = Dimensions.get('window');

const Fish = () => {
  return (
  <FontAwesome5 name="fish" size={24} color="black" style={styles.fish} />
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