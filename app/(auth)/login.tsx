import WelcomeImage from "@/assets/images/additional/welcome.svg";
import CLinkButton from "@/components/ui/buttons/CLinkButton";
import CAuthCard from "@/components/ui/cards/CAuthCard";
import Colors from "@/constants/Colors";
import { LoginContext } from "@/context/LoginContext";
import { General, WhiteSpaceCharacters } from "@/data/Data";
import useCContext from "@/hooks/useCContext";
import AuthScreen from "@/layouts/AuthScreen";
import MultiStepLogin from "@/navigator/MultiStepLogin";
import React, { useEffect } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
const screenWidth = Dimensions.get("window").width;

const Login = () => {
  const { setDirection } = useCContext(LoginContext);
  useEffect(() => {
    setDirection(0);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
    >
      <AuthScreen>
        <CAuthCard headerTitle={General.login}>
          <MultiStepLogin />
          <View style={styles.linkContainer}>
            <Text style={styles.linkAsideText}>
              {General.dontHaveAnAccount}
            </Text>
            <CLinkButton
              href={"/(auth)/register"}
              title={WhiteSpaceCharacters.singleSpace + General.register}
            />
          </View>
        </CAuthCard>
        <WelcomeImage style={styles.welcomeImage} />
      </AuthScreen>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  welcomeImage: {
    position: "absolute",
    width: 188,
    height: 44,
    left: screenWidth / 2 - 188 / 2,
    top: -44 / 2,
    zIndex: 1,
    pointerEvents: "none",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  linkAsideText: {
    fontWeight: "semibold",
    color: Colors.light.primary.colorOnPrimary.colorOne,
  },
});

export default Login;
