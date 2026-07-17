import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Colors, Spacing, Radius } from "../../constants/theme";
import SectionHeader from "../../components/SectionHeader";
import StockRow from "../../components/StockRow";
import {
  portfolioSummary,
  placeholderMarketIndices,
  placeholderNews,
  placeholderUser,
  placeholderWatchlist,
} from "../../data/placeholderData";

export default function DashboardScreen() {
  const p = portfolioSummary;
  const isPositiveDay = p.todayChangePercent >= 0;
  const isPositiveTotal = p.totalGainPercent >= 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>{placeholderUser.name}</Text>
          </View>
        </View>

        {/* Portfolio summary card */}
        <View style={styles.portfolioCard}>
          <Text style={styles.portfolioLabel}>Total Portfolio Value</Text>
          <Text style={styles.portfolioValue}>
            ${p.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Text>
          <View style={styles.portfolioMetaRow}>
            <View
              style={[
                styles.changePill,
                { backgroundColor: isPositiveDay ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)" },
              ]}
            >
              <Text
                style={[
                  styles.changePillText,
                  { color: isPositiveDay ? Colors.positive : Colors.negative },
                ]}
              >
                {isPositiveDay ? "+" : ""}
                {p.todayChangePercent.toFixed(2)}% today
              </Text>
            </View>
            <Text style={styles.portfolioSub}>
              {isPositiveTotal ? "+" : ""}
              ${Math.abs(p.totalGainAbs).toLocaleString()} all-time
            </Text>
          </View>
        </View>

        {/* Market indices */}
        <SectionHeader title="Market Overview" />
        <View style={styles.indicesRow}>
          {placeholderMarketIndices.map((idx) => {
            const positive = idx.changePercent >= 0;
            return (
              <View key={idx.id} style={styles.indexCard}>
                <Text style={styles.indexName}>{idx.name}</Text>
                <Text style={styles.indexValue}>{idx.value}</Text>
                <Text
                  style={[
                    styles.indexChange,
                    { color: positive ? Colors.positive : Colors.negative },
                  ]}
                >
                  {positive ? "+" : ""}
                  {idx.changePercent.toFixed(2)}%
                </Text>
              </View>
            );
          })}
        </View>

        {/* Watchlist */}
        <SectionHeader title="Your Watchlist" action="See all" />
        {placeholderWatchlist.map((stock) => (
          <StockRow key={stock.id} {...stock} />
        ))}

        {/* News */}
        <SectionHeader title="Market News" />
        {placeholderNews.map((item) => (
          <View key={item.id} style={styles.newsCard}>
            <Text style={styles.newsHeadline} numberOfLines={2}>
              {item.headline}
            </Text>
            <Text style={styles.newsMeta}>
              {item.source} · {item.timeAgo}
            </Text>
          </View>
        ))}

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  greeting: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  userName: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: "700",
  },
  portfolioCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  portfolioLabel: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginBottom: 6,
  },
  portfolioValue: {
    color: Colors.textPrimary,
    fontSize: 32,
    fontWeight: "800",
    marginBottom: Spacing.sm,
  },
  portfolioMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  changePill: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  changePillText: {
    fontSize: 12,
    fontWeight: "700",
  },
  portfolioSub: {
    color: Colors.textMuted,
    fontSize: 12,
  },
  indicesRow: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  indexCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.sm,
  },
  indexName: {
    color: Colors.textMuted,
    fontSize: 11,
    marginBottom: 4,
  },
  indexValue: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  indexChange: {
    fontSize: 12,
    fontWeight: "600",
  },
  newsCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  newsHeadline: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  newsMeta: {
    color: Colors.textMuted,
    fontSize: 12,
  },
});
