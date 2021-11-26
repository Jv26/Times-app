import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation, } from "@react-navigation/native"
import styles from "./styles"
import logoChelsea from "../../assets/chelsea.png"

const Chelsea = ({ }) => {
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoChelsea} />
      <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 13 }}>
        Chelsea
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 18 }}>
        Liga dos Campeões - 2
      </Text>
      <Text style={{
        fontWeight: "bold", fontSize: 18, marginTop: 18,
        marginBottom: 10
      }}>
        Campeonato Inglês - 6
      </Text>
      <View style={styles.buttonContainer}></View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => goBack()}>
        <Text style={styles.buttonText} >Voltar</Text>
      </TouchableOpacity>
    </View >
  )
}


export default Chelsea
