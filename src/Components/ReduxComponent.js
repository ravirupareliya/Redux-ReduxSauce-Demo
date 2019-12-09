import React from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addToList, deleteFromList, updateList } from '../Actions.js/ReduxActions';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.task}</Text>
      <View style={styles.updateDeleteView}>
        <Text onPress={() => dispatch(updateList(item))}>Update</Text>
        <Text onPress={() => dispatch(deleteFromList(item))}>Delete</Text>
      </View>
    </View>
  )
}

const ReduxComponent = () => {
  const { todo } = useSelector(state => state.redux)
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="Add" onPress={() => dispatch(addToList)} />
      <FlatList data={todo}
        extraData={this.props}
        renderItem={({ item }) => <ListItem item={item} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listText: {
    flex: 0.6,
  },
  updateDeleteView: {
    flexDirection: 'row',
    flex: 0.4,
    justifyContent: 'space-around'
  }
})

export default ReduxComponent