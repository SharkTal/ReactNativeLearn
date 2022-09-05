import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Design idea: 
//P1: Result, High msg, low msg, Bingo and 000000000000000000000000


//P2:Input, 
//P3:Button, click function to compare with generated random number


export default function App() {

  const [msg, setMsg] = useState({
    highMsg: "Too high, random number  was ",
    lowMsg: "Too low, random number was ",
    bingGo: "You guessed the number in: "
  })

  const [resultMsg, setResultMsg] = useState();

  const [times, setTimes] = useState(0);

  const randomNum = Math.floor(Math.random() * 100) + 1;

  const [inputNum, setInputNum] = useState()

  const guess = () => {
    // times += 1;
    inputNum == randomNum ? setResultMsg(msg.bingGo + times) : inputNum > randomNum ? setResultMsg(msg.highMsg + randomNum) : setResultMsg(msg.lowMsg + randomNum);
    setTimes(times + 1)
    setInputNum('')
  }


  return (
    <View style={styles.container}>
      <View style={styles.msgView}>
        <Text>Welcome to Guess Game gg (:  </Text>
        <Text>{resultMsg}</Text>
      </View>


      {/* input view */}
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a number between 0-100 "
          keyboardType='numeric'
          value={inputNum}
          onChangeText={(text) => setInputNum(parseInt(text))}
        />
      </View>

      {/* Button View */}

      <View>
        <Button
          style={styles.button}
          title="Guess !!!!"
          onPress={guess}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgView: {
    flex: 1 / 4,
    marginBottom: 20
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    marginBottom: 10
  }
});
