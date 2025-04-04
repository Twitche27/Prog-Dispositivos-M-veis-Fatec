import {ScrollView} from 'react-native';
import NumeroAleatorio from './pages/AlcoolGasolina';

export default function App() {
  return (
    <ScrollView style={{flex : 1}}>
      <NumeroAleatorio />
    </ScrollView>
  );
}
