import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Fish from './Fish.js';
import UserContext from "../UserContext"
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';


const Social = () => {
  const user = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState(user.name);
  const [fishArray, setFishArray] = useState(new Array(user.fish).fill(0));

  function changeFishTank(itemValue) {
    setSelectedValue(itemValue);
    if (itemValue === "John"){
      setFishArray(new Array(itemValue.fish).fill(0));
    }
    else{
      setFishArray(new Array(8).fill(0));
    }
  }

  function getFriendsList(friends) {
    let friendArr = [];
    friendArr.push({label: user.name, value: user.name});
    for(let i = 0; i < friends.length; i++){
      friendArr.push({label: friends[i], value: friends[i]});
    }
    return friendArr;
  }

  const pickerStyle = {
    inputIOS: {
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      backgroundColor: 'white',
      top: 0,
      borderRadius: 25,
    },
    viewContainer: {
      backgroundColor: 'red',
      top: '-40%',
      borderRadius: 25,
    },
    inputAndroid: {
      color: 'black',
      backgroundColor: 'white'
    },
    inputWeb: {
      color: 'black',
      backgroundColor: 'white',
      marginTop: '-5%', 
      margin: 'auto',
      width: '50%',
      borderRadius: 25,
    }, 
    underline: { borderTopWidth: 5 },
    icon: {
      backgroundColor: 'grey',
      borderTopWidth: 5,
      borderTopColor: '#00000099',
      borderRightWidth: 5,
      borderRightColor: 'grey',
      borderLeftWidth: 5,
      borderLeftColor: 'grey',
      width: 0,
      height: 0,
      top: -250,
      right: 15,
    },
  };

  return (
    
    <View style={styles.container}>
    <RNPickerSelect 
        style={pickerStyle}
        onValueChange={(itemValue) => changeFishTank(itemValue)}
        items={getFriendsList(user.friends)}
        placeholder={{}}
      />
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
    top: 0, 
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 10
  },
  dropDownItem: {
    alignItems: 'center'
  },
});

export default Social;