import {useState} from 'react';
import {View} from 'react-native';
import Secao from '../../components/Secao';
import Botao from '../../components/Botao';

function Contador() {
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
      <View>
        <Secao titulo="Título" conteudo={"Contador de Pessoas"}/>
        <Secao titulo="Seção Principal" conteudo={String(valor)}/>
        <Botao titulo="+" onPress={somar} corBotao='green'/>
        <Botao titulo="-" onPress={subtrair} corBotao='red'/>
      </View>
  );
}

export default Contador;
