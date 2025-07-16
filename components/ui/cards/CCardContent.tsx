import Colors from "@/constants/Colors";
import { ICardContentImage } from "@/models/ICardImages";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardContentProps {
  title: string;
  subTitle?: string;
  images: (string | ICardContentImage)[];
  titleColor?: string;
  imageOneWidth?: number;
  imageOneHeight?: number;
  imageTwoWidth?: number;
  imageTwoHeight?: number;
}
const CCardContent = ({
  title,
  titleColor = Colors.light.common.light.none,
  subTitle,
  images,
  imageOneWidth = 60,
  imageOneHeight = 60,
  imageTwoHeight = 60,
  imageTwoWidth = 60,
}: CardContentProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>

      <View style={styles.imagesContainer}>
        {images.map(
          (
            obj: any | ICardContentImage,
            index: number
          ): React.JSX.Element => {
            if (
              typeof obj === "object" &&
              obj !== null &&
              typeof obj.image === "number"
            ) {
              const modulo = index % 2;
              return (
                <>
                  <Image
                    key={obj.id}
                    source={obj.image}
                    style={[
                      styles.sideImages,
                      {
                        width: modulo === 0 ? imageOneWidth : imageTwoWidth,
                        height: modulo === 0 ? imageOneHeight : imageTwoHeight,
                      },
                    ]}
                  />
                  {!!subTitle && index === 0 && (
                    <Text style={[styles.subTitle]}>{subTitle}</Text>
                  )}
                </>
              );
            } else {
              return (
                <View key={obj.id}>
                  <Text>{obj.title}</Text>
                </View>
              );
            }
          }
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
  },
  imagesContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sideImages: {
    width: 60,
    height: 60,
  },
  title: {
    fontWeight: "semibold",
    textAlign: "center",
    flexWrap: "wrap",
    fontSize: 20,
  },
  subTitle: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginLeft: 14,
  },
});
export default CCardContent;
