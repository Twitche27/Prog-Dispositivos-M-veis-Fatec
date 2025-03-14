import React from 'react';
import { Text, View} from 'react-native';
import styles from './styles';

function Secao(props) {
  return (
    
    <View style={styles.secaoContainer}>
        <Text style={styles.numero}>{props.conteudo}</Text>
    </View>
  );
}

export default Secao;
