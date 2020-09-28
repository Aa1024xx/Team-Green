import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Fish from './Fish.js';

const Social = () => {

  const FishArray = ({arr}) => {
    return (
       <View> {arr.map(e => <Fish />)} </View>
    );
  };

  return (
    <View style={styles.container}>
      <FishArray arr={[1, 2]}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default Social;