import React from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class TelaGuia extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <FlatList
                    key="empresas"
                    data={this.props.empresas}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style={{backgroundColor: 'white', alignItems: 'center'}}
                                onPress={() => this.props.selecionarEmpresa(item)}>
                                <Image style={{marginTop: 10}}
                                    source={item.logo}/>
                            </TouchableOpacity>
                        );
                    }}/>
            </View>
        );
    }
}
