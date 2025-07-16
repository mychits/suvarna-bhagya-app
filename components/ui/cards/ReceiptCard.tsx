import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CCardProps {
  title: string;
  subtext: string;
  description: string;
  selectedCard:boolean;
  onCardPress:()=>void;
  onViewPress?: () => void;
}

const ReceiptCard = ({
  title,
  subtext,
  description,
  onViewPress,
  onCardPress,
  selectedCard
}: CCardProps) => {
  return (
    <TouchableOpacity style={styles.outerContainer} onPress={onCardPress}>
      <View style={selectedCard?[styles.receiptContainer,styles.thickBorder]:styles.receiptContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.viewButton} onPress={onViewPress}>
            <Ionicons name="eye" size={16} color={Colors.light.common.light.none} style={{ marginRight: 4 }} />
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dashedLine} />

        <View style={styles.bottomRow}>
          <Text style={styles.subtext}>{subtext}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thickBorder:{
    borderWidth:3
  },
  outerContainer: {
    marginVertical: 10,
  },
  receiptContainer: {
    borderRadius: 12,
    backgroundColor: Colors.light.common.light.eighty,
    borderColor: Colors.light.primary.colorPrimary.colorOne, // Gold border
    borderWidth: 1.5,
    padding: 16,
  
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.primary.colorOnPrimary.colorOne, 
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.primary.colorOnPrimary.colorOne, 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  dashedLine: {
    borderStyle: "dashed",
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginVertical: 12,
  },
  bottomRow: {
    marginTop: 4,
  },
  subtext: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  description: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
});

export default ReceiptCard;
