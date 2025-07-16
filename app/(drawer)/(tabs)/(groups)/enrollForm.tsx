import CSingularButton from "@/components/ui/buttons/CSingularButton";
import CCard from "@/components/ui/cards/CCard";
import CCardContent from "@/components/ui/cards/CCardContent";
import CSheetCard from "@/components/ui/cards/CSheetCard";
import Colors from "@/constants/Colors";
import useAxios from "@/hooks/useAxios";
import AppScreen from "@/layouts/AppScreen";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const EnrollForm = () => {
  const queryParams = useLocalSearchParams();
  const { apiState, fetchApiData } = useAxios();
   const { groupId, userId } = queryParams as {groupId:string, userId:string};
  const [cardsData, setCardsData] = useState({group_name:"",group_value:"",group_duration:"",group_install:""});
  const [availableTickets, setAvailableTickets] = useState([]);
  const [ticketCount, setTicketCount] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNextTickets() {
      if (groupId) {
        try {
          const responseData = fetchApiData({
            url: `/enroll/get-next-tickets/${groupId}`,
          });
          if(responseData){

            setAvailableTickets(responseData.availableTickets || []);
          }
        } catch (error) {
          setAvailableTickets([])
          console.error("Error occurred", error);
        }
      }
    }
    fetchNextTickets();
  }, [groupId]);
  async function fetchGroupData() {
    try {
      const res = await fetch(`/group/get-by-id-group/${groupId}`);
      const data = await res.json();
      setCardsData(data);
    } catch (err) {
      console.error("Failed to fetch group:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleEnroll = async () => {
    const ticketEntries = availableTickets
      .slice(0, ticketCount)
      .map((ticketNumber) => ({
        group_id: groupId,
        user_id: userId,
        no_of_tickets: ticketCount,
        tickets: ticketNumber,
      }));

    try {
      for (const entry of ticketEntries) {
        await axios.post(`/enroll/add-enroll`, entry);
      }
     
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  return (
    <AppScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CSheetCard
          title={cardsData.group_name}
          titleSize={20}
          titleWeight="bold"
          titleColor={Colors.light.primary.colorPrimary.colorOne}
          stroke={Colors.light.primary.colorPrimaryVariant.colorOne}
          titleContainerBgColor={Colors.light.common.yellowGradientOne}
          childPadding={14}
          marginTop={20}
        >
          <CCard
            stroke={Colors.light.common.light.none}
            backgroundColor={
              Colors.light.secondary.colorSecondaryVariant.colorOne
            }
            componentOne={
              <CCardContent
                title={`₹ ${cardsData.group_value}`}
                titleColor={Colors.light.primary.colorOnPrimary.colorOne}
                subtitle={`${cardsData.group_duration} Months | ₹${cardsData.group_install}/month`}
                images={[
                  {
                    uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    width: 40,
                    height: 40,
                  },
                ]}
              />
            }
          />
        </CSheetCard>

        {/* Ticket Counter */}
        <View style={styles.counterSection}>
          <Text style={styles.sectionTitle}>Number of Tickets</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={() => setTicketCount(Math.max(1, ticketCount - 1))}
              style={styles.counterButton}
            >
              <AntDesign name="minus" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.counterText}>{ticketCount}</Text>
            <TouchableOpacity
              onPress={() =>
                setTicketCount(
                  Math.min(availableTickets.length, ticketCount + 1)
                )
              }
              style={styles.counterButton}
            >
              <AntDesign name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Terms and Privacy */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setTermsAccepted(!termsAccepted)}
          >
            <View
              style={[
                styles.checkboxBox,
                termsAccepted && styles.checkboxChecked,
              ]}
            >
              {termsAccepted && (
                <AntDesign name="check" size={14} color="#fff" />
              )}
            </View>
            <Text style={styles.checkboxLabel}>Accept Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setPrivacyAccepted(!privacyAccepted)}
          >
            <View
              style={[
                styles.checkboxBox,
                privacyAccepted && styles.checkboxChecked,
              ]}
            >
              {privacyAccepted && (
                <AntDesign name="check" size={14} color="#fff" />
              )}
            </View>
            <Text style={styles.checkboxLabel}>Accept Privacy Policy</Text>
          </TouchableOpacity>
        </View>

       
        <CSingularButton
          onPressHandler={handleEnroll}
          disabled={
            !termsAccepted || !privacyAccepted || availableTickets.length === 0
          }
          buttonText="Enroll Now"
          iconName="arrowright"
          iconColor="#fff"
          colors={
            !termsAccepted || !privacyAccepted || availableTickets.length === 0
              ? ["#ccc", "#ddd"]
              : [
                  Colors.light.primary.colorPrimary.colorOne,
                  Colors.light.primary.colorPrimaryVariant.colorThree,
                ]
          }
        />
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    fontSize: 16,
    color: Colors.light.primary.colorPrimary.colorOne,
  },
  counterSection: {
    marginTop: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.primary.colorPrimary.colorOne,
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  counterButton: {
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    padding: 10,
    borderRadius: 50,
  },
  counterText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.primary.colorPrimary.colorOne,
  },
  checkboxContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Colors.light.primary.colorPrimary.colorOne,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
  },
  checkboxLabel: {
    fontSize: 14,
    color: Colors.light.primary.colorPrimary.colorOne,
  },
});

export default EnrollForm;
