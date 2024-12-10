const { generateData } = require('./src/data.js');
const { processData, calculateStatistics, complexOperations } = require('./src/processing.js');
const { displayExtendedDataReport, displayImportance, displayComplexity } = require('./src/reporting.js');

const generatedData = generateData();
const processedData = processData(generatedData);
displayExtendedDataReport(processedData);

// Zonder destructuring
const counts = calculateStatistics(processedData);
displayImportance(counts.lowImportanceCount, counts.highImportanceCount, processedData);

// Met destructuring
const { highComplexityCount, lowComplexityCount } = complexOperations(processedData);
displayComplexity(lowComplexityCount, highComplexityCount, processedData);