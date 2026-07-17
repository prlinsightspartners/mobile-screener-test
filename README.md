# Stock Screener App

A React Native + Expo (SDK 54) mobile app scaffold for a stock screener, with three main sections:

- **Dashboard** — portfolio summary, market indices, watchlist, and news (placeholder data)
- **Stock Screener** — searchable/filterable stock list UI (filtering not yet wired up)
- **Settings** — account, preferences, and app info

> ⚠️ This is a UI scaffold only. All stock data is static placeholder data in `data/placeholderData.ts`. No live market data, search, filtering, or auth logic has been implemented yet.

## Tech Stack

- Expo SDK 54
- Expo Router (file-based navigation, tabs layout)
- React Native 0.76
- TypeScript
- EAS Build configured (`eas.json`)

## Project Structure

```
app/
  _layout.tsx          # Root stack layout
  (tabs)/
    _layout.tsx         # Bottom tab navigator (Dashboard / Screener / Settings)
    index.tsx           # Dashboard screen
    screener.tsx         # Stock Screener screen
    settings.tsx         # Settings screen
components/
  StockRow.tsx           # Reusable stock list row
  SectionHeader.tsx       # Section title + action label
  SettingsRow.tsx         # Settings list row (arrow or switch)
constants/
  theme.ts               # Colors, spacing, radius tokens
data/
  placeholderData.ts     # All mock/placeholder data
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npx expo start
   ```

3. Run on a device/simulator:
   ```bash
   npm run ios      # iOS simulator
   npm run android  # Android emulator
   npm run web      # Web
   ```

## EAS Build

This project includes an `eas.json` with `development`, `preview`, and `production` build profiles.

1. Install the EAS CLI (if you haven't already):
   ```bash
   npm install -g eas-cli
   ```

2. Log in:
   ```bash
   eas login
   ```

3. Configure your project (creates/links an EAS project ID):
   ```bash
   eas init
   ```
   Then update `extra.eas.projectId` in `app.json` if needed.

4. Build:
   ```bash
   eas build --profile preview --platform android
   eas build --profile preview --platform ios
   ```

## Next Steps (Not Yet Implemented)

- Wire up real stock market data (API integration)
- Implement search and filter logic on the Screener tab
- Add stock detail screen with charts
- Add authentication and persist user settings
- Connect portfolio data to a backend or brokerage API
- Add pull-to-refresh and loading/error states
