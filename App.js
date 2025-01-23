import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}> Cidades Brasileiras </Text>
      <ScrollView>
        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Sao Paulo</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>
          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Parque do Ibirapuera</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Pinacoteca</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Museu da Lingua Portuguesa</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Salvador</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>
          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Pelourinho</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Praia da Barra</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Rio de Janeiro</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>

          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Cristo Redentor</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Pão de Açúcar</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Jardim Botânico</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Maceio</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>
          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Praia do Francês</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Lagoa do Mundaú</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>
                {' '}
                Museu Palácio Marechal Floriano Peixoto{' '}
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Ilhabela</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>
          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Praia do Curral</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Cachoeira da Laje</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Parque Estadual de Ilhabela</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Porto de Galinhas</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>
          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Praia de Maracaípe</Text>
            </View>

            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Praia do Cupe</Text>
            </View>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Projeto Hippocampus</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.fundoCidades}>
          <Text style={styles.cidades}>Caraguatatuba</Text>
          <Text style={styles.turisticos}> Pontos Turisticos:</Text>
          <ScrollView horizontal>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Praia de Martim de Sá</Text>
            </View>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Ilha do Cardoso</Text>
            </View>
            <View style={styles.itemTuristicos}>
              <Text style={styles.itens}>Centro Histórico</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cidades: {
    fontSize: 25,
    color: '#F5DEB3',
  },
  fundoCidades: {
    backgroundColor: '#4682B4',
    marginTop: '20',
    borderRadius: 7,
    padding: '10',
  },
  itens: {
    fontSize: 14,
  },
  turisticos: {
    fontSize: 20,
  },
  itemTuristicos: {
    backgroundColor: '#F5DEB3',
    margin: 5,
    padding: 8,
    borderRadius: 8,
  },
});
