import { StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    containerSwipe: {
      backgroundColor: "transparent",
    },
    card: {
      backgroundColor: "transparent",
    },
    cardItem: {
      width: "100%",
      height: 600,
      borderRadius: 24,
      overflow: "hidden",
    },

    cardGradient: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    imageWrap: {
      borderRadius: 24,
    },
    title: {
      paddingHorizontal: 6,
      paddingTop: 4,
      paddingBottom: 6,
    },
    circleTextWrap: {
      justifyContent: "center",
      alignItems: "center",
      width: 28,
      height: 28,
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 14,

      textAlign: "center",
    },

    overlayLeftLabel: {
      backgroundColor: "transparent",
      borderColor: "#6ee3b4",
      borderWidth: 4,
      fontSize: 32,
      color: "#6ee3b4",
      fontWeight: "bold",
    },
    overlayLeftLabelWrap: {
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      marginTop: 30,
      marginLeft: -30,
    },
    overlayRightLabel: {
      backgroundColor: "transparent",
      borderColor: "#ec5288",
      borderWidth: 4,
      fontSize: 32,
      color: "#ec5288",
      fontWeight: "bold",
    },
    overlayRightLabelWrap: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 30,
      marginLeft: 30,
    },
  });

export default styles;
