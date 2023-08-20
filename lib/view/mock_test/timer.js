import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';

const Timer = ({ duration, onTimeUp }) => {
  const [remainingTime, setRemainingTime] = useState(duration * 60);

  useEffect(() => {
    setRemainingTime(duration * 60);
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  useEffect(() => {
    if (remainingTime <= 0) {
      onTimeUp();
    }
  }, [remainingTime, onTimeUp]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    alignSelf: 'center'
  },
});

export default Timer;