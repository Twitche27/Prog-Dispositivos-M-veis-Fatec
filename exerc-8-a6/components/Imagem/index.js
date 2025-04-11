import { View, Image } from 'react-native';
import styles from './styles';

function Foto(props) {
  return (
    <View>
      <Image
        source={{uri: props.img}}
        style={styles.image}
      />
    </View>
  );
}

export default Foto;
