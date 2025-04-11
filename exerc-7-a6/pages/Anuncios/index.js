import {ScrollView, View} from 'react-native';
import styles from './styles'
import SecaoFull from '../../components/SecaoFull'
import Secao from '../../components/Secao'

export default function Anuncios() {
  
  return (
    <View>
      <Secao conteudo="Anúncios"/>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <SecaoFull imagem="https://cdn.awsli.com.br/2500x2500/502/502061/produto/18364412/8aaa8433f9.jpg" descricao="Um belo cacho de bananas"/>
        <SecaoFull imagem="https://www.naturaldaterra.com.br/_next/image?url=https%3A%2F%2Fnaturalterra.vtexassets.com%2Farquivos%2Fids%2F170668%2FMaca-Red-Unidade.jpg%3Fv%3D638671094705070000&w=1440&q=75" descricao="Uma bela maça"/>
        <SecaoFull imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqquqrn9JLnm84omZ5XVWIHjtR6_9XCa25Kg&s" descricao="Um belo cacho de uvas"/>
      </ScrollView>
    </View> 
  )
}