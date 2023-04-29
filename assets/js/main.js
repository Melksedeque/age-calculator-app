const inputs = document.querySelectorAll('input[name="day"], input[name="month"], input[name="year"]');
const currentDate = new Date();

const inputDay = document.querySelector('input[name="day"]');
const spanErrorEmptyDay = document.querySelector('span.error_empty_day');
const spanErrorWrongDay = document.querySelector('span.error_validation_day');
const inputMonth = document.querySelector('input[name="month"]');
const spanErrorEmptyMonth = document.querySelector('span.error_empty_month');
const spanErrorWrongMonth = document.querySelector('span.error_validation_month');
const inputYear = document.querySelector('input[name="year"]');
const spanErrorEmptyYear = document.querySelector('span.error_empty_year');
const spanErrorWrongYear = document.querySelector('span.error_validation_year');
const btnSubmit = document.getElementById('btnCalculate');

inputs.forEach(input => {
    input.addEventListener('input', function(e) {
        input.value = input.value.replace(/[^0-9]/g, '');
    });
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmptyFields();
    validateDate();
});