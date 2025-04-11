import {View, Text} from 'react-native';
import styles from './styles';
import Secao from '../Secao'

function SecaoFull(props) {
  return (
    <View>
      <Secao conteudo={props.cargo} estilo={{fontSize: 25, color: "#3750c7"}}/>
      <Secao conteudo={props.salario}/>
      <Secao conteudo={props.descricao}/>
      <Secao conteudo={props.contato}/>
    </View>
  );
}

export default SecaoFull;
