inputDay.addEventListener('keyup', () => {
  inputDay.parentNode.classList.remove('invalid');
  spanErrorEmptyDay.classList.add('d-none');
});

inputMonth.addEventListener('keyup', () => {
  inputMonth.parentNode.classList.remove('invalid');
  spanErrorEmptyMonth.classList.add('d-none');
});

inputYear.addEventListener('keyup', () => {
  inputYear.parentNode.classList.remove('invalid');
  spanErrorEmptyYear.classList.add('d-none');
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