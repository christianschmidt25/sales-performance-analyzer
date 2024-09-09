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

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
]; // sample dataset


function findTopAndBottomPerformers(salesData) {
    if (salesData.length === 0)
        return { topPerformer:null, bottomPerformer:null }
    const totalSalesData = salesData.reduce((sales, value) => sales + value) //adds the sales together into one sum
    const topPerformer = Math.max(totalSalesData)
    const bottomPerformer = Math.min(totalSalesData)
    return (("Top Performer:", topPerformer),("Bottom Performer", bottomPerformer))
}

console.log("Top & Bottom Performers", findTopAndBottomPerformers(salesData))


// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesData) {
    const performanceReport = salesData.map(salesData =>{
        const averageSales = calculateAverageSales(salesData.sales) //finds average sales per employee
        const performanceRating = determinePerformanceRating (averageSales) //determines performance rating per employee's average sales
        return { name: salesData.name, averageSales, performanceRating} //returns string information about employee and their sales
    })
}

console.log("Performance Report:", generatePerformanceReport(salesData))