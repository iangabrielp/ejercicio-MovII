import { Button, Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react'

export default function Tarjeta2(props :any) {
    //console.log(props.datos)
const [visible, setvisible] = useState(false)

  return (
    <TouchableOpacity style={styles.container} onPress={ () => setvisible (true)}>
      <Text style={styles.txtNombre}>{props.datos.name.first}{props.datos.name.last}</Text>
      
      <Modal visible={visible} >
        <View style={styles.modal}>
        <Text style={styles.txtNombre}>{props.datos.name.first}{props.datos.name.last}</Text>
        <Image source={{uri:props.datos.images.main}} style={styles.img}/>
        <Button title='CERRAR' onPress={()=> setvisible (false)}/>


        </View>
      </Modal>

      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtNombre:{
        fontSize:30,
        
    },
    container:{
    backgroundColor:'#668af4',
    margin:1
    },
    modal:{
      backgroundColor: '#bfda77',
      flex:1
    },
    img:{
      width:150,
      height:300,
      resizeMode:'contain'
    }
})