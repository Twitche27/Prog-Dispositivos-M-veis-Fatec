import React, {useState} from 'react';
import { ScrollView, Text } from 'react-native';
import Secao from './components/Secao';
import Botao from './components/Botao';



function App() {
  const [valor, setValor] = useState(0)

  function somar() {
    setValor(valor+1);
  }

  function subtrair() {
    if (valor > 0) {
      setValor(valor-1);
    }
  }

  return (
    <ScrollView style={{flex : 1}}>
      <Secao titulo="Seção Principal" conteudo={String(valor)} />
      <Botao titulo="+" onPress={somar} corBotao='green'/>
      <Botao titulo="-" onPress={subtrair} corBotao='red'/>
    </ScrollView>
  );
}

export default App;
