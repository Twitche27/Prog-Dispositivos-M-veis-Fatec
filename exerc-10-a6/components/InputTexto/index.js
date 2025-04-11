import { TextInput, View, Text } from 'react-native';
import styles from './styles';

export default function InputTexto(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
}
