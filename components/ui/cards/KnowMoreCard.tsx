import Colors from "@/constants/Colors";
import { General } from "@/data/Data";
import { CardContentImages } from "@/data/Images";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CCard from "./CCard";
import CCardContent from "./CCardContent";
import { router } from "expo-router";
import * as Haptics from 'expo-haptics';
type ICardData = {
  id: string;
  title: string;
  value: string;
};
interface KnowMoreCardProps {
  bgColor?: string;
  footerTitle?: string;
  cardDatas: ICardData[];
  boxBorderColor?: string;
  title?: string;
}
const KnowMoreCard = ({
  title = "",
  bgColor = Colors.light.common.white,
  footerTitle,
  cardDatas,
}: KnowMoreCardProps) => {
  const cardDatasLength = cardDatas.length;
const onClickHandler = ()=>{
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
 
  router.push("/(drawer)/(tabs)/(groups)/enrollForm")
}
  return (
    <View style={[styles.mainContainer, { backgroundColor: bgColor }]}>
      {!!title && (
        <CCard
          componentOne={
            <CCardContent
              subTitle={title}
              images={[
                CardContentImages.imagesOne[0],

                CardContentImages.imagesOne[1],
              ]}
              title={General.chitValue}
            />
          }
          stroke={Colors.light.primary.colorPrimaryVariant.colorTwo}
          backgroundColor={Colors.light.primary.colorPrimaryVariant.colorTwo}
          enableShadow={true}
        />
      )}
      <View>
        {cardDatas.map((data, index) => {
          if (index % 2 === 0) {
            const nextItem = cardDatas[index + 1];

            return (
              <View key={data.id} style={{ flexDirection: "row" }}>
                <View
                  style={[styles.boxContainer, styles.applyBorderLeftContainer]}
                >
                  <Text style={styles.headingTitle}>{data.title}</Text>
                  <Text style={styles.valueTitle}>{data.value}</Text>
                </View>

                {nextItem ? (
                  <View
                    style={[
                      styles.boxContainer,
                      styles.applyBorderRightContainer,
                    ]}
                  >
                    <Text style={styles.headingTitle}>{nextItem.title}</Text>
                    <Text style={styles.valueTitle}>{nextItem.value}</Text>
                  </View>
                ) : (
                  <View
                    style={[
                      styles.boxContainer,
                      styles.applyBorderRightContainer,
                      { backgroundColor: "transparent" },
                    ]}
                  />
                )}
              </View>
            );
          }
          return null;
        })}
      </View>
      {!!footerTitle && (
        <TouchableOpacity style={styles.footerTitleContainer} onPress={onClickHandler}>
          <Text style={styles.footerTitle}>{footerTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    borderRadius: 10,
  },
  boxContainer: {
    width: "50%",
    padding: 20,
    backgroundColor: Colors.light.common.light.eighty,
  },
  applyBorderLeftContainer: {
    borderRightColor: Colors.light.primary.colorPrimaryVariant.colorFive.twenty,
    borderBottomColor:
      Colors.light.primary.colorPrimaryVariant.colorFive.twenty,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  applyBorderRightContainer: {
    borderBottomColor:
      Colors.light.primary.colorPrimaryVariant.colorFive.twenty,
    borderBottomWidth: 2,
  },
  headingTitle: {
    textAlign: "center",
    color: Colors.light.primary.colorPrimary.colorTwo,
  },
  valueTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  footerTitleContainer: {
    backgroundColor: Colors.light.primary.colorPrimary.colorTwo,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.light.primary.colorOnPrimary.colorOne,
  },
});
export default KnowMoreCard;
