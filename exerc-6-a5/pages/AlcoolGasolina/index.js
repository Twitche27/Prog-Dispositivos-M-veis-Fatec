import {useState} from 'react';
import {View} from 'react-native';
import InputTexto from '../../components/InputTexto';
import Secao from '../../components/Secao'
import Botao from '../../components/Botao'
import Imagem from '../../components/Imagem'

export default function NumeroAleatorio() {
  const [resultado, setResultado] = useState('')
  const [textoInput1, setTextoInput1] = useState('')

  function pegaTexto(texto, vari) {
    if(texto === '' || /^\d(0)?$/.test(texto)) {
      vari(texto)
    }
    else {
      alert("Digite um caractére válido!")
      vari('')
    }
  }

  function descobrir() {
    if ((textoInput1 != '')) {
      if (textoInput1 == (Math.floor(Math.random() * 11))) {
        setResultado("Acertou!!!")
      }
      else {
        setResultado("Errou!")
      }
    }
    else {
      alert("Digite um valor válido!")
    }
  }

  return (
      <View>
        <Secao titulo="Título" conteudo={"Jogo do Nº Aleatório"}/>
        <Imagem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgqc_XxoN5RSutT-k30l9PAWVs9GEZLFsqA&s"/>
        <InputTexto pegarNome={(texto) => pegaTexto(texto, setTextoInput1)} valor={textoInput1} placeholder="Digite um número"/>
        <Botao titulo="Descobrir" onPress={descobrir}/>
        <Secao titulo="Resultado" conteudo={resultado} />
      </View>
  );
}
