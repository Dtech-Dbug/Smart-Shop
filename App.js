/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import List from './components/cartItems';
import Footer from './components/footer';

const App = () => {
  const totalPrice = (price, qty) => price * qty;
  const [text, setText] = useState([
    {id: 1, title: 'Maggi', qty: 3, price: 12, total: totalPrice(12, 3)},
    {id: 2, title: 'Yippee', qty: 4, price: 14, total: totalPrice(14, 4)},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={text} renderItem={({item}) => <List item={item} />} />
      <Footer />
    </View>
  );
};

//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default App;
