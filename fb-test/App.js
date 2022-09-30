import { StatusBar } from 'expo-status-bar';
import { push, ref, set, remove } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from './firebase';
export default function App() {
  const [users, setUsers] = useState({ name: '', email: '', phone: '' })

  const handleOnChange = (name, text) => {
    setUsers({ ...users, [name]: text })
  }

  // useEffect(() => {
  //   setUsers({ userId: '1', name: "gao", email: 'gao@gmail.com' })
  // }, [])
  const writeData = () => {

    const referenc = ref(db, 'users/' + users.name)

    push(referenc, {
      name: users.name,
      email: users.email,
      phone: users.phone
    })
  }
  //-----------------------------------------------------------

  const removeData = () => {
    const referenc = ref(db, 'users/' + users.name)
    remove(referenc, {
      name: users.name,
      email: users.email,
      phone: users.phone
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Enter name"
        value={users.name}
        onChangeText={text => handleOnChange('name', text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Email"
        value={users.email}
        onChangeText={text => handleOnChange('email', text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Phone"
        value={users.phone}
        onChangeText={text => handleOnChange('phone', text)}
      />
      <Button title='WriteData' onPress={writeData} />
      <Button title='Remove' onPress={removeData} />
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
  textinput: {
    backgroundColor: 'silver',
    width: 300,
    height: 50,
    marginBottom: 10
  }
});
