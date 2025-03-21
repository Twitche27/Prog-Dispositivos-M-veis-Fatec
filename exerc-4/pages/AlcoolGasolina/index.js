import {useState} from 'react';
import {View} from 'react-native';
import InputTexto from '../../components/InputTexto';
import Secao from '../../components/Secao'
import Botao from '../../components/Botao'
import Imagem from '../../components/Imagem'

export default function AlcoolGasolina() {
  const [resultado, setResultado] = useState('')
  const [textoInput1, setTextoInput1] = useState('')
  const [textoInput2, setTextoInput2] = useState('')

  function pegaTexto(texto, vari) {
    if(texto === '' || /^\d+(\.\d*)?$/.test(texto)) {
      vari(texto)
    }
    else {
      alert("Digite um caractére válido!")
      vari('')
    }
  }

  function verificar() {
    if ((textoInput1 != '') && (textoInput2 != '')) {
      if (textoInput1 / textoInput2 > 0.7) {
        setResultado("Gasolina é melhor")
      }
      else {
        setResultado("Álcool é melhor")
      }
    }
    else {
      alert("Digite um valor válido!")
    }
  }

  return (
      <View>
        <Secao titulo="Título" conteudo={"Álcool ou Gasolina"}/>
        <Imagem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fOzPOtElocIrWvKcOLtwBjfgBoGeUam_KQ&s"/>
        <InputTexto pegarNome={(texto) => pegaTexto(texto, setTextoInput1)} valor={textoInput1} placeholder="Preço do Álcool"/>
        <InputTexto pegarNome={(texto) => pegaTexto(texto, setTextoInput2)} valor={textoInput2} placeholder="Preço da Gasolina"/>
        <Botao titulo="Verificar" onPress={verificar}/>
        <Secao titulo="Resultado" conteudo={resultado} />
      </View>
  );
}
