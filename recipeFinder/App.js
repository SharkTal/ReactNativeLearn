import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { API_URL, API_TOKEN } from '@env';
import { useState } from 'react';

export default function App() {
  const [keyword, setKeyword] = useState("")
  const [recipes, setRecipes] = useState([]);
  const getRecipes = () => {
    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + keyword)
      .then((response) => response.json())
      .then((json) => {
        return setRecipes(json.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>

      {/* Recipe display view */}
      <View style={styles.display}>
        <Text>Cook Lovers, welcome to recipe world!</Text>
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text>{item.strMeal} </Text>
          )}
        />
      </View>
      {/* input  */}
      <View style={styles.under}>
        <TextInput
          style={styles.input}
          placeholder="Enter a keyword"
          value={keyword}
          onChangeText={text => setKeyword(text)}
        />

        {/*Find Button */}
        <Button
          title='Find'
          backgroundColor='red'
          onPress={getRecipes}
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
  display: {
    flex: 6,
    paddingTop: 40,
    backgroundColor: 'silver',
    width: 400
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 1
  }
});
