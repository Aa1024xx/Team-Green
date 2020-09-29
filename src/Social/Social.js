import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Fish from './Fish.js';

const Social = () => {

  const [fishArray, setFishArray] = useState(['', '', '', '', '', '', '', ''])

  const renderFish = () => {

    const random1 = Math.random();
    const random2 = Math.random();

    return (
      <View>
        {fishArray.map((fish) => (
          <Fish  random1={random1} random2={random2} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {fishArray.map((fish) => (
        <RenderFish />
      ))}
    </View>
  );
}

const RenderFish = () => {

  const random1 = Math.random();
  const random2 = Math.random();
  const fishSize = Math.random() * 40 + 20 

  return (
    <Fish random1={random1} random2={random2} fishSize={fishSize} />
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