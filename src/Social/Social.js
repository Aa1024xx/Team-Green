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
        style={styles.dropDown}
        onValueChange={(itemValue) => changeFishTank(itemValue)}
        itemStyle={styles.dropDownItem}
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
  dropDown: {
    height: 50, 
    width: '25%', 
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 5
  },
  dropDownItem: {
    alignItems: 'center'
  },
});

export default Social;