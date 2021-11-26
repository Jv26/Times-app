import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LogoChelsea from '../../assets/chelsea.png'
import LogoLiverpool from '../../assets/liverpool.png'
import LogoCity from '../../assets/city.png'
import LogoUnited from '../../assets/united.png'
import styles from "./styles"
const Home = ({ }) => {
  const { navigate } = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textContainer} >
        Times
      </Text>

      <TouchableOpacity style={styles.timeContainer} onPress={() => navigate('Chelsea')}>
        <Image source={LogoChelsea} style={styles.imagens} />
        <Text style={styles.textContainer} >Chelsea</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.timeContainer} onPress={() => navigate('Liverpool')}>
        <Image source={LogoLiverpool} style={styles.imagens} />
        <Text style={styles.textContainer} >Liverpool</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.timeContainer} onPress={() => navigate('City')}>
        <Image source={LogoCity} style={styles.imagens} />
        <Text style={styles.textContainer} >City</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.timeContainer} onPress={() => navigate('United')}>
        <Image source={LogoUnited} style={styles.imagens} />
        <Text style={styles.textContainer} >United</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigate('Sobre')}>
          <Text style={styles.buttonText}>Sobre o app</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default Home

