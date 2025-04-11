import { View, Text, Picker } from 'react-native';
import styles from './styles';

export default function PickerComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <Picker
        selectedValue={props.step[props.campo]}
        onValueChange={(itemValue) =>
          props.setStep({ ...props.step, [props.campo]: itemValue })
        }
      >
        {props.opcoes.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}
