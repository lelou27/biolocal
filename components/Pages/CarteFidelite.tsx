import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import {Header} from "../Elements/Header/Header";

export default function CarteFideliteScreen() {
  return (
      <>
        <Header showjauge={false}/>
    <View style={styles.container}>
      <Text style={styles.title}>Carte Fidelite</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: { 
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
