// import CSheetCard from "@/components/ui/cards/CSheetCard";
// import CListTile from "@/components/ui/Lists/CListTile";
// import Colors from "@/constants/Colors";
// import AppScreen from "@/layouts/AppScreen";
// import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
// import React, { useState } from "react";
// import { ScrollView, StyleSheet, View } from "react-native";
// const Profile = () => {
//   const [click, setClick] = useState(false);
//   const onTrailingIconTap = () => {
//     setClick(!click);
//   };
//   return (
//     <AppScreen>
//       <View style={{ paddingTop: 50 }}>
//         <CSheetCard
//           titleSize={10}
//           titleContainerBgColor={{ colorOne: "blue", colorTwo: "pink" }}
//           titleWeight="bold"
//           childPadding={0}
//           borderWidth={0}
//           backgroundColor={Colors.light.common.light.eighty}
//           headerIcon={<FontAwesome6 name="circle-user" size={50} color={Colors.light.common.light.none} />}
//         >
//           <ScrollView>
//            <View style={styles.blankContainer}/>
//             <CListTile
//               headerIcon={<MaterialIcons name="people" size={30} color={Colors.light.common.light.none} />}
//               trailingIcon={<MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.light.primary.colorPrimary.colorOne}/>}
//               title="profile"
//               onTrailingIconTap={onTrailingIconTap}
//               information="hello world"
//             />
//             <CListTile
//               headerIcon={<MaterialIcons name="people" size={30} color={Colors.light.common.light.none}  />}
//               trailingIcon={<MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.light.primary.colorPrimary.colorOne} />}
//               title="profile"
//             />
//           </ScrollView>
//         </CSheetCard>
//       </View>
//     </AppScreen>
//   );
// };
// const styles = StyleSheet.create({
//   blankContainer:{
//     height:100
//   }
// })
// export default Profile;
import CSheetCard from "@/components/ui/cards/CSheetCard";
import Colors from "@/constants/Colors";
import AppScreen from "@/layouts/AppScreen";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { UserContext } from "@/context/UserContext";
import useAxios from "@/hooks/useAxios";
import useCContext from "@/hooks/useCContext";
import { router } from "expo-router";

const Profile = () => {
  const { user } = useCContext(UserContext);
  const [expanded, setExpanded] = useState(false);

  const {
    apiState: { response: userData, loading, errors: axiosErrors },
    fetchApiData: fetchUserDataRequest,
  } = useAxios();

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (user) {
      fetchUserDataRequest({
        url: `user/get-user-by-id/${user}`,
        method: "GET",
      });
    }
  }, []);

  return (
    <AppScreen>
      <View style={styles.container}>
        <CSheetCard
          titleSize={18}
          titleWeight="bold"
          childPadding={15}
          borderWidth={0}
          backgroundColor={Colors.light.common.light.eighty}
          headerIcon={
            <MaterialIcons
              size={60}
              color={Colors.light.common.light.none}
              name={"perm-identity"}
              style={styles.profileHeaderIcon}
            />
          }
        >
          <ScrollView style={styles.contentScrollView}>
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={toggleAccordion}
              activeOpacity={0.8}
            >
              <View style={styles.headerLeft}>
                <MaterialIcons
                  name="person"
                  size={28}
                  color={Colors.light.primary.colorPrimary.colorOne}
                />
                <Text style={styles.headerTitle}>Profile Details</Text>
              </View>
              <MaterialIcons
                name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={28}
                color={Colors.light.primary.colorPrimary.colorOne}
              />
            </TouchableOpacity>

            {expanded && (
              <View style={styles.accordionContent}>
                {loading ? (
                   <ActivityIndicator
          size={50}
          color={Colors.light.primary.colorOnPrimary.colorOne}
        />
                ) : axiosErrors ? (
                  <Text style={[styles.accordionText, { color: "red" }]}>
                    Error: {axiosErrors}
                  </Text>
                ) : userData && Object.keys(userData).length > 0 ? (
                  <>
                    <Text style={styles.accordionText}>
                      Name: {userData.full_name || "N/A"}
                    </Text>
                    <Text style={styles.accordionText}>
                      Email: {userData.email || "N/A"}
                    </Text>
                    <Text style={styles.accordionText}>
                      Phone: {userData.phone_number || "N/A"}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.accordionText}>
                    No user data available.
                  </Text>
                )}
              </View>
            )}

            <TouchableOpacity
              style={styles.accordionHeader}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <View style={styles.headerLeft}>
                <MaterialIcons
                  name="settings"
                  size={28}
                  color={Colors.light.primary.colorPrimary.colorOne}
                />
                <Text style={styles.headerTitle}>Settings</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color={Colors.light.primary.colorPrimary.colorOne}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.accordionHeader}
              activeOpacity={0.8}
              onPress={() => {router.push("/(drawer)/(tabs)/home")}}
            >
              <View style={styles.headerLeft}>
                <MaterialIcons
                  name="home"
                  size={28}
                  color={Colors.light.primary.colorPrimary.colorOne}
                />
                <Text style={styles.headerTitle}>Home</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color={Colors.light.primary.colorPrimary.colorOne}
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={styles.accordionHeader}
                activeOpacity={0.8}
                onPress={() => router.navigate("/(drawer)/(tabs)/myGroups")}
              >
                <View style={styles.headerLeft}>
                  <MaterialIcons
                    name="group"
                    size={28}
                    color={Colors.light.primary.colorPrimary.colorOne}
                  />
                  <Text style={styles.headerTitle}>My Groups</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={28}
                  color={Colors.light.primary.colorPrimary.colorOne}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.accordionHeader}
                activeOpacity={0.8}
                onPress={() => router.navigate("/(drawer)/(tabs)/(payments)")}
              >
                <View style={styles.headerLeft}>
                  <MaterialIcons
                    name="payment"
                    size={28}
                    color={Colors.light.primary.colorPrimary.colorOne}
                  />
                  <Text style={styles.headerTitle}>Payments</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={28}
                  color={Colors.light.primary.colorPrimary.colorOne}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </CSheetCard>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  contentScrollView: {
    marginTop: 40,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.light.common.light.none,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    color: "#333",
  },
  accordionContent: {
    backgroundColor: Colors.light.common.light.none,
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  accordionText: {
    fontSize: 15,
    color: "#555",
    marginBottom: 8,
  },
  profileHeaderIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default Profile;
