function processData(data) {
    // Apply more confusing processing logic to data
    data.forEach((item) => {
        if (item.isSpecial) {
            if (item.value > 30 && item.value <= 70) {
                item.specialResult = "Intermediate Special";
            } else {
                item.specialResult = "Extreme Special";
            }
        } else {
            item.specialResult = "Not Special";
        }

        // Apply additional complex logic based on details
        if (item.details.importance > 3) {
            if (item.details.complexity > 5) {
                item.advancedResult = "High Importance, High Complexity";
            } else {
                item.advancedResult = "High Importance, Low Complexity";
            }
        } else {
            item.advancedResult = "Low Importance";
        }
    });

    return data;
}

function calculateStatistics(data) {
    let highImportanceCount = 0;
    let lowImportanceCount = 0;

    data.forEach((item) => {
        if (item.details.importance > 3) {
            highImportanceCount++;
        } else {
            lowImportanceCount++;
        }
    });

    return {
        highImportanceCount,
        lowImportanceCount
    }
}

function complexOperations(data) {
    // Introduce more complex operations on the data
    let highComplexityCount = 0;
    let lowComplexityCount = 0;

    data.forEach((item) => {
        if (item.details.complexity > 5) {
            highComplexityCount++;
        } else {
            lowComplexityCount++;
        }
    });

    return {
        highComplexityCount,
        lowComplexityCount
    }
}

module.exports = {
    processData,
    calculateStatistics,
    complexOperations
}