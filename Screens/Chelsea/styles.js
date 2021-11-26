import { StyleSheet, } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(21, 101, 150)",

  },

  image: {
    width: 250,
    height: 250,
    marginTop: 20
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
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
