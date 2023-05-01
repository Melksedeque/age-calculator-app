function ageCalculator() {
    const userDay = inputDay.value;
    const userMonth = inputMonth.value;
    const userYear = inputYear.value;
    const userFullDate = new Date(userYear, userMonth - 1, userDay);
  
    const yearInMs = 1000 * 60 * 60 * 24 * 365;
    const monthInMs = 1000 * 60 * 60 * 24 * 30;
    const dayInMs = 1000 * 60 * 60 * 24;
    
    let diffInMs = date.getTime() - userFullDate.getTime();

    const years = Math.floor(diffInMs / yearInMs);
    const months = Math.floor((diffInMs % yearInMs) / monthInMs);
    const days = Math.floor(((diffInMs % yearInMs) % monthInMs) / dayInMs);
  
    resultYears.textContent = years;
    resultMonths.textContent = months;
    resultDays.textContent = days;
}