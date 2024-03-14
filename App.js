import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Title from './Title/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fabiano Henrique Sassi Gonçalves</Text>
      <Text>Helena Maria da Silva Costa</Text>
      <Text>07 de março de 2024</Text>
      <Title/>
      <Button title='Salvar'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
