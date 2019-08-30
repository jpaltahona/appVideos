import React, { Component }from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Home from  './src/screens/containers/home'
import Header from './src/sections/components/Header'; 
import SuggestionList from './src/videos/containers/sugestionsList'
import CategoriesList from './src/videos/containers/categoriesList'
import Api from  './src/utils/api'
import { Audio, Video } from 'expo-av'


class App extends Component{
constructor(){
  super()
  this.state ={
    sugestionsList: [],
    categories: []
  }
}

  async componentDidMount(){
    const movies = await Api.getSuggestion(10);
    const categorias = await Api.getCategory();

    this.setState({
      sugestionsList: movies,
      categories: categorias
    })
  }

  render(){
    return (
      <Home>
        <SafeAreaView>
          <Header>
            <Text>Hello word</Text>
          </Header>
          <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} 
             rate={1.0}
             volume={1.0}
             isMuted={false}
             resizeMode="cover"
             shouldPlay
             style={{ width: '100%' , height: 300 }}
          />
            <CategoriesList list={this.state.categories}/>
            <SuggestionList list={this.state.sugestionsList}/>
        </SafeAreaView>
      </Home>
    );
  }
}
export default App;