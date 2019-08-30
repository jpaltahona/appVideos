import React from 'react';
import { Text, View, StyleSheet , Image } from 'react-native';

function Sugestion (props){
    return(
        <View style={styles.container}>
             <View style={styles.left}>
                <Image  
                    style={styles.cover}
                    source={{
                        uri: props.medium_cover_image
                    }}
                />
                <View style={styles.genre}>
                    <Text style={styles.genreTitle}>{props.genres[0]}</Text>
                </View>
            </View>

            <View style={styles.right}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
                <Text style={styles.rating}>{props.rating}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    genre:{
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#ff000078',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    genreTitle:{
        color: 'white'
    },
    cover: {
        height: 130,
        width: 100,
        resizeMode: 'cover'
    },
    left: {},
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        padding: 4,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        textAlign: 'center',
        alignSelf: 'flex-start'
    },
    rating: {
        fontSize: 14,
        fontWeight: '300',
        color: '#6b6b6b'
    }
})
export default Sugestion;