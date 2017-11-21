import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

import styles from 'eGuia/src/styles/Styles';
import MenuApp from './MenuApp';

export default class MenuTopo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.menu_topo}>
                <TouchableOpacity
                    onPress={this.props.funcao}>
                    <Icon name={this.props.icone}
                        type='font-awesome'
                        color='white'
                        style={styles.icone}/>
                </TouchableOpacity>
                <Text style={styles.menu_topo_titulo}>{this.props.titulo}</Text>
                <MenuApp />
            </View>
        );
    }
}
