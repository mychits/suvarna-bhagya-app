import CSingularButton from "@/components/ui/buttons/CSingularButton";
import CCard from "@/components/ui/cards/CCard";
import CCardContent from "@/components/ui/cards/CCardContent";
import CSheetCard from "@/components/ui/cards/CSheetCard";
import Colors from "@/constants/Colors";
import { ImagePaths } from "@/constants/Path";
import { HomeScreenTexts } from "@/data/Data";
import { CardContentImages } from "@/data/Images";
import AppScreen from "@/layouts/AppScreen";
import * as Haptics from 'expo-haptics';
import { Image } from "expo-image";
import { Href, router } from "expo-router";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const Home = () => {
  async function onHandlePress(route: Href) {
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    router.push(route);
  }
  return (
    <AppScreen>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={ImagePaths.PromBannerOnePNG}
            style={styles.bannerImages}
          />
          <Image
            source={ImagePaths.PromBannerOnePNG}
            style={styles.bannerImages}
          />
        </ScrollView>

        <CSheetCard
          titleContainerBgColor={Colors.light.common.yellowGradientOne}
          titleWeight="bold"
          titleSize={20}
          titleContainerPadding={2}
          titleColor={Colors.light.primary.colorPrimary.colorOne}
          stroke={Colors.light.primary.colorPrimaryVariant.colorOne}
          title={HomeScreenTexts.cardSheetTitle}
          childPadding={10}
          marginTop={20}
        >
          <CCard
            stroke={Colors.light.common.light.none}
            componentOne={
              <CCardContent
                images={CardContentImages.imagesOne}
                title={HomeScreenTexts.cardSubTitleOne}
                titleColor={Colors.light.primary.colorOnPrimary.colorOne}
              />
            }
            componentTwo={
              <CSingularButton
                onPressHandler={() =>
                  onHandlePress(
                    `/(drawer)/(tabs)/(groups)/saving?scheme=groupBySavingsSmart&title=${
                      HomeScreenTexts.cardSubTitleOne
                    }&imageType=imagesOne&cardColor=${encodeURIComponent(
                      Colors.light.primary.colorPrimaryVariant.colorTwo
                    )}`
                  )
                }
                colors={[
                  Colors.light.primary.colorPrimaryVariant.colorOne,
                  Colors.light.primary.colorPrimaryVariant.colorThree,
                ]}
                iconName={"doubleright"}
                iconColor={Colors.light.primary.colorOnPrimary.colorOne}
              />
            }
          />
          <CCard
            stroke={Colors.light.common.light.none}
            componentOne={
              <CCardContent
                images={CardContentImages.imagesTwo}
                title={HomeScreenTexts.cardSubTitleTwo}
                titleColor={Colors.light.primary.colorOnPrimary.colorOne}
                imageOneWidth={38}
                imageOneHeight={60}
                imageTwoHeight={60}
                imageTwoWidth={100}
              />
            }
            componentTwo={
              <CSingularButton
                onPressHandler={() =>
                  onHandlePress(
                    `/saving?scheme=groupBySavingsFixed&title=${
                      HomeScreenTexts.cardSubTitleTwo
                    }&imageType=imagesOne&cardColor=${encodeURIComponent(
                      Colors.light.secondary.colorSecondaryVariant.colorOne
                    )}`
                  )
                }
                colors={[
                  Colors.light.primary.colorPrimaryVariant.colorOne,
                  Colors.light.primary.colorPrimaryVariant.colorThree,
                ]}
                iconName={"doubleright"}
                iconColor={Colors.light.primary.colorOnPrimary.colorOne}
              />
            }
            backgroundColor={
              Colors.light.secondary.colorSecondaryVariant.colorOne
            }
          />
        </CSheetCard>
      </ScrollView>
    </AppScreen>
  );
};
const styles = StyleSheet.create({
  bannerImages: {
    width: width - 8,
    height: 208,
  },
});
export default Home;
