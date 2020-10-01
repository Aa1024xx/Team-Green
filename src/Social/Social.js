import React, { useReducer, useState, useContext } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import Fish from './Fish.js';
import UserContext from "../UserContext"


const Social = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [fishArray, setFishArray] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''])
  const user = useContext(UserContext);

  function changeFishTank(itemValue) {
    setSelectedValue(itemValue)
    setFishArray(['', '', '', ''])
  }
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50, width: 150, position: "absolute",
          top: 0, alignItems: "center"
        }}
        onValueChange={(itemValue, itemIndex) => changeFishTank(itemValue)}
      >
        {user.friends.map((friend) => (
          <Picker.Item label={friend} value={friend} />
        ))}
      </Picker>

      {fishArray.map((fish, index) => (
        <RenderFish key={index} />
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