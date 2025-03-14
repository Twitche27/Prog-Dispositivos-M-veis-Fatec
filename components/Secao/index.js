import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

function Secao({conteudo}) {
  return (
    
    <View style={styles.secaoContainer}>
        <Text style={styles.numero}>{conteudo}</Text>
    </View>
  );
}

export default Secao;
