import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import CategoriesLayout from '../components/CategoriesLayout'
import Empty from '../components/Empty';
import HorizonatalSeparator from '../components/horizontal-separator';
import { connect } from 'react-redux';
import Category from '../components/category';


function mapStateToprops(state){
    debugger
}

 class CategoriesList extends Component{

    renderEmtpy = () => <Empty title="No hay elementos en la lista" />
    itemseparator = () => <HorizonatalSeparator color='#E8E8E8'/>
    renderItems = ({item}) => (
        <Category {...item}/>
    );
    keyStractor = (item) => item.id.toString();
    
    render(){

        return(
            <CategoriesLayout  title='Categories'>
                <FlatList 
                    horizontal={true}
                    keyExtractor={this.keyStractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.itemseparator}
                    renderItem={ this.renderItems }
                />
            </CategoriesLayout>
        )
    }
}
export default connect(mapStateToprops)( CategoriesList );