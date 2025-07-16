import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
 

  const drawerItems: { label: string; icon: any; route: any }[] = [
    { label: "Home", icon: "home", route: "/(drawer)/(tabs)/home" },
    {
      label: "My Groups",
      icon: "account-group-outline",
      route: "/(drawer)/(tabs)/myGroups",
    },
    {
      label: "Payments",
      icon: "credit-card-multiple-outline",
      route: "/(drawer)/(tabs)/(payments)",
    },
    {
      label: "Profile",
      icon: "account-outline",
      route: "(drawer)/(tabs)/profile",
    },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}
    >
      <View style={styles.drawerHeader}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => props.navigation.closeDrawer()}
        >
          <MaterialCommunityIcons
            name="close"
            size={28}
            color={Colors.light.primary.colorOnPrimary.colorOne}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerItemsContainer}>
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.drawerItem}
            onPress={() => router.push(item.route)}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={24}
              color={Colors.light.primary.colorOnPrimary.colorOne}
            />
            <Text style={styles.drawerLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const RootDrawer = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenListeners={{
        drawerItemPress: () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: Colors.light.primary.colorPrimaryVariant.colorThree,
    padding: 6,
    borderRadius: 20,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: Colors.light.primary.colorPrimary.colorTwo,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.light.primary.colorPrimaryVariant.colorOne,
    marginBottom: 10,
  },
  userName: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    fontSize: 18,
    fontWeight: "600",
  },
  drawerItemsContainer: {
    marginTop: 10,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.light.primary.colorPrimaryVariant.colorThree,
    marginVertical: 5,
  },
  drawerLabel: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "500",
  },
});

export default RootDrawer;
