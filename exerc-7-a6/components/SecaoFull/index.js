import {View} from 'react-native';
import Secao from '../Secao'
import Imagem from '../Imagem'
import styles from './styles'

export default function SecaoFull(props) {
  return (
      <View style={styles.view}>
        <Imagem img={props.imagem}/>
        <Secao titulo="Descrição" conteudo={props.descricao}/>
      </View>
  );
}
