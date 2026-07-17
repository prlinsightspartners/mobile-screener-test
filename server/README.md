# Market Indices Backend

This backend provides a REST API for real-time market index quote values using `yfinance`.

## Run locally

1. Create a Python virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # macOS/Linux
   .\.venv\Scripts\activate   # Windows PowerShell
   ```
2. Install dependencies:
   ```bash
   pip install -r server\requirements.txt
   ```
3. Start the server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

## Endpoint

- `GET /indices`

Response:

```json
[
  {
    "id": "sp500",
    "name": "S&P 500",
    "value": "5,631.22",
    "changePercent": 0.42,
    "changeAbs": 23.38,
    "price": 5631.22,
    "previousClose": 5607.84
  }
]
```
