import Colors from "@/constants/Colors";
import { ImagePaths } from "@/constants/Path";
import { Image } from "expo-image";
import React from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
interface AuthScreenProps {
  children: React.ReactNode;
  imageSource?: number;
}
const AuthScreen = ({
  children,
  imageSource = ImagePaths.SuvarnaBhagyaLogoSmallPNG,
}: AuthScreenProps) => {
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.mainContainer}>
      <Image source={imageSource} style={styles.imageBackground} />
      <View style={styles.dividerContainerOne}>
        <Image source={imageSource} style={styles.logoImage} />
      </View>
      <View style={styles.dividerContainerTwo}>{children}</View>
    </View>
    </TouchableWithoutFeedback>

    
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
  },
  logoImage: {
    width: 162,
    height: 162,
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  dividerContainerOne: {
    flex: 2,
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    justifyContent: "center",
    alignItems: "center",
  },
  dividerContainerTwo: {
    flex: 3,
    backgroundColor: Colors.light.secondary.colorSecondary.colorOne,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
export default AuthScreen;
