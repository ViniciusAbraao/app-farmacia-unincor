import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import LogoHeader from '../assets/images/logo-unincor.png';

const logoHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={LogoHeader}
        style={styles.LogoHeader}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'flex-start', // Posiciona no topo
    width: '100%', // Ocupa a largura total da tela
    height: 130 // Defina uma altura para o header, ajuste conforme necessário
  },
  LogoHeader: {
    width: 300, // Defina a largura da imagem
    height: 300, // Defina a altura da imagem
  }
});

export default logoHeader;
