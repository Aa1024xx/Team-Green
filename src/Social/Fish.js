import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated, Easing} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Fish = (props) => {

  const [fishAnimationX, setFishAnimationX] = useState(new Animated.Value(0));
  const [fishAnimationY, setFishAnimationY] = useState(new Animated.Value(0));

  const animateFish = (easing) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fishAnimationX, {
          toValue: 1,
          duration: 5000,
          easing: Easing.inOut(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(fishAnimationX, {
          toValue: 0,
          duration: 5000,
          easing: Easing.inOut(Easing.cubic),
          useNativeDriver: true
        })
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(fishAnimationY, {
          toValue: 1,
          duration: 5000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(fishAnimationY, {
          toValue: 0,
          duration: 5000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true
        })
      ])
    ).start();

  }

  const generateRandomRange = (random, value, margin) => {
    return random * (value - (margin * 2)) + margin;
  }

  const topPosition = generateRandomRange(props.random1, height, 100)
  const leftPosition = generateRandomRange(props.random2, width, 40)

  const getTranslateYValue = (random, margin) => {
    const randomValue = random * (height - (margin * 2)) + margin;
    return randomValue - topPosition;
  }

  const getTranslateXValue = (random, margin) => {
    const randomValue = random * (width - (margin * 2)) + margin;
    return randomValue - leftPosition;
  }

  const fishPosition = {
    position: 'absolute',
    top: generateRandomRange(props.random1, height, 100),
    left: generateRandomRange(props.random2, width, 40),
    transform: [{
      translateY: fishAnimationY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, getTranslateYValue(Math.random(), 100)]
      })
    },
    {
      translateX: fishAnimationX.interpolate({
        inputRange: [0, 1],
        outputRange: [0, getTranslateXValue(Math.random(), 40)]
      })
    }   
  ]
  }

  useEffect(() => {
    const easing = Easing.ease;
    animateFish(easing);
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
    top: Math.random() * ((height - 50) - (height + 50)) + 50, 
    left: Math.random() * ((width - 50) - (width + 50)) + 50
  }
});

export default Fish;