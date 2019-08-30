import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SuggestionListLayout(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
    },
    title:{
        color: '#4c4c4c',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8

    }
})
export default SuggestionListLayout;