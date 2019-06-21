import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: "" }
    }

    componentDidMount() {
        axios.get('https://libraries.io/api/platforms')
           .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data,
                })
            })
    }

    renderItem(item) {
        const { id, name, color } = item.item;
        return (
            <View style={styles.itemView}>
                <View style={styles.itemInfo}>
                    <Text style={{color: item.item.color,fontSize: 60}} >
                        {name} 
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
               <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
   },
   itemView: {
       flex: 1,
       width,
       borderBottomWidth: 0.5,
       borderColor: '#cdcdcd',
       borderStyle: 'solid',
       paddingHorizontal: 12,
       flexDirection: 'row',
   },
  
   itemInfo: {
       flex: 1,
       marginHorizontal: 10,
   },
   name: {
       fontFamily: 'Verdana',
       fontSize: 60,
    
       textAlign: 'left',
   }
   
});