import { FlatList, View } from 'react-native';
import styles from './styles';
import SecaoFull from '../../components/SecaoFull';
import Secao from '../../components/Secao';

const vagas = [
  {
    id: '1',
    cargo: 'Cargo: Analista de Dados',
    salario: 'Salário: R$ 6.500,00',
    descricao: 'Descrição: Responsável por coletar, organizar e analisar grandes volumes de dados para auxiliar nas decisões estratégicas da empresa.',
    contato: 'Contato: rh@empresaexemplo.com'
  },
  {
    id: '2',
    cargo: 'Cargo: Desenvolvedor Backend',
    salario: 'Salário: R$ 7.800,00',
    descricao: 'Descrição: Desenvolve e mantém a lógica do servidor, bancos de dados e APIs para garantir o funcionamento eficaz das aplicações web e mobile.',
    contato: 'Contato: vagas@techcorp.dev'
  },
  {
    id: '3',
    cargo: 'Cargo: QA Tester',
    salario: 'Salário: R$ 5.200,00',
    descricao: 'Descrição: Testa aplicações web e mobile, criando planos de testes e reportando bugs.',
    contato: 'Contato: qa@empresa.com'
  }
];

export default function VagasTI() {
  return (
    <View style={{ flex: 1 }}>
      <Secao conteudo="Vagas" estilo={{ textAlign: 'center', fontSize: 30 }} />
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SecaoFull
            cargo={item.cargo}
            salario={item.salario}
            descricao={item.descricao}
            contato={item.contato}
          />
        )}
      />
    </View>
  );
}
