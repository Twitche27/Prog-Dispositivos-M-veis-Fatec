import {ScrollView, View} from 'react-native';
import styles from './styles'
import SecaoFull from '../../components/SecaoFull'
import Secao from '../../components/Secao'

export default function VagasTI() {
  
  return (
    <View style={styles.scrollView}>
      <Secao conteudo="Vagas" estilo={{textAlign: 'center', fontSize: 30}}/>
      <ScrollView>
        <SecaoFull cargo="Cargo: Analista de Dados" salario="Salário: R$ 6.500,00" descricao="Descrição: Responsável por coletar, organizar e analisar grandes volumes de dados para auxiliar nas decisões estratégicas da empresa." contato="Contato: rh@empresaexemplo.com"/>
        <SecaoFull cargo="Cargo: Desenvolvedor Backend" salario="Salário: R$ 7.800,00" descricao="Descrição: Desenvolve e mantém a lógica do servidor, bancos de dados e APIs para garantir o funcionamento eficaz das aplicações web e mobile." contato="Contato: vagas@techcorp.dev"/>
        <SecaoFull cargo="Cargo: QA Tester" salario="Salário: R$ 5.200,00" descricao="Testa aplicações web e mobile, criando planos de testes e reportando bugs." contato="qa@empresa.com"/>
      </ScrollView>
    </View> 
  )
}