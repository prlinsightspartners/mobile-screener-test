import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Colors, Spacing, Radius } from "../../constants/theme";
import SectionHeader from "../../components/SectionHeader";
import SettingsRow from "../../components/SettingsRow";
import { placeholderUser } from "../../data/placeholderData";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [biometrics, setBiometrics] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Settings</Text>

        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {placeholderUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Text>
          </View>
          <View>
            <Text style={styles.profileName}>{placeholderUser.name}</Text>
            <Text style={styles.profileEmail}>{placeholderUser.email}</Text>
            <View style={styles.planBadge}>
              <Text style={styles.planBadgeText}>{placeholderUser.plan}</Text>
            </View>
          </View>
        </View>

        <SectionHeader title="Account" />
        <SettingsRow icon="person-outline" label="Edit Profile" />
        <SettingsRow icon="card-outline" label="Subscription" value={placeholderUser.plan} />
        <SettingsRow icon="lock-closed-outline" label="Security" />

        <SectionHeader title="Preferences" />
        <SettingsRow
          icon="notifications-outline"
          label="Push Notifications"
          type="switch"
          switchValue={notifications}
          onSwitchChange={setNotifications}
        />
        <SettingsRow
          icon="trending-up-outline"
          label="Price Alerts"
          type="switch"
          switchValue={priceAlerts}
          onSwitchChange={setPriceAlerts}
        />
        <SettingsRow
          icon="moon-outline"
          label="Dark Mode"
          type="switch"
          switchValue={darkMode}
          onSwitchChange={setDarkMode}
        />
        <SettingsRow
          icon="finger-print-outline"
          label="Biometric Login"
          type="switch"
          switchValue={biometrics}
          onSwitchChange={setBiometrics}
        />

        <SectionHeader title="Data & Display" />
        <SettingsRow icon="cash-outline" label="Currency" value="USD" />
        <SettingsRow icon="stats-chart-outline" label="Default Chart Range" value="1D" />
        <SettingsRow icon="language-outline" label="Language" value="English" />

        <SectionHeader title="Support" />
        <SettingsRow icon="help-circle-outline" label="Help Center" />
        <SettingsRow icon="document-text-outline" label="Terms & Privacy" />
        <SettingsRow icon="information-circle-outline" label="App Version" value="1.0.0" />

        <Text style={styles.footerNote}>
          Stock Screener App · Member since {placeholderUser.memberSince}
        </Text>

        <View style={{ height: Spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: "700",
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    gap: Spacing.md,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: Radius.full,
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  profileName: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  profileEmail: {
    color: Colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
  },
  planBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(59,130,246,0.15)",
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  planBadgeText: {
    color: Colors.accent,
    fontSize: 11,
    fontWeight: "700",
  },
  footerNote: {
    color: Colors.textMuted,
    fontSize: 11,
    textAlign: "center",
    marginTop: Spacing.lg,
  },
});
