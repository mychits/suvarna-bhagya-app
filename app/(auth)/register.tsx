import WelcomeImage from "@/assets/images/additional/welcome.svg";
import CLinkButton from "@/components/ui/buttons/CLinkButton";
import CAuthCard from "@/components/ui/cards/CAuthCard";
import Colors from "@/constants/Colors";
import { RegisterContext } from "@/context/RegisterContext";
import { General, WhiteSpaceCharacters } from "@/data/Data";
import useCContext from "@/hooks/useCContext";
import AuthPage from "@/layouts/AuthScreen";
import MultiStepRegister from "@/navigator/MutiStepRegister";
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

const Register = () => {
  const { setDirection } = useCContext(RegisterContext);
  useEffect(() => {
    setDirection(0);
  }, []);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      
      <AuthPage>
        <CAuthCard headerTitle={General.register}>
          <MultiStepRegister />
          <View style={styles.linkContainer}>
            <Text style={styles.linkAsideText}>
              {General.alreadyHaveAnAccount}
            </Text>
            <CLinkButton
              href={"/(auth)/login"}
              title={WhiteSpaceCharacters.singleSpace + General.login}
            />
          </View>
        </CAuthCard>
        <WelcomeImage style={styles.welcomeImage} />
      </AuthPage>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    position: "relative",
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

export default Register;
