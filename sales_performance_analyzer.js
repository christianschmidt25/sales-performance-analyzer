// Task 1: Create a Function to Calculate Average Sales

let testSales = [1, 2, 3, 4] // test data

function calculateAverageSales(sales) {
    const totalSales = sales.reduce((sum, sale) => sum + sale) // sums up all sales
    const averageSales = totalSales/sales.length //divides total sales by amount of numbers, finding the average
    return averageSales // function outputs the average sales
}

console.log(calculateAverageSales(testSales)); // output: 2.5 (10/4)