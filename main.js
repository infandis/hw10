let numbers = prompt("Введіть числа через кому:");

let numbersArray = numbers.split(',').map(Number);
alert(numbersArray);

numbersArray.sort(function(a, b) {
    return a - b;
  });
  alert(numbersArray);

  numbersArray.splice(1, 3);
  alert(numbersArray);

