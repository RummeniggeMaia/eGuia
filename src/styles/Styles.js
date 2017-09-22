import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
    },
    menu_option: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    form_label: {
        color: 'black',
        fontSize: 12,
    },
    menu_topo: {
        backgroundColor:'blue',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menu_topo_titulo: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 18,
    },
    icone: {
        margin: 10,
    }
});
