import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Smart Shopping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'crimson',
    padding: 15,
    height: 60,
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
  },
});

export default Header;
