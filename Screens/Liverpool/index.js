import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation, } from "@react-navigation/native"
import styles from "./styles"
import logoLiverpool from "../../assets/liverpool.png"

const Liverpool = ({ }) => {
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoLiverpool} resizeMode= "contain" />
      <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 13 }}>
        Liverpool
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 18 }}>
        Liga dos Campeões - 6
      </Text>
      <Text style={{
        fontWeight: "bold", fontSize: 18, marginTop: 18,
        marginBottom: 10
      }}>
        Campeonato Inglês - 19
      </Text>
      <View style={styles.buttonContainer}></View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => goBack()}>
        <Text style={styles.buttonText} >Voltar</Text>
      </TouchableOpacity>
    </View >
  )
}
export default Liverpool

