import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const List = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}> {item.id} </Text>
        <Text style={styles.listItemTextAfterSerialnumber}> {item.title} </Text>
        <Text style={styles.listItemText}> {item.qty} </Text>
        <Text style={styles.listItemText}> {item.price} </Text>
        <Text style={styles.listItemText}> {item.total} </Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'purple',
    borderBottomWidth: 3,
    borderColor: 'white',
    borderBottomWidth: 1,
  },

  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listItemText: {
    color: 'white',
  },
  listItemTextAfterSerialnumber: {
    color: 'yellow',
    marginLeft: -30,
  },
});
export default List;
