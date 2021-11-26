import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation, } from "@react-navigation/native"
import styles from './styles'

const Sobre = ({ }) => {
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>
        Times app
        Versão 1.0
      </Text>

      <Text style={{ fontWeight: "bold" }}>
        Desenvolvido por:
      </Text>

      <Text style={{ fontWeight: "bold" }}>
        João Victor Martins de Souza
      </Text>

      <View style={styles.buttonContainer}></View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => goBack()}>
        <Text style={styles.buttonText} >Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Sobre
