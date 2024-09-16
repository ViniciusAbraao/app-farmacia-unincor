import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoHeader from './components/LogoHeader';
import TextoInicio from './components/TextoInicio';

const App = () => {
  return (
    <View style={styles.container}>
      <LogoHeader />
      <TextoInicio />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Ajuste conforme necessário
    alignItems: 'center', // Ajuste conforme necessário
  },
});

export default App;
