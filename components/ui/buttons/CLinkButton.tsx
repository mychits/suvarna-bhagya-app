import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
interface CLinkButtonProps {
  href: any;
  title: string;
}
const CLinkButton: React.FC<CLinkButtonProps> = ({ href, title }) => {
  return (
    <Link href={href} asChild style={styles.link}>
      <Text>{title}</Text>
    </Link>
  );
};
const styles = StyleSheet.create({
  link: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
export default CLinkButton;
