import React, { useContext } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UserContext from '../UserContext';

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text> {user.name} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Profile;