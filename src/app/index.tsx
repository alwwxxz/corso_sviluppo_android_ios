import {Text, StyleSheet, ScrollView, SafeAreaView, Platform, View} from 'react-native';


const nomeCorso="Sviluppo App con React Native";
const anno = 2026;

const sistemaOperativo = Platform.OS === 'ios' ? 'iOS' : Platform.OS === 'android' ? 'Android' : 'Web';

const argomenti = [
    {id:1, titolo: 'Javascript moderno', completato: true},
    {id:1, titolo: 'Componenti e stato', completato: false},
    {id:1, titolo: 'Layout con flexbox', completato: false},
    {id:1, titolo: 'Navigazione tra schermate', completato: false},
  ]
    

export default function Homescreen(){
  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.titolo}>Hello World</Text>
        <Text style={styles.sottotitolo}> {nomeCorso} - {anno}</Text>
        <View style={styles.riquadro}>
          <Text style={styles.testo}> App in esecuzione su: {sistemaOperativo} </Text>
        </View>

        <Text>Programma del corso: </Text>

        {argomenti.map( (argomento) =>  (
          <Text key={argomento.id}>
            {argomento.titolo} 
            {argomento.completato ? '✅' : '❌'}
          </Text>
          )
        )}


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
    },
    testo: {
      fontSize: 16,
      color: '#222222'
    },
    riquadro:{
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 16,
      gap: 4,
      marginVertical: 12,
      borderColor: '#222222',
      borderWidth: 1,
    }

  });