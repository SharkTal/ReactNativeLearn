import { StatusBar } from 'expo-status-bar';
import { push, ref, set, remove, update, get, child } from 'firebase/database';
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
  const retrieveData = () => {
    const reference = ref(db);
    get(child(reference, "users/" + users.name)).then((snapshot) => {
      if (snapshot.exists()) {
        setUsers({ name: snapshot.val().name, email: snapshot.val().email, phone: snapshot.val().phone })
        alert("Data found")
      } else {
        alert('No data found')
      }
    })
      .catch((error) => {
        alert("Unsuccessful, error " + error)
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

  //-----------------------------------------------------------
  const updateData = () => {
    const referenc = ref(db, 'users/' + users.name)
    update(referenc, {
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
      <View style={styles.buttonView}>
        <Button style={styles.button} title='WriteData' onPress={writeData} />
        <Button style={styles.button} title='Retrieve' onPress={retrieveData} />

        <Button style={styles.button} title='update' onPress={updateData} />
        <Button style={styles.button} title='Remove' onPress={removeData} />
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
  textinput: {
    backgroundColor: 'silver',
    width: 300,
    height: 50,
    marginBottom: 10
  },
  buttonView: {
    flexDirection: 'row'
  },
  button: {

  }
});
