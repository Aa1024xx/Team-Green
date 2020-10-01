import React, { useState, useContext } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import Fish from './Fish.js';
import UserContext from "../UserContext"


const Social = () => {
  const user = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState(user.name);
  const [fishArray, setFishArray] = useState(new Array(user.fish).fill(0));

  function changeFishTank(itemValue) {
    setSelectedValue(itemValue);
    setFishArray(new Array(10).fill(0));
  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropdown}
        onValueChange={(itemValue) => changeFishTank(itemValue)}
      >
        {user.friends.map((friend, index) => (
          <Picker.Item key={index} label={friend} value={friend} />
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
  const fishSize = Math.random() * 40 + 20;

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
  dropdown: {
    height: 50, width: 150, position: "absolute",
    top: 0, alignItems: "center"
  },
});

export default Social;