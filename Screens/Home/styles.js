import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagens: {
    width: 200,
    height: 200,
    borderRadius: 8,

    resizeMode: "contain"
  },

  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 55
  },

  textContainer: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 5
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonStyle: {
    backgroundColor: "blue",
    width: "134px",
    height: "40px",
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center"

  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },
})

export default styles