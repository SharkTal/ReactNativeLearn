import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [reslut, setResult] = useState("");

  const [numbers, setNumbers] = useState({ n1: "", n2: "" });

  const handleChange = (name, number) => {
    setNumbers({
      ...numbers, [name]: number,
    })
  }

  const plus = () => {
    setResult(numbers.n1 + numbers.n2)
  }

  const sbustract = () => {
    setResult(numbers.n1 - numbers.n2)
  }

  return (
    <View style={styles.container}>


      {/* Input View */}
      <View style={styles.inputView}>

        {/* result view */}
        <View>
          <Text> {numbers.n1} , {numbers.n2} </Text>
          <Text>Result:  {reslut} </Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange('n1', parseInt(text))}
          value={numbers.n1}
          placeholder="Enter number"
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange('n2', parseInt(text))}
          value={numbers.n2}
          placeholder="Enter number"
          keyboardType='numeric'
        />
      </View>

      {/* Actions View */}

      <View style={styles.buttonView}>
        <View>
          <Button
            style={styles.button}
            title="+"
            onPress={plus}
          />
        </View>

        <View>
          <Button
            style={styles.button}
            title="-"
            onPress={sbustract}
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    // flex: 2,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    margin: 22,
    borderWidth: 1,
    padding: 10,
  },
  buttonView: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    minWidth: 100,
    marginTop: 100
  },
  button: {

  }
});
