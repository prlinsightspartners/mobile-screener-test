import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "../../constants/theme";
import StockRow from "../../components/StockRow";
import { placeholderStocks, placeholderFilters } from "../../data/placeholderData";

export default function ScreenerScreen() {
  const [activeSector, setActiveSector] = useState("All");
  const [activeSort, setActiveSort] = useState("Market Cap");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Stock Screener</Text>
        <Text style={styles.subtitle}>Placeholder data — filtering not yet functional</Text>
      </View>

      {/* Search bar (UI only) */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={Colors.textMuted} />
        <TextInput
          placeholder="Search ticker or company"
          placeholderTextColor={Colors.textMuted}
          style={styles.searchInput}
          editable={false}
        />
        <Ionicons name="options-outline" size={18} color={Colors.textMuted} />
      </View>

      {/* Sector filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsScroll}
        contentContainerStyle={styles.chipsRow}
      >
        {placeholderFilters.sectors.map((sector) => {
          const active = sector === activeSector;
          return (
            <Pressable
              key={sector}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => setActiveSector(sector)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{sector}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Sort row */}
      <View style={styles.sortRow}>
        <Text style={styles.resultsCount}>{placeholderStocks.length} results</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.sortChipsRow}>
            {placeholderFilters.sortOptions.map((sort) => {
              const active = sort === activeSort;
              return (
                <Pressable
                  key={sort}
                  style={[styles.sortChip, active && styles.sortChipActive]}
                  onPress={() => setActiveSort(sort)}
                >
                  <Text style={[styles.sortChipText, active && styles.sortChipTextActive]}>
                    {sort}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Stock list */}
      <FlatList
        data={placeholderStocks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <StockRow stock={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginHorizontal: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 14,
  },
  chipsScroll: {
    maxHeight: 44,
    marginBottom: Spacing.sm,
  },
  chipsRow: {
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
  },
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderRadius: Radius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: Spacing.sm,
  },
  chipActive: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },
  chipText: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
  sortRow: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
  },
  resultsCount: {
    color: Colors.textMuted,
    fontSize: 12,
    marginBottom: Spacing.sm,
  },
  sortChipsRow: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  sortChip: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
    borderRadius: Radius.sm,
    backgroundColor: Colors.surfaceAlt,
    marginRight: Spacing.sm,
  },
  sortChipActive: {
    backgroundColor: "rgba(59,130,246,0.2)",
  },
  sortChipText: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
  sortChipTextActive: {
    color: Colors.accent,
  },
  listContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
  },
});
