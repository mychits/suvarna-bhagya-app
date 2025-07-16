import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { DimensionValue, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
type BgColor = {
  colorOne: string;
  colorTwo: string;
};
const bgColor: BgColor = {
  colorOne: Colors.light.primary.colorPrimary.colorOne,
  colorTwo: Colors.light.primary.colorPrimary.colorOne,
};
type CSheetCardProps = {
  children?: ReactNode;
  backgroundColor?: string;
  title?: string;
  titleSize?: number;
  titleWeight?: "bold" | "semibold" | "100" | "200";
  titleColor?: string;
  titleContainerPadding?: number;
  titleContainerBgColor?: BgColor;
  stroke?: string;
  childPadding?: number;
  headerIcon?: React.ReactNode;
  borderWidth?: number;
  width?: DimensionValue | undefined;
  childStyle?:StyleProp<ViewStyle>
  marginTop?:number;
};
const CSheetCard = ({
  children,
  backgroundColor = Colors.light.common.light.eighty,
  title,
  titleSize,
  titleWeight,
  titleColor = Colors.light.primary.colorOnPrimary.colorOne,
  stroke,
  titleContainerPadding,
  titleContainerBgColor = bgColor,
  childPadding = 20,
  headerIcon,
  borderWidth = 2,
  width = "100%",
  childStyle,
  marginTop=0,
}: CSheetCardProps) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: backgroundColor,
          borderColor: stroke,
          borderWidth: borderWidth,
          width,
          marginTop
        },
      ]}
    >
      {!!title && (
        <LinearGradient
          style={[
            styles.titleContainer,
            {
              padding: titleContainerPadding,
            },
          ]}
          colors={[
            titleContainerBgColor.colorOne,
            titleContainerBgColor.colorTwo,
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                color: titleColor,
                fontSize: titleSize,
                fontWeight: titleWeight,
              },
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      )}
      {!!headerIcon && (
        <View style={styles.headerIconContainer}> {headerIcon}</View>
      )}
      <View style={[styles.childContainer, { padding: childPadding },childStyle]}>
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    backgroundColor:"green"
  
  },
  headerIconContainer: {
    position: "absolute",
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    padding: 10,
    borderRadius: "50%",
    elevation: 100,
    transform: [{ translateX: -35 }, { translateY: -35 }],
    left: "50%",
  },

  titleContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    textAlign: "center",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  childContainer: {
   
   
  },
});
export default CSheetCard;
