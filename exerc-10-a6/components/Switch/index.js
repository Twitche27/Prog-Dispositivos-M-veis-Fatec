import { View, Text, Switch } from 'react-native';
import styles from './styles';

export default function SwitchComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
}
