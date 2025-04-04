import {ScrollView} from 'react-native';
import NumeroAleatorio from './pages/NumeroAleatorio';

export default function App() {
  return (
    <ScrollView style={{flex : 1}}>
      <NumeroAleatorio />
    </ScrollView>
  );
}
