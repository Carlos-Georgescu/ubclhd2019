//how different components work together, no curly braces because we are importing the whole React library
import React from 'react';
//the braces are used when you want to import a small part of a library
import{Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';

//this is a function
const ComponentsScreen = props => {
const name = 'Please choose your website';

    return (
    <View>
        <Text style={styles.textStyle}></Text>
        <Text style = {styles.subHeaderStyle}> {name}</Text>

        { <TouchableOpacity onPress={() => props.navigation.navigate('Text')}>
      <Text style={styles.textStyle}>Wikipedia</Text>
    </TouchableOpacity> }


    </View>
    ); 
};

const styles = StyleSheet.create({
    //this is an object
    textStyle: {
        fontSize: 45,
        marginBottom: 20
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;