import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  // 2 variables, the input currency, converted euro amounts
  const [money, setMoney] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState()



  const convert = () => {

  }

  return (
    <View style={styles.container}>
      <Text>You get  € </Text>
      <View style={styles.temp}>

        {/* Enter money amount you want to exchange */}
        <TextInput
          style={styles.input}
          placeholder='Enter your money'
          keyboardType='number-pad'
          value={money}
          onChangeText={(text) => setMoney(parseInt(text))}
        />

        {/* Picker to chose the currency you want to convert */}

        <Picker
          dropdownIconColor='red'
          style={styles.picker}
          selectedValue={selectedCurrency}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCurrency(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

      </View>
      {/* Convert button */}
      <Button
        title='CONVERT'
        onPress={convert}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  temp: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  picker: {
    backgroundColor: 'green',
    width: 100,
    height: 100
  }
});
