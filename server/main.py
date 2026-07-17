from typing import List

import yfinance as yf
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Market Indices API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

INDEX_SYMBOLS = {
    "sp500": {"symbol": "^GSPC", "name": "S&P 500"},
    "nasdaq": {"symbol": "^IXIC", "name": "Nasdaq"},
    "dow": {"symbol": "^DJI", "name": "Dow Jones"},
}


class IndexQuote(BaseModel):
    id: str
    name: str
    value: str
    changePercent: float
    changeAbs: float
    price: float
    previousClose: float


@app.get("/")
def read_root() -> dict:
    return {"message": "Market Indices API"}


@app.get("/indices", response_model=List[IndexQuote])
def get_indices() -> List[IndexQuote]:
    results: List[IndexQuote] = []

    for index_id, meta in INDEX_SYMBOLS.items():
        ticker = yf.Ticker(meta["symbol"])
        history = ticker.history(period="5d", interval="1d")

        if history.empty or len(history["Close"]) < 1:
            continue

        last_price = float(history["Close"].iloc[-1])
        previous_close = float(history["Close"].iloc[-2]) if len(history["Close"]) > 1 else last_price
        change_abs = last_price - previous_close
        change_percent = (change_abs / previous_close * 100) if previous_close else 0.0

        results.append(
            IndexQuote(
                id=index_id,
                name=meta["name"],
                value=f"{last_price:,.2f}",
                price=last_price,
                previousClose=previous_close,
                changeAbs=round(change_abs, 2),
                changePercent=round(change_percent, 2),
            )
        )

    return results
