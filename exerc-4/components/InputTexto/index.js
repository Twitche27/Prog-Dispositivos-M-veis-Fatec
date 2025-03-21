import {View, TextInput} from 'react-native';
import styles from './styles'

export default function InputTexto(props){
  return (
    <View>
      <TextInput value={props.valor} onChangeText={props.pegarNome} placeholder={props.placeholder} style={styles.input}/>
    </View>
  )
}