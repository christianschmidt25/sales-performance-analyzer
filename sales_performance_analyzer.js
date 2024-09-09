// Task 1: Create a Function to Calculate Average Sales

let testSales = [1, 2, 3, 4] // test data

function calculateAverageSales(sales) {
    const totalSales = sales.reduce((sum, sale) => sum + sale) // sums up all sales
    const averageSales = totalSales/sales.length //divides total sales by amount of numbers, finding the average
    return averageSales // function outputs the average sales
}

console.log(calculateAverageSales(testSales)); // output: 2.5 (10/4)


// Task 2: Create a Function to Determine Performance Rating

let testPerformanceRating = 7000

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000)
        return "Excellent"
    if (7000 < averageSales <= 10000)
        return "Good"
    if (4000 < averageSales <= 7000)
        return "Satisfactory"
    if (averageSales <= 4000)
        return "Needs Improvement"
}

console.log(determinePerformanceRating(testPerformanceRating)); //output: Good


// Task 3: Create a Function to Identify Top and Bottom Performers


const testSalesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
]; // sample dataset

function findTopAndBottomPerformers(salesData) {
    if (salesData.length === 0)
        return { topPerformer:null, bottomPerformer:null }
    const totalSalesData = salesData.reduce((accumulator,value) => sales + value)
    const topPerformer = Math.max(totalSalesData)
    const bottomPerformer = Math.min(totalSalesData)
    return (("Top Performer:", topPerformer),("Bottom Performer", bottomPerformer))
}

console.log(findTopAndBottomPerformers(testSalesData))