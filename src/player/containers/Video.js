import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View} from 'react-native';
import { Video } from 'expo-av';
import { Ionicons , MaterialIcons, Octicons } from '@expo/vector-icons';
import VideoLayout from '../components/VideoLayout';

class Videos extends Component{

    render(){
        const { width } = Dimensions.get('window');

        return(
          <VideoLayout vide={
            <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} 
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                useNativeControls
                style={styles.video}
              />
          } />
        )
    }
}

const styles = StyleSheet.create({
      video: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black'
    },
  
  });

  export default Videos;