import { lazy } from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  habs: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  nameHabs: {
    fontSize: 18,
      marginTop: 5,
      opacity: .6,
      borderWidth: 1,
      borderRightWidth: 0,
      paddingLeft: 5,
      paddingBottom: 5,
      borderColor: 'rgba(0, 0, 0, .8)',
  },
  nivelHabs: {
    fontSize: 18,
    textAlign: "left",
      marginTop: 5,
      borderWidth: 1,
      borderLeftWidth: 0,
      paddingBottom: 5,
      borderColor: 'rgba(0, 0, 0, .5)',

  },
});
