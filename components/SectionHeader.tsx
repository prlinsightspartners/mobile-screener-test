import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors, Spacing } from "../constants/theme";

interface SectionHeaderProps {
  title: string;
  action?: string;
  onActionPress?: () => void;
}

export default function SectionHeader({ title, action, onActionPress }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {action ? (
        <Pressable onPress={onActionPress} style={({ pressed }) => [styles.actionButton, pressed && styles.actionButtonPressed]}>
          <Text style={styles.actionText}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  actionButton: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  actionButtonPressed: {
    opacity: 0.7,
  },
  actionText: {
    color: Colors.accent,
    fontSize: 13,
    fontWeight: "700",
  },
});
