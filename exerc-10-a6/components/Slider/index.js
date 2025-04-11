import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';

export default function SliderComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <Text>R$ {props.step.limite ? props.step.limite.toFixed(2) : '0.00'}</Text>

      <Slider
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={props.step.limite}
        onValueChange={(valor) =>
          props.setStep({ ...props.step, limite: valor })
        }
      />
    </View>
  );
}
