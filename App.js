/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';

import OrderItem from './src/components/OrderItem';
import OrderScreen from './src/screens/OrderScreen';

import orders from '././assets/data/orders.json';
const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={orders}
        renderItem={({item}) => <OrderItem order={item} />}
      /> */}
      <OrderScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
