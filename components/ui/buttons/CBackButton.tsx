import { MaterialIcons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
const CBackButton = () => {
  return (
    <TouchableOpacity
      style={{ padding: 20 }}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.back();
      }}
    >
      <MaterialIcons name="arrow-back-ios" color={"white"} size={20} />
    </TouchableOpacity>
  );
};

export default CBackButton;
