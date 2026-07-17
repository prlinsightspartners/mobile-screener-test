export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  changeAbs: number;
  marketCap: string;
  volume: string;
  sector: string;
  peRatio: number;
}

export const placeholderStocks: Stock[] = [
  {
    id: "1",
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 214.32,
    changePercent: 1.24,
    changeAbs: 2.62,
    marketCap: "3.28T",
    volume: "48.2M",
    sector: "Technology",
    peRatio: 29.4,
  },
  {
    id: "2",
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 441.78,
    changePercent: -0.56,
    changeAbs: -2.48,
    marketCap: "3.29T",
    volume: "19.6M",
    sector: "Technology",
    peRatio: 35.1,
  },
  {
    id: "3",
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    price: 132.15,
    changePercent: 3.87,
    changeAbs: 4.92,
    marketCap: "3.25T",
    volume: "212.4M",
    sector: "Semiconductors",
    peRatio: 48.7,
  },
  {
    id: "4",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 198.45,
    changePercent: 0.32,
    changeAbs: 0.63,
    marketCap: "2.08T",
    volume: "31.7M",
    sector: "Consumer Discretionary",
    peRatio: 41.2,
  },
  {
    id: "5",
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 178.9,
    changePercent: -1.12,
    changeAbs: -2.03,
    marketCap: "2.19T",
    volume: "22.9M",
    sector: "Communication Services",
    peRatio: 24.6,
  },
  {
    id: "6",
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 256.7,
    changePercent: 5.42,
    changeAbs: 13.18,
    marketCap: "819.4B",
    volume: "98.3M",
    sector: "Consumer Discretionary",
    peRatio: 72.3,
  },
  {
    id: "7",
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 512.33,
    changePercent: 0.87,
    changeAbs: 4.42,
    marketCap: "1.31T",
    volume: "14.5M",
    sector: "Communication Services",
    peRatio: 27.8,
  },
  {
    id: "8",
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 208.61,
    changePercent: -0.24,
    changeAbs: -0.5,
    marketCap: "598.2B",
    volume: "8.9M",
    sector: "Financials",
    peRatio: 12.4,
  },
  {
    id: "9",
    symbol: "V",
    name: "Visa Inc.",
    price: 289.44,
    changePercent: 0.65,
    changeAbs: 1.87,
    marketCap: "594.7B",
    volume: "5.2M",
    sector: "Financials",
    peRatio: 30.9,
  },
  {
    id: "10",
    symbol: "AMD",
    name: "Advanced Micro Devices",
    price: 148.22,
    changePercent: -2.31,
    changeAbs: -3.5,
    marketCap: "240.1B",
    volume: "56.8M",
    sector: "Semiconductors",
    peRatio: 108.6,
  },
];

export const placeholderWatchlist: Stock[] = [
  placeholderStocks[0],
  placeholderStocks[2],
  placeholderStocks[5],
  placeholderStocks[6],
];

export const placeholderFilters = {
  sectors: [
    "All",
    "Technology",
    "Semiconductors",
    "Financials",
    "Consumer Discretionary",
    "Communication Services",
    "Healthcare",
    "Energy",
  ],
  marketCapRanges: ["Any", "Mega Cap", "Large Cap", "Mid Cap", "Small Cap"],
  sortOptions: ["Market Cap", "% Change", "Price", "Volume", "P/E Ratio"],
};

export const portfolioSummary = {
  totalValue: 48213.67,
  todayChangeAbs: 612.44,
  todayChangePercent: 1.28,
  totalGainAbs: 8213.67,
  totalGainPercent: 20.5,
};

export const placeholderMarketIndices = [
  { id: "sp500", name: "S&P 500", value: "5,631.22", changePercent: 0.42 },
  { id: "nasdaq", name: "Nasdaq", value: "18,472.57", changePercent: 0.78 },
  { id: "dow", name: "Dow Jones", value: "41,563.08", changePercent: -0.15 },
];

export const placeholderNews = [
  {
    id: "n1",
    headline: "Fed signals potential rate path adjustments ahead of Q3",
    source: "Market Wire",
    timeAgo: "2h ago",
  },
  {
    id: "n2",
    headline: "Semiconductor stocks rally on strong earnings outlook",
    source: "Trade Desk Daily",
    timeAgo: "4h ago",
  },
  {
    id: "n3",
    headline: "Retail sector eyes holiday season projections",
    source: "Business Ledger",
    timeAgo: "6h ago",
  },
];

export const placeholderUser = {
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  plan: "Free Plan",
  memberSince: "Jan 2025",
};
