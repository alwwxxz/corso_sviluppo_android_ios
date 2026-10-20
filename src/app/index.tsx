import {Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';


const nomeCorso="Sviluppo App con React Native";
const anno = 2026;

export default function Homescreen(){
  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.titolo}>Hello World</Text>
        <Text style={styles.sottotitolo}> {nomeCorso} - {anno}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    titolo: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#208AEF',
      textAlign: 'center',
      marginTop: 24,
    },
    sottotitolo: {
      fontSize: 16,
      color: '#555555',
      textAlign: 'center',
    }
  });