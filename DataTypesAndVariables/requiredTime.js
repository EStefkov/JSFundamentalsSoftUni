function required(numPages, perHourPages, mustReadDays) {
    let totalTime = numPages / perHourPages;
    let requiredHours = totalTime / mustReadDays;
    console.log(requiredHours);
} required(212,
    20,
    2
)