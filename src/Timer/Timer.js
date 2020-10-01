import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import UserContext from "../UserContext"


const Timer = () => {
  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const [completedTask, setCompletedTask] = useState(false)
  const [isStopped, setIsStopped] = useState(true)
  const user = useContext(UserContext);
  console.log(user)
  useEffect(() => {
    if (time===0 && !isPaused){
      setIsPaused(true)
      setCompletedTask(true)
    }
    else if (!isPaused) {
      setTimeout(() => {
        const tempTime = time - 1
        setTime(tempTime);
      }, 5)
    }
  }, [isPaused, time])

  function startTimer() {
    setTime(25 * 60);
    setIsPaused(!isPaused);
    setIsStopped(false)
    setCompletedTask(false)
  }
  function stopTimer(){
    setTime(25 * 60);
    setIsPaused(true);
    setIsStopped(true)
    setCompletedTask(false)
  }

  function displayTime (time){
    const tempMinutes = Math.floor(time / 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    const tempSeconds = (time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    return `${tempMinutes}:${tempSeconds}`
  }
  return (
    <View style={styles.timer}>
      <Text style={styles.timerText}>{isStopped? "25:00" : displayTime(time) }</Text>

      {isStopped &&<TouchableOpacity style={styles.buttonBase} onPress={() => { startTimer() }}>
        <Text style={styles.startButton}>Start</Text>
      </TouchableOpacity>}
      
      {!isStopped && <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </TouchableOpacity>}
      {!isStopped && <TouchableOpacity onPress={() => stopTimer()}>Stop</TouchableOpacity>}

      {completedTask && <Text>Task complete!</Text>}
      <Text>{user.fish}</Text>
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