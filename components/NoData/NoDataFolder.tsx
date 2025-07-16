import { AnimationPaths } from "@/constants/Path";
import LottieView from "lottie-react-native";
import React, { Ref } from "react";
import { StyleSheet, View } from "react-native";
interface NoDataFolderProps{
    ref:Ref<LottieView> | undefined;
}
const NoDataFolder:React.FC<NoDataFolderProps> = ({ ref }) => {
  return (
    <View style={styles.mainContainer}>
      <LottieView
        source={AnimationPaths.YellowFolderNotFound}
        autoPlay
        style={{ width: 400, height: 400 }}
        loop={false}
        ref={ref}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default NoDataFolder;
