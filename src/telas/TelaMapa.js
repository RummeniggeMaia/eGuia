import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import MapView from 'react-native-maps';

export default class TelaMapa extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let empresa =  this.props.empresa;;
        let coords = {
            latitude: parseFloat(empresa.coords[0]),
            longitude: parseFloat(empresa.coords[1]),
            latitudeDelta: 0.000922,
            longitudeDelta: 0.000421,
        }
        return(
            <View style={{flex: 1}}>
                <MapView
                    style={{position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                    }}
                    initialRegion={coords}
                    showsUserLocation={true}
                    onMapReady = {() => this.refs.marca.showCallout()}>
                        <MapView.Marker
                            ref="marca"
                            coordinate={coords}
                            title={empresa.nome}
                            description={empresa.descricao}/>
                </MapView>
            </View>
        );
    }
}
