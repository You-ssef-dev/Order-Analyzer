# Order Analyzer — v0.1

Simple JavaScript tool to analyze a list of order prices.

## Main Functions

- `getTotal(prices)` : Total sum of prices.
- `getOrderCount(prices)` : Number of valid orders (> 0).
- `getAveragePrice(prices)` : Average price (returns `0` if the list is empty).
- `getMaxPrice(prices)` : Highest price in the list.
- `isExpensive(price, limit = 500)` : Checks if a price exceeds the limit.
- `countExpensiveOrders(prices, limit = 500)` : Counts orders above the limit.
- `summarizeOrder(prices, limit = 500)` : Returns the full summary report.

## Usage

Run the file in Node.js or the browser console:

```javascript
console.log(summarizeOrder([100, 200, 5000, 600]));
```