import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05060b",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  title: {
    position: "absolute",
    top: 120,
    fontSize: 40,
    fontWeight: "400",
    color: "#ffffff",
    letterSpacing: 0.5,
  },

  buttonWrap: {
    width: "100%",
    maxWidth: 330,
    gap: 14,
  },

  primaryButton: {
    width: "100%",
    height: 48,
    borderRadius: 9,
    backgroundColor: "#4f7cff",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
  },

  secondaryButton: {
    width: "100%",
    height: 48,
    borderRadius: 9,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
  },

  card: {
  width: "100%",
  maxWidth: 330,
  backgroundColor: "#15151f",
  borderRadius: 14,
  padding: 24,
  gap: 16,
},

cardTitle: {
  color: "#ffffff",
  fontSize: 25,
  fontWeight: "600",
  textAlign: "center",
  marginBottom: 4,
},

input: {
  width: "100%",
  height: 48,
  backgroundColor: "#ffffff",
  borderRadius: 8,
  paddingHorizontal: 14,
  fontSize: 15,
  color: "#111111",
},

backButton: {
  width: 38,
  height: 38,
  borderRadius: 19,
  borderWidth: 2,
  borderColor: "#4f7cff",
  justifyContent: "center",
  alignItems: "center",
},

backButtonText: {
  color: "#ffffff",
  fontSize: 22,
  lineHeight: 24,
},

optionGrid: {
  width: "100%",
  gap: 10,
},

optionButton: {
  width: "100%",
  minHeight: 46,
  borderRadius: 9,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.22)",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 12,
},

optionButtonActive: {
  backgroundColor: "#4f7cff",
  borderColor: "#4f7cff",
},

optionText: {
  color: "#ffffff",
  fontSize: 15,
},

optionTextActive: {
  color: "#ffffff",
  fontWeight: "600",
},

lobbyWrap: {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 32,
},

});

export default styles;