import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-vector-icons/dist/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.listText}>Try</Text>
      <Icon size={30} color="white" name="remove" />
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
