import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';

export default class TelaGuia extends React.Component {

    render() {
        return(
            <View>
                <Button
                    title="Go"
                    onPress={() => this.props.navigation.navigate('Empresa')}/>
                {console.log(this.props.navigation.state.key)}
            </View>
        );
    }
}
