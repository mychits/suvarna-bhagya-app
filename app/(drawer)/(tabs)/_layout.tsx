import AppBar from "@/components/appBars/AppBar";
import TabBar from "@/components/tabBars/TabBar";
import CBackButton from "@/components/ui/buttons/CBackButton";
import CChip from "@/components/ui/chips/CChip";
import Colors from "@/constants/Colors";
import { General } from "@/data/Data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <CBackButton />,
        headerBackground() {
          return <AppBar />;
        },
        headerRight(props) {
          return (
            <CChip
              title={General.needHelp}
              icon={<MaterialCommunityIcons name="information" size={20} />}
            />
          );
        },
        tabBarBackground() {
          return <TabBar />;
        },
        animation: "shift",
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.light.common.light.none,
      }}
      screenListeners={{
        tabPress: () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerLeft: () => null,
          headerTitle: General.emptyText,
          tabBarIcon({ focused, color, size }) {
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
        }}
      />

      <Tabs.Screen
        name="(groups)"
        options={{
          tabBarItemStyle: styles.tabBarItemDisplayNone,
          title: General.emptyText,
          tabBarIconStyle: styles.tabBarItemDisplayNone,
        }}
      />
      <Tabs.Screen
        name="myGroups"
        options={{
          title: General.myGroups,
          headerTitle: General.emptyText,
          tabBarIcon({ size, color }) {
            return (
              <MaterialCommunityIcons
                name="account-multiple-check-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="(payments)"
        options={{
          headerTitle: General.emptyText,
          title: General.payments,
          tabBarIcon({ focused, color, size }) {
            return (
              <MaterialCommunityIcons
                name="receipt"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          headerTitle: General.emptyText,
          tabBarIcon({ size, color }) {
            return (
              <MaterialCommunityIcons name="more" size={size} color={color} />
            );
          },
        }}
        
        listeners={({navigation})=>({
          tabPress:(e)=>{
            e.preventDefault();
            navigation.openDrawer();
          }
        })}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: General.emptyText,
          tabBarIcon({ size, color }) {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
  },
  tabBarItemDisplayNone: {
    display: "none",
  },
});
export default TabLayout;
