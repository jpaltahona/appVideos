import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/Empty';
import Itemseparator from '../components/Itemseparator';
import Sugestion from '../components/sugestion';

 class CategoriesList extends Component{

    renderEmtpy = () => <Empty title="NO tienes recomendados" />
    itemseparator = () => <Itemseparator color='#E8E8E8'/>
    renderItems = ({item}) => (
        <Sugestion {...item}/>
    );
    keyStractor = (item) => item.id.toString();
    
    render(){

        return(
            <Layout title='Recomendados para ti'>
                <FlatList 
                    keyExtractor={this.keyStractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.itemseparator}
                    renderItem={ this.renderItems }
                />
            </Layout>
        )
    }
}
export default CategoriesList ;