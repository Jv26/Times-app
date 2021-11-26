import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation, } from "@react-navigation/native"
import styles from "./styles"
import logoCity from "../../assets/city.png"

const City = ({ }) => {
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoCity} />
      <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 13 }}>
        Maschester City
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 18 }}>
        Liga dos Campeões - 0
      </Text>
      <Text style={{
        fontWeight: "bold", fontSize: 18, marginTop: 18,
        marginBottom: 10
      }}>
        Campeonato Inglês - 7
      </Text >
      <View style={styles.buttonContainer}></View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => goBack()}>
        <Text style={styles.buttonText} >Voltar</Text>
      </TouchableOpacity>
    </View >
  )
}
export default City

