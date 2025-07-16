import NoDataFolder from "@/components/NoData/NoDataFolder";
import CDualButton from "@/components/ui/buttons/CDualButton";
import CCard from "@/components/ui/cards/CCard";
import CCardContent from "@/components/ui/cards/CCardContent";
import CSheetCard from "@/components/ui/cards/CSheetCard";
import Colors from "@/constants/Colors";
import { nodeApis } from "@/data/api";
import { DualButtonTexts, General } from "@/data/Data";
import { CardContentImages } from "@/data/Images";
import useAxios from "@/hooks/useAxios";
import AppScreen from "@/layouts/AppScreen";
import { IGroups } from "@/models/IGroups";
import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { JSX } from "react/jsx-runtime";
const Saving = () => {
  const params = useLocalSearchParams();
  const scheme = params.scheme as "groupBySavingsFixed" | "groupBySavingsSmart";
  const title = params.title as string;
  const imageType = params.imageType as "imagesOne" | "imagesTwo";
  const cardColor = params.cardColor as string;

  const decodedCardColor = decodeURIComponent(cardColor);
  const { apiState, fetchApiData } = useAxios();
  const noDataLottieRef = useRef<LottieView>(null);
  useEffect(() => {
    if (apiState.response.length <= 0) {
      noDataLottieRef?.current?.play(0, 80);
    }
  }, [apiState.response]);
  useEffect(() => {
    fetchApiData({
      method: "GET",
      url: nodeApis.groups.get[scheme],
    });
  }, [scheme]);
  const onPressKnowMore = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    router.push(`/knowMore/${id}/?scheme=${scheme}`);
  };
  const onPressJoinNow = (id: string) => {
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
  };
  return (
    <AppScreen>
      {apiState.loading ? (
        <ActivityIndicator
          size={50}
          color={Colors.light.primary.colorOnPrimary.colorOne}
        />
      ) : apiState.response.length <= 0 ? (
        <NoDataFolder ref={noDataLottieRef} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
        <CSheetCard
          childPadding={10}
          stroke={"white"}
          title={title}
          titleContainerBgColor={{
            colorOne: decodedCardColor,
            colorTwo: decodedCardColor,
          }}
          titleSize={20}
          titleWeight={"bold"}
          titleContainerPadding={1}
        >
          {apiState.response.map(
            (group: IGroups): JSX.Element => (
              <CCard
                key={group._id}
                stroke={Colors.light.primary.colorPrimaryVariant.colorTwo}
                backgroundColor={decodedCardColor}
                enableShadow={true}
                componentOne={
                  <CCardContent
                    subTitle={"₹ " + group.group_value}
                    images={[
                      CardContentImages[imageType][0],
                      group._id,
                      CardContentImages[imageType][1],
                    ]}
                    title={General.chitValue}
                  />
                }
                componentTwo={
                  <CDualButton
                    handleButtonOne={() => onPressKnowMore(group._id)}
                    handleButtonTwo={() => onPressJoinNow(group._id)}
                    titleOne={DualButtonTexts.titleOne}
                    titleTwo={DualButtonTexts.titleTwo}
                    colors={[
                      Colors.light.common.yellowGradientOne.colorOne,
                      Colors.light.common.yellowGradientOne.colorTwo,
                    ]}
                  />
                }
              />
            )
          )}
        </CSheetCard>
        </ScrollView>
      )}
    </AppScreen>
  );
};

export default Saving;
