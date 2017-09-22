 import React from 'react';
 import {
     View,
     Text,
     Image,
     StatusBar,
     AppRegistry,
     ScrollView,
     Alert
 } from 'react-native';
 import {
    DrawerNavigator,
    StackNavigator,
    DrawerItems
 } from 'react-navigation';
 import {
     MenuContext
 } from 'react-native-menu';
 import {
     Icon,
 } from 'react-native-elements';

import EGuia from './src/telas/EGuia';

import categorias from './src/dados/categorias';

var jsonCategorias = categorias.dados;
let listaCategorias = {};
Object.values(jsonCategorias.categorias).map((categoria) => {
    listaCategorias[categoria.tag] = {
        screen: EGuia,
        navigationOptions: {
            drawerLabel: categoria.descricao,
            drawerIcon: ({ tintColor }) => (
                <Icon name='users'
                        type='font-awesome'
                        color='blue'/>
            ),
        },
    }
});

const DrawerNav = DrawerNavigator(listaCategorias, {
    contentComponent: (props) => {
        return(
            <ScrollView>
                <View style={{padding: 10, backgroundColor: 'blue'}}>
                    <Image source={require('eGuia/src/imagens/logomarca64.png')} />
                    <View style={{height: 10}}></View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                        eGuia €omercial
                    </Text>
                    <Text style={{fontSize: 12, color: 'white'}}>
                        Cruzeta - RN
                    </Text>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#d3d3d3', marginLeft: 10}}>Categorias</Text>
                <DrawerItems {...props} />
            </ScrollView>
        );
    }
});

const App = () => (
    <MenuContext style={{ flex: 1 }}>
        <DrawerNav/>
    </MenuContext>
);

AppRegistry.registerComponent('eGuia', () => App);
