mobile-screener-test

- Expo Router file-based navigation with a bottom tab layout (app/(tabs)/)
- Dashboard (index.tsx) — portfolio value card, market indices, watchlist, news feed
- Stock Screener (screener.tsx) — search bar, sector filter chips, sort chips, and a full stock list (all UI only, no filtering logic wired up)
- Settings (settings.tsx) — profile card, toggles for notifications/dark mode/biometrics, account & support rows
- Reusable components (StockRow, SectionHeader, SettingsRow) and a shared dark theme in constants/theme.ts
- All mock data centralized in data/placeholderData.ts (10 stocks, watchlist, indices, news, user profile)
- eas.json with development/preview/production build profiles, app.json configured for iOS/Android/web
