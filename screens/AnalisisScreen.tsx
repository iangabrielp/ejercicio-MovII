import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function AnalisisScreen() {
  const [numero1, setNumero1] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [esPar1, setEsPar1] = useState<string>('');
  const [esPar2, setEsPar2] = useState<string>('');
  const [esPrimo1, setEsPrimo1] = useState<string>('');
  const [esPrimo2, setEsPrimo2] = useState<string>('');
  const [existeEnArreglo1, setExisteEnArreglo1] = useState<string>('No');
  const [existeEnArreglo2, setExisteEnArreglo2] = useState<string>('No');
  const [operaciones, setOperaciones] = useState({ suma: 0, resta: 0, multiplicacion: 0, division: "Indefinida" });

  const arreglo = [2, -15, 5, 10, -8, 18, -3, 11, -20, 7];

  const esPar = (num: number): string => {
    return num % 2 === 0 ? "Par" : "Impar";
  };

  const esPrimo = (num: number): string => {
    if (num < 2) return "No";
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return "No";
    }
    return "Sí";
  };

  useEffect(() => {
    setEsPar1(esPar(numero1));
    setEsPrimo1(esPrimo(numero1));
    setExisteEnArreglo1(arreglo.includes(numero1) ? "Sí" : "No");

    setEsPar2(esPar(numero2));
    setEsPrimo2(esPrimo(numero2));
    setExisteEnArreglo2(arreglo.includes(numero2) ? "Sí" : "No");

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : "Indefinida";

    setOperaciones({ suma, resta, multiplicacion, division });
  }, [numero1, numero2]);

  function mostrarResultados() {
    Alert.alert(
      "Resultados",
      `Número 1: ${esPar1}, Primo: ${esPrimo1}, Existe en el arreglo: ${existeEnArreglo1}\n` +
      `Número 2: ${esPar2}, Primo: ${esPrimo2}, Existe en el arreglo: ${existeEnArreglo2}\n` +
      `Suma: ${operaciones.suma}, Resta: ${operaciones.resta}, Multiplicación: ${operaciones.multiplicacion}, División: ${operaciones.division}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análisis de Números</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        onChangeText={(texto) => setNumero1(Number(texto))}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        onChangeText={(texto) => setNumero2(Number(texto))}
      />
      <Button title="Analizar" onPress={mostrarResultados} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  input: {
    backgroundColor: '#ddd',
    fontSize: 18,
    height: 50,
    width: '85%',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});