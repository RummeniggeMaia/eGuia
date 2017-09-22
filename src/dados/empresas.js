export default class empresas {

    static dados = {
        empresas: [
        	{
        		nome: 'Empresa A - Loja',
        		categoria: 'loja',
        		logo: require('eGuia/src/imagens/logos/a.png'),
        		descricao: 'Compre tudo aqui!',
        		endereco: 'Av. Cel Martiniano, 123. Centro. Caicó-RN. Próximo à Caixa Econômica Federal.',
        		funcionamento: 'Funcionamento de segunda a sexta de 7h às 17h',
        		organizacao: 'Org.: Chico, João e Tereza',
        		entrega: 'Entrega em domicílio',
        		telefones: ['(84) 9 9999-9999', '(84) 3421-1234'],
        		emails: ['empresaa@mail.com'],
        		cartoes: ['master', 'visa', 'hiper'],
                coords: [],
                corDeFundo: 'white',
        	},
            {
        		nome: 'Empresa B - Academia',
        		categoria: 'academia',
        		logo: require('eGuia/src/imagens/logos/b.png'),
        		descricao: 'Empresa B Fitness',
        		endereco: 'Rua. Otavio Lamartine, 999. Centro.',
        		funcionamento: 'Toda a semana de 8h as 22h',
        		organizacao: 'Org.: Personal Trainner',
        		entrega: '',
        		telefones: ['(84) 9 8765-4321', '(84) 1234-3421'],
        		emails: ['empresabacademia@mail.com'],
        		cartoes: ['master', 'visa'],
                coords: [],
                corDeFundo: 'white',
        	},
            {
        		nome: 'Empresa C - Restaurante',
        		categoria: 'restaurante',
        		logo: require('eGuia/src/imagens/logos/c.png'),
        		descricao: 'Venha saborear nossas delícias!',
        		endereco: 'Av. Renato Dantas. Centro',
        		funcionamento: '24/7',
        		organizacao: 'Org.: Seu Antonio',
        		entrega: 'Venda apenas no local',
        		telefones: ['(84) 9 1111-1111', '(84) 2222-2222'],
        		emails: ['empresacrest@mail.com'],
        		cartoes: ['master', 'caixa', 'dci'],
                coords: [],
                corDeFundo: 'white',
        	},
            {
                nome: '',
            	categoria: 'todas',
        		logo: require('eGuia/src/imagens/bloco.png'),
                logoMin: require('eGuia/src/imagens/bloco.png'),
        	},
        ]
    }
}
