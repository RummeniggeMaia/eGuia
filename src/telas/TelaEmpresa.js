import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';
import styles from 'eGuia/src/styles/Styles';

export default class TelaEmpresa extends React.Component {

    constructor(props) {
        super(props);
    }

    gerarView(icone, texto, cor='blue') {
        return(
            <View style={styles.container}>
                <Icon name={icone}
                        type='font-awesome'
                        color={cor}
                        style={{marginRight: 10}}
                        size={36}/>
                <Text>
                    <Text style={{fontSize:16}}>{texto}</Text>
                </Text>
            </View>
        );
    }

    render() {
        let empresa = this.props.empresa;
        let viewEndereco, viewTelefone, viewEmails, viewFuncionamento,
            viewOrganizacao, viewEntrega = null;
        if (empresa.endereco != '') {
            viewEndereco = this.gerarView(
                'map-marker',
                empresa.endereco);
        }
        if (empresa.telefones.length > 0) {
            let telefones = '';
            let i = 0;
            for (; i < empresa.telefones.length - 1; i++) {
                telefones += empresa.telefones[i] + '\n';
            }
            telefones += empresa.telefones[i];
            viewTelefone = this.gerarView('phone', telefones);
        }
        if (empresa.emails.length > 0) {
            let emails = '';
            let i = 0;
            for (; i < empresa.emails.length - 1; i++) {
                emails += empresa.emails[i] + '\n';
            }
            emails += empresa.emails[i];
            viewEmails = this.gerarView('at', emails);
        }
        if (empresa.funcionamento != '') {
            viewFuncionamento = this.gerarView('gear', empresa.funcionamento);
        }
        if (empresa.organizacao != '') {
            viewOrganizacao = this.gerarView('users', empresa.organizacao);
        }
        if (empresa.entrega != '') {
            viewEntrega = this.gerarView('exchange', empresa.entrega);
        }
        return(
            <ScrollView>
                <View  style={{backgroundColor: 'white', padding: 10}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>{empresa.nome}</Text>
                    <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                        <Image resizeMode='center' source={empresa.logo}/>
                    </View>
                    <Text style={{fontSize: 18}}>{empresa.descricao}</Text>
                </View>
                { viewEndereco }
                { viewTelefone }
                { viewEmails }
                { viewFuncionamento }
                { viewOrganizacao }
                { viewEntrega }
                <TouchableOpacity onPress={() => this.props.mostrarMapa() }>
                    {this.gerarView('map-marker', 'Google Maps', 'red')}
                </TouchableOpacity>
                <View style={styles.container, {height: 50}}></View>
            </ScrollView>
        );
    }
}
