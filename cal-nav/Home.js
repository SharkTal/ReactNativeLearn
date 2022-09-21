import React, { useState } from 'react'
import { Button, TextInput, View , StyleSheet} from 'react-native'

const Home = ({navigation}) => {

    const [numbers, setNumbers] = useState({n1:'', n2:''})

    const handleChange = (name, number) =>{
        setNumbers({
            ...numbers, [name]:number,
        })
    }

    const [history, setHistory] = useState([]);

    const plus = () => {
        var temp = (numbers.n1 + numbers.n2);
       
        setNumbers({ n1: '', n2: '' })
        setHistory([...history, { key: (numbers.n1 + " + " + numbers.n2 + " = " + temp) }])

    }

    const substract = () => {
        var temp = (numbers.n1 - numbers.n2);
       
        setNumbers({ n1: '', n2: '' })
        setHistory([...history, { key: (numbers.n1 + " - " + numbers.n2 + " = " + temp) }])

    }


  return (
   <View style={styles.container}>
        {/* input view */}
        <View>
            <TextInput
            style={styles.input}
            placeholder='Enter a number'
            keyboardType='number-pad'
            value={numbers.n1}
            onChangeText={(text) => handleChange('n1', parseFloat(text))}
            />
              <TextInput
                  style={styles.input}
                  placeholder='Enter a number'
                  keyboardType='number-pad'
                  value={numbers.n2}
                  onChangeText={(text) => handleChange('n2', parseFloat(text))}
              />


        </View>

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
                      onPress={substract}
                  />
              </View>
          </View>


        <Button 
            title='To History'
            onPress={() => navigation.navigate('History', {
                history: history
            }
            )}
            />
   </View>
  )
}

export default Home


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
