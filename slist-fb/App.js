import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { ref, push, set, onValue, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { db } from './components/config';

export default function App() {
  // 2 TextInput variables, 1 items array to save items,1 delete text, 1 push button 
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);



  //Save Item to firebase
  const saveItem = () => {

    push(ref(db, '/items'), {
      product: product,
      amount: amount
    }).then(
      //Data saved successfully1
      () => {
        alert('data updated!')
      })
      .then(setProduct(''), setAmount(''))
      .catch((error) => {
        alert(error);
      })
      ;
  }

  // Read data from db
  useEffect(() => {
    const itemRef = ref(db, 'items/');
    onValue(itemRef, (snapshot) => {
      const data = snapshot.val();
      setItems(Object.values(data))
    })
  }, [])

  //delete
  const del = () => {

  };


  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Product"
          onChangeText={(product) => setProduct(product)}
          value={product}
        />
        <TextInput
          style={styles.input}
          placeholder="amount"
          keyboardType='number-pad'
          onChangeText={(amount) => setAmount(amount)}
          value={amount}
        />

        <Button
          title='Save'
          onPress={saveItem}
        />
      </View>

      <FlatList
        style={styles.flatlist}
        data={items}
        renderItem={
          ({ item }) => <View style={{ flexDirection: 'row' }}>
            <Text>{item.product},{item.amount} </Text>
            <Text style={{ color: 'red' }} onPress={del}> bought </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {

    height: 200,
    marginTop: 100,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    width: 200,
    height: 60,
    margin: 5
  },
  flatlist: {
    width: 300,
    backgroundColor: 'silver',
  }
});
