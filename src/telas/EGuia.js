import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

import styles from 'eGuia/src/styles/Styles';

import MenuTopo from 'eGuia/src/components/MenuTopo';
import TelaGuia from './TelaGuia';
import TelaEmpresa from './TelaEmpresa';

import empresas from 'eGuia/src/dados/empresas.js';

export default class EGuia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empresaSelecionada: {},
            telaEmpresa: false,
            jsonEmpresas: empresas.dados,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
             if (this.state.telaEmpresa) {
                 this.resetar();
                 return true;
             }
             return false;
        });
    }

    resetar() {
        this.setState({telaEmpresa: false});
        this.setState({empresaSelecionada: {}});
    }

    render() {
        let iconeEsquerdo, iconeEsquerdoFuncao;
        let telaPrincipal;
        if (this.state.telaEmpresa) {
            iconeEsquerdoFuncao = () => this.resetar();
            iconeEsquerdo = 'long-arrow-left';
            telaPrincipal = <TelaEmpresa empresa={this.state.empresaSelecionada}/>;
        } else {
            iconeEsquerdoFuncao = () => this.props.navigation.navigate('DrawerOpen');
            iconeEsquerdo = 'bars';
            let filtradas = [];
            let categoria = this.props.navigation.state.key;
            let i = 0;
            Object.values(this.state.jsonEmpresas.empresas).map((empresa) => {
                if (categoria == 'todas') {
                    filtradas[i++] = empresa;
                } else if (empresa.categoria == categoria) {
                    filtradas[i++] = empresa;
                }
            });
            telaPrincipal = <TelaGuia empresas={filtradas}
                                    selecionarEmpresa={(empresa) => {
                                        if (empresa.nome != '') {
                                            this.setState({empresaSelecionada: empresa});
                                            this.setState({telaEmpresa: true});
                                        }
                                    }}/>
        }

        return(
            <View>
                <StatusBar backgroundColor="#000080"/>
                <MenuTopo
                    icone={iconeEsquerdo}
                    titulo='eGuia €omercial - Cruzeta/RN'
                    funcao={iconeEsquerdoFuncao}
                    style={{marginBottom: 10}}/>
                { telaPrincipal }
            </View>
        );
    }
}
