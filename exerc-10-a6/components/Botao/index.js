import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function Botao(props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.label}</Text>
      </Pressable>
    </View>
  );
}
