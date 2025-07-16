import CButton from "@/components/ui/buttons/CButton";
import { LoginContext } from "@/context/LoginContext";
import { UserContext } from "@/context/UserContext";
import { nodeApis } from "@/data/api";
import { LoginComponents } from "@/data/Components";
import { General } from "@/data/Data";
import useAxios from "@/hooks/useAxios";
import useCContext from "@/hooks/useCContext";
import shortToast from "@/utils/Toast";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
const MultiStepLogin = () => {
  const { direction, setDirection, formData } = useCContext(LoginContext);
  const { setUser } = useCContext(UserContext);
  const { apiState, fetchApiData } = useAxios();
  const componentsLength = LoginComponents.length - 1;
  const onContinue = () => {
    setDirection((prev) => Math.min(prev + 1, componentsLength));
  };
  const onLoginHandler = async () => {
    try {
      const response = await fetchApiData({
        url: nodeApis.user.post.login,
        method: "POST",
        data: {
          phone_number: formData.phone_number,
          password: formData.password,
        },
      });
      if (response) {
        const responseUser = response?.userId;
        {
          setUser(responseUser);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          router.replace("/(drawer)/(tabs)/home");
        }
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        if (apiState.errors?.includes("404")) {
          shortToast(General.userNotFound);
        } else if (apiState.errors?.includes("401")) {
          shortToast(General.invalidPassword);
        } else if (apiState.errors) {
          shortToast(General.somethingWentWrong);
        } else {
          shortToast(General.somethingWentWrong);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg =
          error.message || "Please check your internet connection!";
        ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
        console.log(error, "error data");
      }
    }
  };
  return (
    <View style={styles.mainContainer}>
      {LoginComponents[direction]}

      {direction === componentsLength ? (
        <CButton
          disabled={apiState.loading}
          title={General.login}
          onPressHandler={onLoginHandler}
        />
      ) : (
        <CButton title={General.continue} onPressHandler={onContinue} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    gap: 20,
  },
});
export default MultiStepLogin;
