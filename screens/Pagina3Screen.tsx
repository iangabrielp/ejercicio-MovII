import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina3Screen() {

  const [nombre, setnombre] = useState('')
  const [edad, setedad] = useState(0)

  function usuario (){
    Alert.alert('Mensaje','El nombre del usuario es ' + nombre)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Formulario</Text>
      <TextInput
      style={styles.input}
      placeholder='INGRESAR NOMBRE'
      onChangeText={(texto)=> setnombre(texto)}
      />
      <TextInput
      style={styles.input}
      placeholder='Ingresar edad'
      keyboardType='numeric'
      />
      <Button title='Aceptar' onPress={()=>usuario()}/>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    backgroundColor:'#666',
    fontSize:25,
   height:50,
   width:'85%',
   margin:10

  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})