import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation, } from "@react-navigation/native"
import styles from "./styles"
import logoUnited from "../../assets/united.png"

const United = ({ }) => {
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoUnited} />
      <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 13 }}>
        Manchester United
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 18 }}>
        Liga dos Campeões - 3
      </Text>
      <Text style={{
        fontWeight: "bold", fontSize: 18, marginTop: 18,
        marginBottom: 10
      }}>
        Campeonato Inglês - 20
      </Text>
      <View style={styles.buttonContainer}></View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => goBack()}>
        <Text style={styles.buttonText} >Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default United