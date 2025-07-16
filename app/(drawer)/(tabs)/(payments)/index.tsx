import CContainer from "@/components/containers/CContainer";
import Reload from "@/components/Reload";
import CSheetCard from "@/components/ui/cards/CSheetCard";
import ReceiptCard from "@/components/ui/cards/ReceiptCard";
import Colors from "@/constants/Colors";
import { UserContext } from "@/context/UserContext";
import { General } from "@/data/Data";
import useAxios from "@/hooks/useAxios";
import useCContext from "@/hooks/useCContext";
import AppScreen from "@/layouts/AppScreen";
import { AxiosError } from "axios";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet
} from "react-native";
interface IEnrolledGroups {
  _id: string;
  tickets: number;
  group_id?: {
    _id: string;
    group_name: string;
    group_value: string;
    group_install: String;
    group_members: string;
    start_date: string;
    end_date: string;
    group_savings_type?: "smart_saving" | "fixed_gold";
  };
}
const Payments = () => {
  const { apiState, fetchApiData } = useAxios();
  const { user } = useCContext(UserContext);
  const [enrolledGroups, setEnrolledGroups] = useState<IEnrolledGroups[]>([]);
  const [selectedCard, setSelectedCard] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({
    totalInvestment: "",
    totalProfit: "",
  });
  async function getUserOverallDetails() {
    try {
      const responseData = await fetchApiData({
        method: "POST",
        url: `/enroll/get-user-tickets-report/${user}`,
      });
      if (responseData && responseData.length > 0) {
        const totalInvestment = responseData.reduce(
          (
            accum: number,
            group: { payments: { totalPaidAmount?: number | string } }
          ) => accum + (Number(group.payments?.totalPaidAmount) || 0),
          0
        );
        setPaymentInfo((prev) => ({ ...prev, totalInvestment }));

        const totalProfit = responseData.reduce(
          (
            accum: number,
            group: { profit: { totalProfit?: number | string } }
          ) => accum + Number(group.profit?.totalProfit || 0),
          0
        );
        setPaymentInfo((prev) => ({ ...prev, totalProfit }));
      } else {
        setPaymentInfo({ totalInvestment: "", totalProfit: "" });
      }
    } catch (error) {
      setPaymentInfo({ totalInvestment: "", totalProfit: "" });
      console.error(
        "path:app/(tabs)/payments, Error fetching Overall Tickets",
        error
      );
    }
  }
  async function getUserEnrollmentDetails() {
    try {
      const responseData = await fetchApiData({
        method: "POST",
        url: `/enroll/get-user-tickets/${user}`,
      });
      if (responseData && responseData.length > 0) {

        setEnrolledGroups(responseData);
      } else {
        setEnrolledGroups([]);
      }
    } catch (error) {
      setEnrolledGroups([]);
      console.error(
        "path:app/(tabs)/payments,Error fetching User Tickets",
        error
      );
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([
          getUserEnrollmentDetails(),
          getUserOverallDetails(),
        ]);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            console.error(
              `path:app/(tabs)/payments ,Axios Error FETCHDATA , Status:${error.response.status} Data:${error.response.data} Headers:${error.response.headers}`
            );
          } else if (error.request) {
            console.error(
              "path:app/(tabs)/payments ,Axios Error FETCHDATA ,Request:",
              error.request
            );
          } else {
            console.error(
              "path:app/(tabs)/payments ,Axios Error FETCHDATA ,Error ETCHDATA:",
              error
            );
          }
        } else {
          console.error(
            "path:app/(tabs)/payments Not Axios Error ETCHDATA :UnKnown Error",
            error
          );
        }
      }
    }
    fetchData();
  }, []);
  return (
    <AppScreen>
      <CSheetCard
        childPadding={10}
        stroke={"white"}
        title={General.payments}
        titleContainerBgColor={{
          colorOne: Colors.light.primary.colorPrimary.colorOne,
          colorTwo: Colors.light.primary.colorPrimary.colorOne,
        }}
        titleSize={20}
        titleWeight={"bold"}
        titleContainerPadding={1}
      >
        {apiState.loading ? (
           <ActivityIndicator
          size={50}
          color={Colors.light.primary.colorOnPrimary.colorOne}
        />
        ) : enrolledGroups.length <= 0 ? (
          <Reload message={apiState.errors} />
        ) : (
          <>
            <CContainer
              titleOne="Total Investment"
              titleTwo="Total Divident / Profit"
              valueOne={`₹ ${paymentInfo.totalInvestment}`}
              valueTwo={`₹ ${paymentInfo.totalProfit}`}
              mainContainerStyle={styles.cContainerMainContainer}
            />
            <FlatList
              scrollEnabled={true}
              renderItem={({ item }) => (
                <ReceiptCard
                  title={`₹ ${item?.group_id?.group_value}`}
                  subtext={`${item?.group_id?.group_name}`}
                  description={`Ticket:${item?.tickets}`}
                  onViewPress={() =>
                    router.push({
                      pathname: "/(drawer)/(tabs)/(payments)/paymentGroupInfo",
                      params: {
                        groupId: `${item?.group_id?._id}`,
                        userId: `${user}`,
                        ticket: `${item?.tickets}`,
                      },
                    })
                  }
                  onCardPress={() => setSelectedCard(item._id)}
                  selectedCard={item._id === selectedCard}
                />
              )}
              data={enrolledGroups}
              keyExtractor={(item) => item?._id}
              contentContainerStyle={{ paddingBottom: 500, flexGrow: 1 }}
            />
          </>
        )}
      </CSheetCard>
    </AppScreen>
  );
};
const styles = StyleSheet.create({
  cContainerMainContainer: {
    marginBottom: 10,
  },
});
export default Payments;
