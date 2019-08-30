import React from 'react';
import { Text, View, StyleSheet , Image, ImageBackground } from 'react-native';

function Category (props){
    return(

            <ImageBackground 
                source={{
                    uri: props.background_image
                }}
                style={styles.wrapper}
            >
                <Text style={styles.genre}>{props.genres[0]}</Text>
            </ImageBackground>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genre:{
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 10
    },

})
export default Category;