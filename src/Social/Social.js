import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Fish from './Fish.js';

const Social = () => {

  const [fishArray, setFishArray] = useState(['', '', '', '', '', '', '', ''])

  const renderFish = () => {
    return (
      fishArray.map()
    );
  }

  return (
    <View style={styles.container}>
      {fishArray.map((fish) => (
        <Fish />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Social;