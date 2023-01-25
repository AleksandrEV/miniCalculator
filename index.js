const inputA = document.querySelector('.input-a');
const inputB = document.querySelector('.input-b');
const btnResult = document.querySelector('.btn-result');
const output = document.querySelector('.js-output');
const select = document.querySelector('.select-opt');

btnResult.addEventListener('click', function() {
   const a = Number(inputA.value);
   const b = Number(inputB.value);
   const operation = select.value;

   const result = calculate({a, b, operation});

   output.innerHTML = result;
});