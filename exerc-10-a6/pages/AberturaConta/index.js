import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import InputTexto from '../../components/InputTexto';
import PickerComponent from '../../components/Picker';
import SliderComponent from '../../components/Slider';
import SwitchComponent from '../../components/Switch';
import Botao from '../../components/Botao';
import styles from './styles';

export default function AberturaConta() {
  const [step, setStep] = useState({
    nome: '',
    idade: '',
    sexo: '',
    escolaridade: '',
    limite: 0,
    brasileiro: false,
  });

  const [dados, setDados] = useState(null);

  const confirmar = () => {
    if (step.idade.length < 1 || step.idade.length > 3) {
      alert('Idade inválida! Digite de 1 a 3 dígitos.');
      return;
    }
    setDados(step);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputTexto
        label="Nome"
        value={step.nome || ''}
        onChange={(texto) =>
          setStep({ ...step, nome: texto.replace(/[^A-Za-zÀ-ÿ\s]/g, '') })
        }
      />

      <InputTexto
        label="Idade"
        value={step.idade || ''}
        onChange={(texto) =>
          setStep({ ...step, idade: texto.replace(/[^0-9]/g, '') })
        }
      />

      <PickerComponent
        label="Sexo"
        step={step}
        setStep={setStep}
        campo="sexo"
        opcoes={['Masculino', 'Feminino', 'Outro']}
      />

      <PickerComponent
        label="Escolaridade"
        step={step}
        setStep={setStep}
        campo="escolaridade"
        opcoes={[
          'Ensino Fundamental',
          'Ensino Médio',
          'Ensino Superior',
          'Pós-Graduação',
        ]}
      />

      <SliderComponent step={step} setStep={setStep} label="Limite na Conta"/>

      <SwitchComponent
        label="Brasileiro"
        value={step.brasileiro}
        onChange={(valor) => setStep({ ...step, brasileiro: valor })}
      />

      <Botao label="Confirmar" onPress={confirmar} />

      {dados && (
        <View style={styles.resultado}>
          <Text>Nome: {dados.nome}</Text>
          <Text>Idade: {dados.idade}</Text>
          <Text>Sexo: {dados.sexo}</Text>
          <Text>Escolaridade: {dados.escolaridade}</Text>
          <Text>Limite: R$ {dados.limite.toFixed(2)}</Text>
          <Text>Brasileiro: {dados.brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </ScrollView>
  );
}
