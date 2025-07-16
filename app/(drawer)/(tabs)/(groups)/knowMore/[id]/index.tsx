import Reload from "@/components/Reload";
import CSheetCard from "@/components/ui/cards/CSheetCard";
import KnowMoreCard from "@/components/ui/cards/KnowMoreCard";
import Colors from "@/constants/Colors";
import { General, HomeScreenTexts } from "@/data/Data";
import useAxios from "@/hooks/useAxios";
import AppScreen from "@/layouts/AppScreen";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const ChitSmartSavingKnowMore = () => {
  const { apiState, fetchApiData } = useAxios();
  const { id, scheme } = useLocalSearchParams();
  console.info(id, "this is is", scheme);
  useEffect(() => {
    fetchApiData({
      method: "GET",
      url: `/group/get-by-id-group/${id}`,
    });
  }, []);

  return (
    <AppScreen>
      {apiState.loading ? (
        <ActivityIndicator
          size={50}
          color={Colors.light.primary.colorOnPrimary.colorOne}
        />
      ) : apiState.errors ? (
        <Reload message={apiState.errors} />
      ) : (
        apiState.response && (
          <CSheetCard
            titleSize={24}
            titleWeight="bold"
            childPadding={5}
            title={HomeScreenTexts.cardSubTitleOne}
            stroke={Colors.light.common.light.none}
          >
            <KnowMoreCard
              title={`₹ ${apiState?.response?.group_value}`}
              cardDatas={[
                {
                  id: "$1",
                  title: General.groupName,
                  value: apiState?.response?.group_name,
                },
                {
                  id: "$1",
                  title: General.totalInstallmentMembers,
                  value: apiState?.response?.group_members,
                },
                {
                  id: "$2",
                  title: General.installmentAmount,
                  value: apiState?.response?.group_install,
                },
                {
                  id: "$3",
                  title: General.noOfMonths,
                  value: apiState?.response?.group_duration,
                },
              ]}
              footerTitle={General.joinNow}
            />
          </CSheetCard>
        )
      )}
    </AppScreen>
  );
};

export default ChitSmartSavingKnowMore;
