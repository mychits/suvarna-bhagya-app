import CSheetCard from "@/components/ui/cards/CSheetCard";
import CListTile from "@/components/ui/Lists/CListTile";
import Colors from "@/constants/Colors";
import { General } from "@/data/Data";
import useAxios from "@/hooks/useAxios";
import AppScreen from "@/layouts/AppScreen";
import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
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
const FilteredPayments = () => {
  const params = useLocalSearchParams();
  const { apiState, fetchApiData } = useAxios();
  const { groupId, ticket, userId } = params as {
    groupId: string;
    ticket: string;
    userId: string;
  };

  const [groups, setGroups] = useState<any>({});
  const [paymentData, setPaymentData] = useState<IPaymentData[]>([]);
  const [dates, setDates] = useState({
    fromDate: new Date(),
    toDate: new Date(),
  });
  const [open, setOpen] = useState({
    fromDatePicker: false,
    toDatePicker: false,
  });

  const fetchGroups = async () => {
    try {
      const responseData = await fetchApiData({
        url: `/group/get-by-id-group/${groupId}`,
        method: "GET",
      });
      if (responseData) setGroups(responseData);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const fetchPayments = async () => {
    try {
      const responseData = await fetchApiData({
        url: "/payment/payment-list",
        method: "POST",
        data: {
          groupId,
          userId,
          ticket,
          from: dates.fromDate.toISOString().split("T")[0],
          to: dates.toDate.toISOString().split("T")[0],
        },
      });
      const innerResponseData = responseData.data;
      if (responseData && innerResponseData) setPaymentData(innerResponseData);
    } catch (error) {
      setPaymentData([])
      console.error("Error fetching payments:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
    fetchPayments();
  }, []);

  useEffect(() => {
    fetchPayments();
  }, [dates]);

  const handleDateChange = (
    event: any,
    selectedDate?: Date,
    type?: "from" | "to"
  ) => {
    if (selectedDate) {
      setDates((prev) => ({
        ...prev,
        [type === "from" ? "fromDate" : "toDate"]: selectedDate,
      }));
    }
    setOpen((prev) => ({
      ...prev,
      fromDatePicker: false,
      toDatePicker: false,
    }));
  };

  return (
    <AppScreen>
      <CSheetCard stroke={Colors.light.common.light.none}>
        <TouchableOpacity
        style={styles.inputContainer}
          onPress={() => setOpen((prev) => ({ ...prev, fromDatePicker: true }))}
        >
          <Ionicons name="calendar-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder={General.fromDate}
            value={dates.fromDate.toDateString()}
            editable={false}
            style={styles.input}
            placeholderTextColor="#999"
            
          />
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.inputContainer}
          onPress={() => setOpen((prev) => ({ ...prev, toDatePicker: true }))}
        >
          <Ionicons name="calendar-outline" size={20} color="#888" style={styles.icon} />

          <TextInput
            placeholder={General.toDate}
            value={dates.toDate.toDateString()}
            editable={false}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </TouchableOpacity>
      </CSheetCard>

      {open.fromDatePicker && (
        <RNDateTimePicker
          value={dates.fromDate}
          mode="date"
          display="default"
          onChange={(event, date) => handleDateChange(event, date, "from")}
        />
      )}

     
      {open.toDatePicker && (
        <RNDateTimePicker
          value={dates.toDate}
          mode="date"
          display="default"
          onChange={(event, date) => handleDateChange(event, date, "to")}
        />
      )}
        <View style={{margin:10}}/>
      <CSheetCard stroke={Colors.light.common.light.none}>
        {apiState.loading ? (
          <Text style={styles.loading}>Loading payments...</Text>
        ) : paymentData.length > 0 ? (
          <FlatList
            data={paymentData}
            keyExtractor={(item) => item._id?.toString()}
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
          />
        ) : (
          <Text style={styles.noData}>
            No payments found for selected dates.
          </Text>
        )}
      </CSheetCard>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
   inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  loading: {
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "600",
    fontSize: 16,
    color: "#555",
  },
  noData: {
    textAlign: "center",
    color: "#888",
    marginVertical: 20,
    fontSize: 16,
  },
   icon: {
    marginRight: 8,
  },

  listTileMainContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.light.primary.colorPrimaryVariant.colorFive.twenty,
  },
});

export default FilteredPayments;
