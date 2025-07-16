import CButton from "@/components/ui/buttons/CButton";
import { RegisterContext } from "@/context/RegisterContext";
import { RegisterComponents } from "@/data/Components";
import { General } from "@/data/Data";
import useCContext from "@/hooks/useCContext";
import React from "react";
import { StyleSheet, View } from "react-native";

const MutiStepRegister = () => {
  const { direction, setDirection } = useCContext(RegisterContext);
  const TotalRegisterComponentsLength = RegisterComponents.length-1;
  const onContinue = () => {
    setDirection((prev) => Math.min(prev+1, TotalRegisterComponentsLength));
  };
  return (
    <View style={styles.mainContainer}>
      {RegisterComponents[direction]}

      {direction === TotalRegisterComponentsLength ? (
        <CButton
          title={General.register}
          onPressHandler={() => console.log("")}
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
export default MutiStepRegister;
