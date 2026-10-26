// The first Project after learning JS from Beginning : Order Analyzer v0.1


// Total for list

function getTotal(prices){

    let total = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] > 0){
            total += prices[i];
        }else{
            continue;
        }
    }
    return(total)
}


//See if the price of one item is greater than limit

let isExpensive = (price, limit = 500) => {
    if(price > limit){
        return(true);
    }else{
        return(false);
    }
}


//Get The Number of Prices hwo is biger then 0 from list

function getOrderCount(prices){

    let x = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] > 0){
            x += 1
        }else{
            continue
        }
    }

    return x
}


//Get The Average of Prices

function getAveragePrice(prices){
    
    let total = 0;
    let count = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] > 0){
            total += prices[i];
            count += 1;
        }else{
            continue;
        }
    };

    if (count === 0){
        return 0;
    }

    return total / count;
}


//Get the Max price in the Prices

function getMaxPrice(prices){

    let max = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] > max){
            max = prices[i];
        }else{
            continue;
        }
    }
    return max;
}


//Count the Expensive Orders in Prices list

function countExpensiveOrders(prices, limit = 500){
    let count = 0;

    for (let i = 0; i < prices.length; i++){

        if (isExpensive(prices[i], limit) === true){
            count += 1;
        }else{
            continue;

        };

    };

    return count

}


//function for summarize Orders

function summarizeOrder(prices, limit = 500){
    return `The Numbers of Prices is ${getOrderCount(prices)}, and the Average is ${getAveragePrice(prices)},and the max Price id this ${getMaxPrice(prices)},and the expensive Prices is ${countExpensiveOrders(prices, limit)}.`
 
}



//Tests
console.log(summarizeOrder([100, 200, 5000, 600]));
