import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default function Header(props){
    return(
        <View style={styles.content}>
              <View style={styles.imgCont}>
                    <Image source={require('../../../assets/logo.png')}
                        style={styles.images}
                    />
              </View>
           
            <View style={styles.right}>
                {props.children}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    images:{
        
        width: 100,
        height: 30,
        resizeMode: 'cover'
    },
    content: {
   
        display: 'flex',
        flexDirection: 'row',
    },
    imgCont:{
        paddingLeft: 10,
    },
    right:{
        
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end"
    }
})