import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    BackHandler,
    TextInput
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

import styles from 'eGuia/src/styles/Styles';

import MenuTopo from 'eGuia/src/components/MenuTopo';
import TelaGuia from './TelaGuia';
import TelaEmpresa from './TelaEmpresa';
import TelaMapa from './TelaMapa';

import empresas from 'eGuia/src/dados/empresas.js';

export default class EGuia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filtroEmpresas: '',
            empresaSelecionada: {},
            jsonEmpresas: empresas.dados,
            telaEmpresa: false,
            telaMapa: false,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.resetar();
            return true;
        });
    }

    resetar() {
        this.setState({
            telaEmpresa: false,
            telaMapa: false,
            empresaSelecionada: {}
        });
    }

    mostrarMapa() {
        this.setState({
            telaEmpresa: false,
            telaMapa: true
        });
    }

    render() {
        let iconeEsquerdo, iconeEsquerdoFuncao;
        let telaPrincipal, filtrador;
        if (this.state.telaEmpresa) {
            iconeEsquerdoFuncao = () => this.resetar();
            iconeEsquerdo = 'long-arrow-left';
            telaPrincipal = <TelaEmpresa
                                empresa={this.state.empresaSelecionada}
                                mostrarMapa={() => this.mostrarMapa()} />;
        } else if (this.state.telaMapa) {
            iconeEsquerdoFuncao = () => this.resetar();
            telaPrincipal = <TelaMapa
                                empresa={this.state.empresaSelecionada}/>;
            iconeEsquerdo = 'long-arrow-left';
        } else {
            iconeEsquerdoFuncao = () => this.props.navigation.navigate('DrawerOpen');
            iconeEsquerdo = 'bars';
            let filtradas = [];
            let categoria = this.props.navigation.state.key;
            let i = 0;
            Object.values(this.state.jsonEmpresas.empresas).map((empresa) => {
                if (empresa.nome.toUpperCase().startsWith(
                        this.state.filtroEmpresas.toUpperCase())) {
                    if (categoria == 'todas') {
                        filtradas[i++] = empresa;
                    } else if (empresa.categoria == categoria) {
                        filtradas[i++] = empresa;
                    }
                }
            });
            filtrador = <View>
                <TextInput
                    onChangeText = {
                        (text) => this.setState({filtroEmpresas: text})
                    }
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        margin: 5,
                        borderColor: '#00F5'
                    }}/>
                <Icon name='search'
                    type='font-awesome'
                    color='#00000050'
                    style={{
                        position: 'absolute',
                        top: 15,
                        right: 15}}/>
            </View>;
            telaPrincipal = <TelaGuia empresas={filtradas}
                                selecionarEmpresa={(empresa) => {
                                    if (empresa.nome != '') {
                                        this.setState({empresaSelecionada: empresa});
                                        this.setState({telaEmpresa: true});
                                    }
                                }}/>
        }

        return(
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
                <StatusBar backgroundColor="#000080"/>
                <MenuTopo
                    icone={iconeEsquerdo}
                    titulo='iAchei - Cruzeta/RN'
                    funcao={iconeEsquerdoFuncao}
                    style={{marginBottom: 10}}/>
                {filtrador}
                { telaPrincipal }
            </View>
        );
    }
}
