import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "../constants/theme";

interface SettingsRowProps {
  icon: string;
  label: string;
  value?: string;
  type?: "switch";
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

export default function SettingsRow({
  icon,
  label,
  value,
  type,
  switchValue,
  onSwitchChange,
}: SettingsRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.labelGroup}>
        <Ionicons name={icon as any} size={20} color={Colors.accent} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      {type === "switch" ? (
        <Switch
          value={switchValue ?? false}
          onValueChange={onSwitchChange}
          thumbColor={switchValue ? Colors.accent : Colors.surfaceAlt}
          trackColor={{ false: Colors.border, true: Colors.accent }}
        />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: Spacing.sm,
  },
  label: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  value: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});
