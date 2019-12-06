import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

const HomeScreen = () => {
  const { navigate } = useNavigation()
  
  return (
    <View>
      <Button title={'Redux'} onPress={() => navigate('Redux')} />
      <Button title={'ReduxSauce'} onPress={() => navigate('ReduxSauce')} />
    </View>
  )
}

export default HomeScreen