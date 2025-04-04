import { Pressable, Text, View } from 'react-native';
import styles from './styles';

function Botao(props) {
  return (
    <View>
      <Pressable style={styles.botao} onPress={() => props.onPress()}>
        <Text style={styles.botaoText}>{props.titulo}</Text>
      </Pressable>
    </View>
  );
}

export default Botao;
