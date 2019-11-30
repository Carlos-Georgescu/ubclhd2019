import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
//import EStyleSheet from 'react-native-extended-stylesheet'


const HomeScreen = props => {
  return <View>
  <Text style={styles.text}>Offline Hub</Text>
  <Button 
    size = "large"
    onPress={() => props.navigation.navigate('Components')}
    title="Search Websites"
    />
  </View>

};

const styles = StyleSheet.create({
  button: {
    width: 600,
    height: 60,
    right: 20,
    bottom: 20,
  },
});

export default HomeScreen;
