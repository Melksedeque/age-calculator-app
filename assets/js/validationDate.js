inputDay.addEventListener("blur", () => {
    if(inputDay.value > 31) {
        inputDay.parentNode.classList.add('invalid');
        spanErrorWrongDay.classList.remove("d-none");
    }
    else {
        inputDay.parentNode.classList.remove('invalid');
        spanErrorWrongDay.classList.add("d-none");
    }
});
inputMonth.addEventListener("blur", () => {
    if(inputMonth.value > 12) {
        inputMonth.parentNode.classList.add('invalid');
        spanErrorWrongMonth.classList.remove("d-none");
    }
    else {
        inputMonth.parentNode.classList.remove('invalid');
        spanErrorWrongMonth.classList.add("d-none");
    }
});
inputYear.addEventListener("blur", () => {
    if(inputYear.value >= currentYear) {
        inputYear.parentNode.classList.add('invalid');
        spanErrorWrongYear.classList.remove("d-none");
    }
    else {
        inputYear.parentNode.classList.remove('invalid');
        spanErrorWrongYear.classList.add("d-none");
    }
});

function isValidDate(day, month, year) {
    const daysInCurrentMonth = daysInMonth(month, year);
    return day <= daysInCurrentMonth;
}
  
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function validateForm(e) {
    e.preventDefault();
    const day = parseInt(inputDay.value, 10);
    const month = parseInt(inputMonth.value, 10) - 1;
    const year = parseInt(inputYear.value, 10);
  
    validateEmptyFields();
  
    if (!isValidDate(day, month, year)) {
        inputDay.parentNode.classList.add('invalid');
        spanValidationMessage.classList.remove('d-none');
        return;
    }
}