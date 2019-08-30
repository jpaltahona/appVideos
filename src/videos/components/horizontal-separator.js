import React from 'react';
import { View, StyleSheet  } from 'react-native';

function HorizonatalSeparator (props) { 
    return(
        <View style={[
            styles.separator,
            {borderTopColor: (props.color) ? props.color : '#eaeaea'  }
        ]}>
        </View>
    )
 }
const styles = StyleSheet.create({
    separator: {
        marginHorizontal: 5
    }
})
 export default HorizonatalSeparator;