import GoldBagImage from "@/assets/images/additional/gold-bag.svg";
import GoldCoinsImage from "@/assets/images/additional/gold-coins.svg";
import GoldBarTransImage from "@/assets/images/backgrounds/gold-bar-trans.svg";
import Colors from "@/constants/Colors";
import { ImagePaths } from "@/constants/Path";
import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SplashScreen = () => {

  useEffect(()=>{
    const timer = setTimeout(()=>{
      router.replace("/(auth)/login")
    },3000)
    return ()=>{
      clearTimeout(timer)
    }
  },[])
  return (
      <View style={styles.mainContainer}>
      <GoldBarTransImage
        style={styles.imageBackground}
      />
      <GoldCoinsImage style={styles.imageTopLeft} />
      <GoldCoinsImage  style={styles.imageTopRight} />
      <LinearGradient colors={[Colors.light.primary.colorPrimary.colorOne,Colors.light.primary.colorPrimary.colorTwo]} style={styles.dividerContainerOne}/>
      <LinearGradient colors={[Colors.light.secondary.colorSecondary.colorOne,Colors.light.secondary.colorSecondary.colorTwo]} style={styles.dividerContainerTwo} />
     <Image source={ImagePaths.SuvarnaBhagyaLogoPNG} style={styles.mainLogo} />
      <GoldBagImage style={styles.imageBottom} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dividerContainerOne: {
    flex: 1,

  },
  dividerContainerTwo: {
    flex: 1,
  },
  mainLogo: {
    position: "absolute",
    width:353,
    height:353,
    left: screenWidth / 2 - 353 / 2,
    top: screenHeight / 2 - 353 / 2,
    zIndex: 30,
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex:10
  },
  imageTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex:20,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  imageTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex:20
  },
  imageBottom: {
    position: "absolute",
    zIndex:20,
    bottom: 0,
    // alignSelf:"center"

  },
});
export default SplashScreen;