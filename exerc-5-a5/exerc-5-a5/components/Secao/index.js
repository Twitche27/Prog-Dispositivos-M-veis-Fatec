import { Text, View} from 'react-native';
import styles from './styles';

function Secao(props) {
  return (
    
    <View style={styles.secaoContainer}>
        <Text style={styles.texto}>{props.conteudo}</Text>
    </View>
  );
}

export default Secao;
