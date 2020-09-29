import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

let {height, width} = Dimensions.get('window');

const Fish = () => {

  const [fishAnimation, setFishAnimation] = useState(new Animated.Value(0));
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const fishSize = Math.random() * 40 + 20 

  const animateFish = () => {
    Animated.timing(fishAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
    setAnimationStarted(true);
  }

  const random1 = Math.random();
  const random2 = Math.random();

  const preAnimatedFish = {
    position: 'absolute',
    top: random1 * height,
    left: random2 * width
  }

  const fishPosition = {
    position: 'absolute',
    transform: [{
      translateY: fishAnimation * 100
    }]
  }

  useEffect(() => {
    setTimeout(() => {
      animateFish();
    }, 1000)
  }, [])

  return (
    <Animated.View style={animationStarted ? fishPosition : preAnimatedFish}>
      <FontAwesome5 name="fish" size={fishSize} color="black" />
    </Animated.View>
  );
}; 


const styles = StyleSheet.create({
    fish: {
        position:"absolute", 
        top: Math.random() * height, 
        left: Math.random() * width
    }
  });

export default Fish;