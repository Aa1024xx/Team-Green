import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import UserContext from "../UserContext"
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const Timer = () => {
  const user = useContext(UserContext);
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [completedTask, setCompletedTask] = useState(false);
  const [isStopped, setIsStopped] = useState(true);

  const timerDuration = 60 * 25; 

  useEffect(() => {
    if (time===0 && !isPaused){
      setIsPaused(true);
      setCompletedTask(true);
    }
    else if (!isPaused) {
      setTimeout(() => {
        const tempTime = time - 1;
        setTime(tempTime);
      }, 1000)
    }
  }, [time, isPaused]);

  function startTimer() {
    setTime(timerDuration);
    setIsPaused(!isPaused);
    setIsStopped(false);
    setCompletedTask(false);
  }

  function stopTimer(){
    setTime(timerDuration);
    setIsPaused(true);
    setIsStopped(true);
    setCompletedTask(false);
  }

  const displayTime = (time) => {
    const tempMinutes = Math.floor(time / 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    const tempSeconds = (time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    return `${tempMinutes}:${tempSeconds}`;
  }

  return (
    <View style={styles.timer}>
       <CountdownCircleTimer
        key={isStopped || time=== 0}
        isPlaying={!isPaused}
        duration={timerDuration}
        colors={[
        ['#004777', 0.33],
        ['#9966FF', 0.33],
        ['#0066FF', 0.33],
        ]}
        size={300}
        >
          <Text style={styles.timerText}>{isStopped ? "25:00" : displayTime(time) }</Text>
      </CountdownCircleTimer>

      {isStopped &&
      <TouchableOpacity style={styles.buttonBase} onPress={() => { startTimer() }}>
        <Text>Start</Text>
      </TouchableOpacity>}
      
      {!isStopped && !completedTask && 
      <TouchableOpacity style={styles.buttonBase} onPress={() => setIsPaused(!isPaused)}>
        <Text>{isPaused ? "Resume" : "Pause"}</Text>
      </TouchableOpacity>}

      {!isStopped && 
      <TouchableOpacity style={styles.buttonBase} onPress={() => stopTimer()}>
        <Text>Restart</Text>
      </TouchableOpacity>}

      {completedTask && <Text>Task complete! You've got a new fish!</Text>}
    </View>
  );
};

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