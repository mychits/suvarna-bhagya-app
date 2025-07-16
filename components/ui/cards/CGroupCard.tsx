import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CCardProps {
  title: string;
  subtext: string;
  description: string;
  onPress?: () => void;
  expandedContentHeaders: [string, string, string, string, string];
  expandContent?: {
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
  };
  enableExpand: boolean;
}

const CGroupCard = ({
  expandedContentHeaders,
  title,
  subtext,
  description,
  onPress,
  expandContent,
  enableExpand,
}: CCardProps) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.dashedLine} />

        <View style={styles.bottomRow}>
          <Text style={styles.subtext}>{subtext}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {enableExpand && expandContent && (
          <View style={styles.expandContainer}>
            <View style={styles.expandRow}>
              <Text style={styles.expandLabel}>
                {expandedContentHeaders[0]}:
              </Text>
              <Text style={styles.expandValue}>{expandContent.content1}</Text>
            </View>
            <View style={styles.expandRow}>
              <Text style={styles.expandLabel}>
                {expandedContentHeaders[1]}:
              </Text>
              <Text style={styles.expandValue}>{expandContent.content2}</Text>
            </View>
            <View style={styles.expandRow}>
              <Text style={styles.expandLabel}>
                {expandedContentHeaders[2]}:
              </Text>
              <Text style={styles.expandValue}>{expandContent.content3}</Text>
            </View>
            <View style={styles.expandRow}>
              <Text style={styles.expandLabel}>
                {expandedContentHeaders[3]}:
              </Text>
              <Text style={styles.expandValue}>{expandContent.content4}</Text>
            </View>
            <View style={styles.expandRow}>
              <Text style={styles.expandLabel}>
                {expandedContentHeaders[4]}:
              </Text>
              <Text style={styles.expandValue}>{expandContent.content5}</Text>
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.fullWidthButton} onPress={onPress}>
          <Ionicons
            name={enableExpand ? "chevron-up" : "chevron-down"}
            size={20}
            color="#fff"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.fullWidthButtonText}>
            {enableExpand ? "Collapse" : "Expand"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 10,
  },
  cardContainer: {
    borderRadius: 12,
    backgroundColor: Colors.light.common.light.eighty,
    borderColor: Colors.light.primary.colorPrimary.colorOne,
    borderWidth: 1.5,
    overflow: "hidden",
  },
  topRow: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.primary.colorPrimary.colorOne,
  },
  dashedLine: {
    borderStyle: "dashed",
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  bottomRow: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  subtext: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  description: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  expandContainer: {
    backgroundColor: Colors.light.common.light.eighty,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  expandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  expandLabel: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },
  expandValue: {
    fontSize: 13,
    color: "#666",
  },
  fullWidthButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    paddingVertical: 10,
  },
  fullWidthButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default CGroupCard;
