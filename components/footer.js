import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.listText}>Try</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'crimson',
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 45,
  },

  listText: {
    color: 'white',
  },
});

export default Footer;
