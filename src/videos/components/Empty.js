import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Empty (props) { 
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
 }
 const styles = StyleSheet.create({
     container: {
        flex: 1
    },
    text:{
        textAlign: 'center'
    }
 })
 export default Empty;