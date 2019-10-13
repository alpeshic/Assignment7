//STEP 1
function halfNumber(num) {
    'use strict';
    var halfOfNum = parseFloat(num / 2);
    console.log('Half of ' + num + ' is ' + halfOfNum + '.');

    return halfOfNum;
}
//STEP 2
function squareNumber(num) {
    'user strict';
    var squareOfNum = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squareOfNum + '.');
    return squareOfNum;
}
//STEP 3
function percentOf()
{

}
//STEP 4
function findModulus(number1, number2)
{
    'use strict';
    var modulus = number1 % number2;
    console.log(modulus + 'is the modulus of ' + number2 + ' and ' + number1);
}
//STEP 5
function sumOfNumbers()
{
    var numbers = window.prompt("Enter number in comma delimited pattern to calculate sum");
    var numberArray = numbers.split(',');
    var sum = 0;
    numberArray.forEach(function(item){
        sum = item + sum;
    });
    console.log('sum of ' + numbers + ' is ' + sum);
}