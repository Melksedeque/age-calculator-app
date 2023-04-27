const inputs = document.querySelectorAll('input[name="day"], input[name="month"], input[name="year"]');
inputs.forEach(input => {
  input.addEventListener('input', function(e) {
    input.value = input.value.replace(/[^0-9]/g, '');
  });
});

