import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native';
import Menu,{
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';

import {
    Icon,
    FormLabel,
    Divider,
} from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import styles from 'eGuia/src/styles/Styles.js';

export default class MenuApp extends React.Component {

    constructor(props) {
        super(props);
    }

    funcaoMenu(menuItem) {
        if (menuItem == 0) {
            Alert.alert('Desenvolvedores: Rummenigge, Jaedson');
        } else if (menuItem == 1) {
            Alert.alert('Saindo...');
        }
    }

    render() {
        const renderTouchable = () => <TouchableOpacity/>;
        return (
            <Menu style={{width:25}}
                onSelect={(value) => this.funcaoMenu(value)}>
                <MenuTrigger renderTouchable={renderTouchable}>
                    <Icon name='ellipsis-v'
                        type='font-awesome'
                        color='white'/>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption
                            style={styles.menu_option}
                            value={0}
                            renderTouchable={renderTouchable}>

                        <Icon name='question-circle'
                            size={16}
                            type='font-awesome'
                            color='#000000'/>
                        <FormLabel labelStyle={styles.form_label}>Sobre</FormLabel>
                    </MenuOption>
                    <MenuOption>
                        <Divider/>
                    </MenuOption>
                    <MenuOption
                            style={styles.menu_option}
                            value={1}
                            renderTouchable={renderTouchable}>
                        <Icon name='sign-out'
                            size={16}
                            type='font-awesome'
                            color='#000000'/>
                        <FormLabel labelStyle={styles.form_label}>Fechar</FormLabel>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        );
    }
};
