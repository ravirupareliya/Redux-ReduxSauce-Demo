import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addToList, deleteFromList, updateList } from '../Actions.js/ReduxActions';
import { FlatList } from 'react-native-gesture-handler';
import { Creators } from '../Reducers/ReduxSauceReducer';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.task}</Text>
      <View style={styles.updateDeleteView}>
        <Text onPress={() => dispatch(Creators.update(item))}>Update</Text>
        <Text onPress={() => dispatch(Creators.delete(item))}>Delete</Text>
      </View>
    </View>
  )
}

const ReduxSauceComponent = () => {
  const { todo } = useSelector(state => state.reduxSauce)
  const dispatch = useDispatch();
  return (
    <View>
      <Text>ReduxSauceComponent</Text>
      <Button title="Add" onPress={() => dispatch(Creators.add())} />
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

export default ReduxSauceComponent