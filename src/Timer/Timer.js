import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(0)
  const [pause, setPause] = useState(true)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (!pause) {
      setTimeout(() => {
        const tempTime = time - 1
        setTime(tempTime);
      }, 1000)
    }
  }, [time])

  function startTimer() {
    setTime(25 * 60);
    setPause(!pause);
    setDisabled(true)
  }

  return (
    <View style={styles.timer}>
      {time === 0 && <Text style={styles.timerText}>00:00</Text>}
      {time !== 0 && <Text style={styles.timerText}>{Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</Text>}
      <TouchableOpacity disabled={disabled} onPress={() => { startTimer() }}>
        <Text style={styles.startButton}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 60
  },
  startButton: {
    fontSize: 38
  }

});




export default Timer;