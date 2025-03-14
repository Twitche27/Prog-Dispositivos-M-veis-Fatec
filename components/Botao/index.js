import React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

function Botao({ titulo, onPress, corBotao }) {
  return (
    <View style={styles.botaoContainer}>
      <Button title={titulo} onPress={onPress} color = {corBotao} />
    </View>
  );
}

export default Botao;
