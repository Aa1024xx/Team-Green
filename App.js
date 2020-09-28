import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Fish from './Fish';

const FishArray = ({arr}) => {
  return (
     <View> {arr.map(e => <Fish />)} </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <FishArray arr={[1, 2]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
