const inputs = document.querySelectorAll('input[name="day"], input[name="month"], input[name="year"]');

const inputDay = document.querySelector('input[name="day"]');
const spanErrorEmptyDay = document.querySelector('span.error_empty_day');
const inputMonth = document.querySelector('input[name="month"]');
const spanErrorEmptyMonth = document.querySelector('span.error_empty_month');
const inputYear = document.querySelector('input[name="year"]');
const spanErrorEmptyYear = document.querySelector('span.error_empty_year');
const btnSubmit = document.getElementById('btnCalculate');

inputs.forEach(input => {
  input.addEventListener('input', function(e) {
    input.value = input.value.replace(/[^0-9]/g, '');
  });
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmptyFields();
});

inputDay.addEventListener('keyup', () => {
  inputDay.parentNode.classList.remove('invalid');
  spanErrorEmptyDay.classList.add('d-none');
});

function validateEmptyFields() {
  if(!inputDay.value) {
    inputDay.parentNode.classList.add('invalid');
    spanErrorEmptyDay.classList.remove('d-none');
  }
  else {
    inputDay.parentNode.classList.remove('invalid');
    spanErrorEmptyDay.classList.add('d-none');
  }

  if(!inputMonth.value) {
    inputMonth.parentNode.classList.add('invalid');
    spanErrorEmptyMonth.classList.remove('d-none');
  }
  else {
    inputMonth.parentNode.classList.remove('invalid');
    spanErrorEmptyMonth.classList.add('d-none');
  }

  if(!inputYear.value) {
    inputYear.parentNode.classList.add('invalid');
    spanErrorEmptyYear.classList.remove('d-none');
  }
  else {
    inputYear.parentNode.classList.remove('invalid');
    spanErrorEmptyYear.classList.add('d-none');
  }
}