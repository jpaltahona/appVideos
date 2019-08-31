import React, { Component }from 'react';
import { StyleSheet, Text, SafeAreaView , Dimensions, View} from 'react-native';
import Home from  './src/screens/containers/home'
import Header from './src/sections/components/Header'; 
import SuggestionList from './src/videos/containers/sugestionsList'
import CategoriesList from './src/videos/containers/categoriesList'
import Api from  './src/utils/api'
import Videos from './src/player/containers/Video';


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
          <Videos />
            <CategoriesList list={this.state.categories}/>
            <SuggestionList list={this.state.sugestionsList}/>
        </SafeAreaView>
      </Home>
    );
  }
}

export default App;