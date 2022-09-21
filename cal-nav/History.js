import React from 'react'
import { Text, View, FlatList } from 'react-native'

const History = ({route, navigation}) => {
    /* 2. Get the param */
    const {history} = route.params;

  return (
   <View>
    <Text>Hello</Text>

          <FlatList
              data={history}
              renderItem={
                  ({ item }) =>
                      <Text>{item.key}</Text>
              }

          />
   </View>
  )
}

export default History