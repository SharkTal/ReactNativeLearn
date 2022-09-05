import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
/* SBL: 1. input- var: item , item array- cart
         2, functions - add, clear;
         3. display */

export default function App() {
  const [text, setText] = useState('');
  const [cart, setCart] = useState([]);

  const add = () => {
    setCart([...cart, { key: text }]);
    setText('');
  }

  const clear = () => {
    setCart([]);
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button
        style={styles.button}
        onPress={add}
        title="Add"
      />
      <Button
        style={styles.button}
        onPress={clear}
        title="Clear"
      />


      <FlatList
        style={styles.list}
        data={cart}
        renderItem={
          ({ item }) => <Text> {item.key} </Text>
        }
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
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
