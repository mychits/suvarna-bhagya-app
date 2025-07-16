// import GoldBarTransImage from "@/assets/images/backgrounds/gold-bar-trans.svg";
import Colors from "@/constants/Colors";
import { ImagePaths } from "@/constants/Path";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
interface AppScreenProps {
  children: React.ReactNode;
  childPadding?:number;
}
const AppScreen = ({ children,childPadding=4 }: AppScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[
          Colors.light.primary.colorPrimary.colorOne,
          Colors.light.primary.colorPrimary.colorTwo,
        ]}
        style={styles.mainGradient}
      >
        <Image
          source={ImagePaths.GoldBarTransparentPNG}
          style={styles.mainImage}
        />
        <View style={{padding:childPadding}}>
        {children}

        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,    
  },
  mainGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  mainImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
export default AppScreen;
