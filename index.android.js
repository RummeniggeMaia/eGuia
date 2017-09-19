/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
     Image,
     StatusBar,
     AppRegistry,
     ScrollView,
     Alert
 } from 'react-native';
 import {
    DrawerNavigator, StackNavigator, DrawerItems, NavigationActions
 } from 'react-navigation';
 import { MenuContext } from 'react-native-menu';
 import {
     Icon,
 } from 'react-native-elements';

import MenuApp from './src/comum/MenuApp';
import TelaGuia from './src/telas/TelaGuia';
import TelaEmpresa from './src/telas/TelaEmpresa';

const StackNav = StackNavigator({
    Guia: {
        screen: TelaGuia,
        navigationOptions: ({navigation}) => {
            return {
                title: "eGuia Comercial",
                headerRight: <MenuApp navigation={navigation}/>,
                headerLeft: <Icon name='bars'
                                    type='font-awesome'
                                    color='white'
                                    style={{marginLeft: 10}}
                                    onPress={() => navigation.navigate('DrawerOpen')}/>
            }
        }
    },
    Empresa: {
        screen: TelaEmpresa,
        navigationOptions: ({navigation}) => {
            return {
                title: "Dados da Empresa",
                headerRight: <MenuApp navigation={navigation}/>
            }
        }
    }
}, {
    navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#0000FF'
        },
    }
});

var jsonCategorias = require('eGuia/src/dados/categorias.json');
let listaCategorias = {};
Object.values(jsonCategorias.categorias).map((categoria) => {
    listaCategorias[categoria.tag] = {
        screen: TelaGuia,
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
                <Image source={require('eGuia/src/imagens/logo.jpg')} />
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
