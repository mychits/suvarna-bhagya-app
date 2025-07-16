import Colors from "@/constants/Colors";
import { LoginContext } from "@/context/LoginContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';
import React, { use } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
interface AppBarIconProps {
  size?: number;
  color?: string;
  iconName?: any;
}
const AppBarIcon: React.FC<AppBarIconProps> = ({
  size = 30,
  color = Colors.light.common.light.none,
  iconName = "arrow-left",
}) => {
  const context = use(LoginContext);
  if (!context) throw new Error("Login context is missing");
  const { direction, setDirection } = context;
  const onIconPress = () => {
    setDirection((prev) => Math.max(0, prev - 1));
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  };
  return (
    <TouchableOpacity onPress={onIconPress} style={styles.mainContainer}>
      {direction > 0 && (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: { position: "absolute", top: 50, left: 20 },
});
export default AppBarIcon;
