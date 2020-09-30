import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(0)
  const [pause, setPause] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [completedTask, setCompletedTask] = useState(false)

  useEffect(() => {
    if (time===0 && !pause){
      setPause(true)
      setCompletedTask(true)
    }
    else if (!pause) {
      setTimeout(() => {
        const tempTime = time - 1
        setTime(tempTime);
      }, 50)
    }
  }, [time])

  function startTimer() {
    setTime(2 * 60);
    setPause(!pause);
    setDisabled(true)
  }

  return (
    <View style={styles.timer}>
      {time === 0 && <Text style={styles.timerText}>00:00</Text>}
      {time !== 0 && <Text style={styles.timerText}>{Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</Text>}
      <TouchableOpacity style={styles.buttonBase} disabled={disabled} onPress={() => { startTimer() }}>
        <Text style={styles.startButton}>Start</Text>
      </TouchableOpacity>
      {completedTask && <Text>Task complete!</Text>}
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
  },
  buttonBase : {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#004a99'
}
});




export default Timer;