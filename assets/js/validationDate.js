inputDay.addEventListener("blur", () => {
    console.log(inputDay.value);
    if(Number(inputDay.value) > 31) {
        inputDay.parentNode.classList.add('invalid');
        spanErrorWrongDay.classList.toggle("d-none");
    }
    else {
        inputDay.parentNode.classList.remove('invalid');
        spanErrorWrongDay.classList.toggle("d-none");
    }
});
inputMonth.addEventListener("blur", () => {
    if(Number(inputMonth.value) > 12) {
        inputMonth.parentNode.classList.add('invalid');
        spanErrorWrongMonth.classList.toggle("d-none");
    }
    else {
        inputMonth.parentNode.classList.remove('invalid');
        spanErrorWrongMonth.classList.toggle("d-none");
    }
});
inputYear.addEventListener("blur", () => {
    if(Number(inputYear.value) >= currentDate.getFullYear()) {
        inputYear.parentNode.classList.add('invalid');
        spanErrorWrongYear.classList.toggle("d-none");
    }
    else {
        inputYear.parentNode.classList.remove('invalid');
        spanErrorWrongYear.classList.toggle("d-none");
    }
});

function validateDate() {
    console.log("Melk");
}