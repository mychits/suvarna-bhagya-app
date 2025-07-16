import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

type ReceiptCardProps = {
  mainText: string;
  centeredText: string;
  trailingText: string;
};

const CReceiptCard: React.FC<ReceiptCardProps> = ({
  mainText,
  centeredText,
  trailingText,
}) => {
  return (
    <LinearGradient
      colors={["#1f1c2c", "#928DAB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.centeredText}>{centeredText}</Text>
        <Text style={styles.trailingText}>{trailingText}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainText: {
    color: "#FFD700", // Gold color
    fontSize: 20,
    fontWeight: "700",
  },
  centeredText: {
    color: "#FFFFFF",
    fontSize: 16,
    opacity: 0.8,
  },
  trailingText: {
    color: "#00CED1", // Premium teal
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CReceiptCard;
