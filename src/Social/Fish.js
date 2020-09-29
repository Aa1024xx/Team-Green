import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

let {height, width} = Dimensions.get('window');

const Fish = (props) => {

  const [fishAnimation, setFishAnimation] = useState(new Animated.Value(0));
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const animateFish = () => {
    Animated.timing(fishAnimation, {
      toValue: fishAnimation._value + 1,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      animateFish();
    });
    setAnimationStarted(true);
  }

  const fishPosition = {
    position: 'absolute',
    top: props.random1 * height,
    left: props.random2 * width,
    transform: [{
      translateY: fishAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200]
      })
    },
    {
      translateX: fishAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200]
      })
    }   
  ]
  }

  useEffect(() => {
    setTimeout(() => {
      animateFish();
    }, 1000)
  }, [])

  return (
    <Animated.View style={fishPosition}>
      <FontAwesome5 name="fish" size={props.fishSize} color="black" />
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