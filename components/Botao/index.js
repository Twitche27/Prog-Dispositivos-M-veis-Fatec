import React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

function Botao(props) {
  return (
    <View style={styles.botaoContainer}>
      <Button title={props.titulo} onPress={props.onPress} color = {props.corBotao} />
    </View>
  );
}

export default Botao;
