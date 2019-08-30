import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

function CategoriesLayout(props){
    return(
        <ImageBackground source={require('../../../assets/backgronund.png')}
        style={styles.container} >
           
        <Text style={styles.title}>
            {props.title}
        </Text>
        {props.children}
        </ImageBackground>
       
    )
}
const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
    },
    title:{
        color: '#4c4c4c',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default CategoriesLayout;