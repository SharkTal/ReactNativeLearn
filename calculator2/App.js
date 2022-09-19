import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

// Design: 4 parts
//P1: result view,          var result
//P2: Input, 2 InputText     var:n1, n2
//P3: 2 buttons, plus and substract 
//P4: history, 
export default function App() {

  const [result, setResult] = useState(0);

  const [numbers, setNumbers] = useState({ n1: '', n2: '' });

  const handleChnage = (name, number) => {
    setNumbers({
      ...numbers, [name]: number,
    })
  }


  const [history, setHistory] = useState([]);


  const plus = () => {
    var temp = numbers.n1 + numbers.n2;
    setResult(numbers.n1 + numbers.n2)
    setNumbers({ n1: '', n2: '' })
    setHistory([...history, { key: (numbers.n1 + " + " + numbers.n2 + " = " + temp) }])

  }

  const sbustract = () => {
    var temp = numbers.n1 - numbers.n2;
    setResult(numbers.n1 - numbers.n2)
    setNumbers({ n1: '', n2: '' })
    setHistory([...history, { key: (numbers.n1 + " - " + numbers.n2 + " = " + temp) }])

  }




  return (
    <View style={styles.container}>
      {/* Result show here */}
      <Text>Here is the Result: {result} </Text>

      {/* P2 */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter a number"
          keyboardType='number-pad'
          value={numbers.n1}
          onChangeText={(text) => handleChnage('n1', parseFloat(text))}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter a number"
          keyboardType='number-pad'
          value={numbers.n1}
          onChangeText={(text) => handleChnage('n2', parseFloat(text))}
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

      {/* History */}
      <View style={styles.history}>


        <FlatList
          data={history}
          renderItem={
            ({ item }) =>
              <Text>{item.key}</Text>
          }

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
    marginTop: 5
  },
  history: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: -50,
    backgroundColor: 'grey',
    minWidth: 300
  }
});
