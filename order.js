// The first Project after learning JS from Beginning : Order Analyzer v0.1


// Total for list

function getTotal(prices){

    let total = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] > 0){
            total += prices[i];
        }
    }
    return(total);
    
};


//See if the price of one item is greater than limit

const isExpensive = (price, limit = 500) => price > limit;


//Get The Number of Prices hwo is biger then 0 from list

function getOrderCount(prices){

    let x = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] > 0){
            x += 1
        }
    }

    return x
}


//Get The Average of Prices

function getAveragePrice(prices) {

    const count = getOrderCount(prices);

    if (count === 0) return 0;

    return getTotal(prices) / count;
}


//Get the Max price in the Prices

function getMaxPrice(prices){

    if (prices.length === 0) return 0;
    
    let max = prices[0];

    for (let i = 1; i < prices.length; i++){
        if (prices[i] > max){
            max = prices[i];
        }
    }
    return max;
}


//Count the Expensive Orders in Prices list

function countExpensiveOrders(prices, limit = 500){
    let count = 0;

    for (let i = 0; i < prices.length; i++){

        if (isExpensive(prices[i], limit)) {
            count++;
        };

    };

    return count

}


//function for summarize Orders

function summarizeOrder(prices, limit = 500) {
    return `The Number of Orders is ${getOrderCount(prices)}, the Average is ${getAveragePrice(prices)}, the Max Price is ${getMaxPrice(prices)}, and the Expensive Orders count is ${countExpensiveOrders(prices, limit)}.`;
}



//Tests
// Test 1: مصفوفة فارغة
console.log(summarizeOrder([])); 
// النتيجة المتوقعة: Numbers: 0 | Average: 0 | Max: 0 | Expensive: 0

// Test 2: مصفوفة تحتوي على أصفار وأرقام سالبة فقط
console.log(summarizeOrder([-10, 0, -50])); 
// النتيجة المتوقعة: Numbers: 0 | Average: 0 | Max: -10 | Expensive: 0

console.log(summarizeOrder([100, 200, 5000, 600]));