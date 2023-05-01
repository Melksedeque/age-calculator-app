const inputs = document.querySelectorAll('input[name="day"], input[name="month"], input[name="year"]');

const date = new Date();
const currentDay = String(date.getDate()).padStart(2, '0');
const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
const currentYear = date.getFullYear();

const form = document.querySelector('form.calculator');
const inputDay = document.querySelector('input[name="day"]');
const spanErrorEmptyDay = document.querySelector('span.error_empty_day');
const spanErrorWrongDay = document.querySelector('span.error_validation_day');
const inputMonth = document.querySelector('input[name="month"]');
const spanErrorEmptyMonth = document.querySelector('span.error_empty_month');
const spanErrorWrongMonth = document.querySelector('span.error_validation_month');
const inputYear = document.querySelector('input[name="year"]');
const spanErrorEmptyYear = document.querySelector('span.error_empty_year');
const spanErrorWrongYear = document.querySelector('span.error_validation_year');
const spanValidationMessage = document.querySelector('span.error_validation_form');
const btnSubmit = document.getElementById('btnCalculate');

const resultYears = document.querySelector('span.number-years');
const resultMonths = document.querySelector('span.number-months');
const resultDays = document.querySelector('span.number-days');

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        input.value = input.value.replace(/[^0-9]/g, '');
    });
});

inputDay.addEventListener('input', () => {
    if(inputDay.value.length === 2) {
        inputMonth.focus();
    }
});

inputMonth.addEventListener('input', () => {
    if(inputMonth.value.length === 2) {
        inputYear.focus();
    }
});

form.addEventListener('submit', (e) => {
    if(validateForm(e) === true) {
        ageCalculator();
    }
    // else {
    //     alert("Something is not working properly!");
    // }
});