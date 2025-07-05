import {StyleSheet, Text, useColorScheme, SafeAreaView } from 'react-native';
import { getFontFamily } from './assets/fonts/helper';

function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Text style={{fontSize:70,fontFamily:getFontFamily('Inter','100')}}>Hello world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
