import Colors from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
type ListTileProps = {
  headerIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  title: string;
  information?: string;
  extendedInformation?: string;
  onTrailingIconTap?: () => void;
  trailingTitle?: string;
  centeredTitle?: string;
  borderTopWidth?: number;
  mainContainerCustomStyle?: StyleProp<ViewStyle>;
};
const CListTile: React.FC<ListTileProps> = ({
  mainContainerCustomStyle,
  headerIcon,
  trailingIcon,
  title,
  extendedInformation,
  onTrailingIconTap,
  trailingTitle,
  centeredTitle,
  borderTopWidth = 1,
}) => {
  return (
    <View>
      <View
        style={[
          mainContainerCustomStyle,
          styles.mainContainer,
          {
            
            borderColor: Colors.light.primary.colorPrimaryVariant.colorOne,
          },
        ]}
      >
        <View style={styles.subContainer}>
          {!!headerIcon && <View style={styles.headerIcon}>{headerIcon}</View>}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.centeredTitleContainer}>
          {!!centeredTitle && <Text style={styles.centeredTitle}>{centeredTitle}</Text>}
        </View>

        {!!trailingIcon && (
          <TouchableOpacity
            style={styles.trailingIcon}
            onPress={onTrailingIconTap}
          >
            {trailingIcon}
          </TouchableOpacity>
        )}
        {!!trailingTitle && (
          <TouchableOpacity style={styles.trailingTitleContainer}>
            <Text style={styles.trailingTitle}>{trailingTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      {!!extendedInformation && <Text>{extendedInformation}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3.3%",
  },
  headerIcon: {
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    borderRadius: "50%",
  },
  subContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  title: {
    fontWeight: "bold",

    height: "100%",
     color:Colors.light.primary.colorPrimaryVariant.colorThree

  },
  centeredTitleContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredTitle:{
 color:Colors.light.primary.colorPrimaryVariant.colorThree,
    fontWeight:"bold"

  },
  trailingTitleContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
   
  },
  trailingTitle:{
    fontWeight:"bold",
    color:Colors.light.primary.colorPrimaryVariant.colorThree

  },
  trailingIcon: {
    width: "33%",
    justifyContent: "center",
  },
});
export default CListTile;
