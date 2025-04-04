import {useState} from 'react';
import {View} from 'react-native';
import InputTexto from '../../components/InputTexto';
import Secao from '../../components/Secao'
import Botao from '../../components/Botao'
import Imagem from '../../components/Imagem'

export default function IMC() {
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
      const imc = (textoInput1 / (textoInput2*textoInput2))
      if (imc < 18.5) {
        setResultado("Abaixo do Peso")
      }
      else if (imc >= 18.5 && imc < 25){
        setResultado("Peso Normal")
      }
      else if (imc >= 25 && imc < 30){
        setResultado("Sobrepeso")
      }
      else if (imc >= 30 && imc < 35){
        setResultado("Obesidade Grau I")
      }
      else if (imc >= 35 && imc < 40){
        setResultado("Obesidade Grau II")
      }
      else if (imc >= 40){
        setResultado("Obesidade Grau III ou Morbida")
      }
    }
    else {
      alert("Digite um valor válido!")
    }
  }

  return (
      <View>
        <Secao titulo="Título" conteudo={"Cálculo do IMC"}/>
        <Imagem img="https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk"/>
        <InputTexto pegarNome={(texto) => pegaTexto(texto, setTextoInput1)} valor={textoInput1} placeholder="Peso"/>
        <InputTexto pegarNome={(texto) => pegaTexto(texto, setTextoInput2)} valor={textoInput2} placeholder="Altura"/>
        <Botao titulo="Verificar" onPress={verificar}/>
        <Secao titulo="Classificação" conteudo={resultado} />
      </View>
  );
}
