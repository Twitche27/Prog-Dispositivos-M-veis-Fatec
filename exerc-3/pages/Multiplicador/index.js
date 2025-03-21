import {useState} from 'react';
import {View} from 'react-native';
import InputTexto from '../../components/InputTexto';
import Secao from '../../components/Secao'
import Botao from '../../components/Botao'

export default function Multiplicador() {
  const [resultado, setResultado] = useState(0)
  const [textoInput1, setTextoInput1] = useState('')
  const [textoInput2, setTextoInput2] = useState('')

  function pegaNome(texto, vari) {
    if(texto === '' || /^\d+$/.test(texto)) {
      vari(texto)
    }
    else {
      alert("Digite um número!")
      vari('')
    }
  }

  function multiplicar() {
    if ((textoInput1 != '') && (textoInput2 != '')) {
      setResultado(+textoInput1*+textoInput2);
    }
    else {
      alert("Digite um número!")
    }
    //setResultado(String(textoInput1).repeat(+textoInput2))
  }

  return (
      <View>
        <Secao titulo="Título" conteudo={"Multiplicador de Números"}/>
        <InputTexto pegarNome={(texto) => pegaNome(texto, setTextoInput1)} valor={textoInput1}/>
        <InputTexto pegarNome={(texto) => pegaNome(texto, setTextoInput2)} valor={textoInput2}/>
        <Botao titulo="Multiplicar" onPress={multiplicar}/>
        <Secao titulo="Resultado" conteudo={resultado} />
      </View>
  );
}
