import CContainer from "@/components/containers/CContainer";
import TitlePanel from "@/components/paymentDetails";
import Reload from "@/components/Reload";
import CSheetCard from "@/components/ui/cards/CSheetCard";
import CListTile from "@/components/ui/Lists/CListTile";
import Colors from "@/constants/Colors";
import { UserContext } from "@/context/UserContext";
import { General, PaymentsTexts } from "@/data/Data";
import useAxios from "@/hooks/useAxios";
import useCContext from "@/hooks/useCContext";
import AppScreen from "@/layouts/AppScreen";
import { AxiosError } from "axios";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface IPaymentData {
  _id: string;
  receipt_no: string;
  old_receipt_no: string;
  pay_date: string;
  amount: string;
}
const PaymentGroupInfo = () => {
  const queryParams = useLocalSearchParams();
  const { userId, groupId, ticket } = queryParams as {
    userId: string;
    groupId: string;
    ticket: string;
  };
  const { apiState, fetchApiData } = useAxios();
  const [singleOverview, setSingleOverview] = useState({
    totalPaid: "",
    totalProfit: "",
    totalInvestment: "",
    totalPayable: "",
  });
  const [paymentDatas, setPaymentDatas] = useState<IPaymentData[]>([]);
  const [group, setGroup] = useState({
    group_name: "",
    group_type: "",
    group_value: "",
  });
  const [auctions, setAuctions] = useState<{ divident_head: string }[]>([]);

  const { user } = useCContext(UserContext);
  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const responseData = await fetchApiData({
          url: `auction/get-group-auction/${groupId}`,
          method: "GET",
        });

        if (responseData) {
          setAuctions(responseData);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            console.error(
              `path:app/(tabs)/payments ,Axios Error , Status:${error.response.status} Data:${error.response.data} Headers:${error.response.headers}`
            );
          } else if (error.request) {
            console.error(
              "path:app/(tabs)/payments ,Axios Error fetching AUCTIONS,Request:",
              error.request
            );
          } else {
            console.error(
              "path:app/(tabs)/payments ,Axios Error AUCTIONS,Error:",
              error
            );
          }
        } else {
          console.error(
            "path:app/(tabs)/payments Not Axios Error AUCTIONS:UnKnown Error",
            error
          );
        }
      }
    };
    fetchAuction();
  }, []);

  const fetchGroup = async () => {
    try {
      const responseData = await fetchApiData({
        url: `/group/get-by-id-group/${groupId}`,
        method: "GET",
      });

      if (responseData) {
        setGroup(responseData);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error(
            `path:app/(tabs)/payments ,Axios Error , Status:${error.response.status} Data:${error.response.data} Headers:${error.response.headers}`
          );
        } else if (error.request) {
          console.error(
            "path:app/(tabs)/payments ,Axios Error fetching GROUPS,Request:",
            error.request
          );
        } else {
          console.error(
            "path:app/(tabs)/payments ,Axios Error GROUPS,Error:",
            error
          );
        }
      } else {
        console.error(
          "path:app/(tabs)/payments Not Axios Error GROUPS:UnKnown Error",
          error
        );
      }
    }
  };

  const fetchTicketData = async () => {
    try {
      const responseData = await fetchApiData({
        url: `/payment/payment-list`,
        method: "POST",
        data: {
          groupId,
          userId: user,
          ticket,
        },
      });
      const innerReponseData = responseData?.data;
      if (responseData && innerReponseData) {
        setPaymentDatas(innerReponseData);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error(
            `path:app/(tabs)/payments ,Axios Error , Status:${error.response.status} Data:${error.response.data} Headers:${error.response.headers}`
          );
        } else if (error.request) {
          console.error(
            "path:app/(tabs)/payments ,Axios Error ,Request:",
            error.request
          );
        } else {
          console.error("path:app/(tabs)/payments ,Axios Error ,Error:", error);
        }
      } else {
        console.error(
          "path:app/(tabs)/payments Not Axios Error :UnKnown Error",
          error
        );
      }
    }
  };

  const fetchSingleOverview = async () => {
    try {
      const responseData = await fetchApiData({
        url: `/single-overview?user_id=${userId}&group_id=${groupId}&ticket=${ticket}`,
        method: "GET",
      });
      setSingleOverview(responseData);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error(
            `path:app/(tabs)/payments ,Axios Error , Status:${error.response.status} Data:${error.response.data} Headers:${error.response.headers}`
          );
        } else if (error.request) {
          console.error(
            "path:app/(tabs)/payments ,Axios Error ,Request:",
            error.request
          );
        } else {
          console.error("path:app/(tabs)/payments ,Axios Error ,Error:", error);
        }
      } else {
        console.error(
          "path:app/(tabs)/payments Not Axios Error :UnKnown Error",
          error
        );
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([
          fetchGroup(),
          fetchTicketData(),
          fetchSingleOverview(),
        ]);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            console.error(
              `path:app/(tabs)/payments ,Axios Error , Status:${error.response.status} Data:${error.response.data} Headers:${error.response.headers}`
            );
          } else if (error.request) {
            console.error(
              "path:app/(tabs)/payments ,Axios Error ,Request:",
              error.request
            );
          } else {
            console.error(
              "path:app/(tabs)/payments ,Axios Error ,Error:",
              error
            );
          }
        } else {
          console.error(
            "path:app/(tabs)/payments Not Axios Error :UnKnown Error",
            error
          );
        }
      }
    }
    fetchData();
  }, [userId, groupId, ticket]);

  return (
    <AppScreen childPadding={8}>
      {apiState.loading ? (
        <ActivityIndicator
          size={50}
          color={Colors.light.primary.colorOnPrimary.colorOne}
        />
      ) : paymentDatas.length <= 0 ? (
        <Reload message={apiState.errors} />
      ) : (
        <>
          <CSheetCard
            backgroundColor={Colors.light.common.light.twenty}
            stroke={Colors.light.common.light.twenty}
            childPadding={2}
          >
            <TitlePanel
              mainTitle={`${group.group_name}`}
              centeredTitle={`₹ ${group.group_value}`}
              trailingTitle={`Ticket: ${ticket}`}
            />

            <CContainer
              titleOne="Total Investment"
              titleTwo="Total Divident / Profit"
              valueOne={`₹ ${singleOverview.totalPaid || 0}`}
              valueTwo={`₹ ${singleOverview.totalProfit || 0}`}
              mainContainerStyle={styles.cContainerMainContainer}
            />

            <CContainer
              titleOne="Group Value"
              titleTwo="To Be Paid"
              valueOne={`₹ ${group.group_value} `}
              valueTwo={`₹ ${
                group.group_type === "double"
                  ? singleOverview.totalInvestment || 0
                  : singleOverview.totalPayable +
                      parseFloat(auctions[0]?.divident_head || "0") || 0
              }`}
              mainContainerStyle={styles.cContainerMainContainer}
            />
            <CContainer
              titleOne="Total Paid"
              titleTwo="Balance"
              valueOne={`₹ ${singleOverview.totalPaid || 0}`}
              valueTwo={`₹ ${Math.abs(
                group.group_type === "double"
                  ? Number(singleOverview.totalInvestment) -
                      Number(singleOverview.totalPaid) || 0
                  : Number(singleOverview.totalPayable) +
                      parseFloat(auctions[0]?.divident_head || "0") -
                      (Number(singleOverview.totalPaid) || 0)
              )}`}
              mainContainerStyle={styles.cContainerMainContainer}
            />
          </CSheetCard>
          <View style={styles.horizontalAligner}>
            <Text style={styles.headerTitle}>
              {PaymentsTexts.transactionDetails}
            </Text>
            <Link asChild href={{pathname:"/(drawer)/(tabs)/(payments)/filteredPayments",params:{
              groupId,
              userId:user,
              ticket
            }}}>
              <TouchableOpacity>
                <Text style={styles.headerTitle}>{General.viewMore}</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <CSheetCard borderWidth={0}>
            <FlatList
              ListEmptyComponent={
                <View>
                  <Text>No Data Found</Text>
                </View>
              }
              data={paymentDatas}
              renderItem={({ item }) => (
                <CListTile
                  mainContainerCustomStyle={styles.listTileMainContainer}
                  title={`${
                    item.receipt_no
                      ? `RCPT-${item.receipt_no}`
                      : item.old_receipt_no || ""
                  }`}
                  centeredTitle={
                    item?.pay_date
                      ? item.pay_date.split("-").reverse().join("-")
                      : "N/A"
                  }
                  trailingTitle={`₹ ${item.amount}`}
                />
              )}
              keyExtractor={(item, index) => item?._id || index.toString()}
              contentContainerStyle={{ paddingBottom: 500, flexGrow: 1 }}
            />
          </CSheetCard>
        </>
      )}
    </AppScreen>
  );
};
const styles = StyleSheet.create({
  mainHeader: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.light.primary.colorPrimaryVariant.colorThree,
    fontSize: 16,
    margin: 4,
  },
  cContainerMainContainer: {
    marginBottom: 10,
  },
  mainBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    borderRadius: 10,
  },
  boxContainerOne: {
    width: "48%",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: Colors.light.common.light.eighty,
  },
  boxContainerTwo: {
    alignItems: "center",
    width: "48%",
  },
  sheetChild: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: Colors.light.common.light.none,
    fontWeight: "bold",
    margin: 8,
  },
  listTileMainContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.light.primary.colorPrimaryVariant.colorFive.twenty,
  },
  horizontalAligner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default PaymentGroupInfo;
