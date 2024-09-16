import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const TextoInicio = () => {
    const [fontsLoaded] = useFonts({
        'Jura': require('../assets/fonts/Jura-Medium.ttf'),
    });
    if(!fontsLoaded){
        return (
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.customFont}>
                Seja bem vindo ao
                aplicativo que irá lhe
                ajudar a achar o ponto
                de descarte mais
                proximo a você!
            {'\n'}
            {'\n'}
                Clique no botão abaixo de locais 
                para acessar
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
        paddingRight: 5,
        paddingLeft: 5
      },
      customFont: {
        fontFamily: 'Jura',
        fontSize: 20,
      },
});

export default TextoInicio;