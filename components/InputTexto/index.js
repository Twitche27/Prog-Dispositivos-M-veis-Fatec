import {View, TextInput} from 'react-native';
import styles from './styles'

export default function InputTexto(props){
  return (
    <View>
      <TextInput value={props.valor} onChangeText={props.pegarNome} placeholder="Digite um número" style={styles.input}/>
    </View>
  )
}