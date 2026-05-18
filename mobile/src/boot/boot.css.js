import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boot: {
    flex: 1,
    backgroundColor: "#0b0b0f",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  title: {
    fontSize: 54,
    color: "#ffffff",
    fontWeight: "400",
    letterSpacing: 2,
  },

  spinner: {
    marginTop: 24,
  },

  footer: {
    position: "absolute",
    bottom: 32,
    fontSize: 12,
    letterSpacing: 1,
    opacity: 0.6,
    color: "rgba(255, 255, 255, 0.6)",
  },
});

export default styles;