//Write a function that takes in 0 arguments and prints out the message "You have called this function!"
// Write a function that takes in 2 numbers and returns the first number minus the second number
// Write a function that takes in 1 array of numbers and returns the largest number in the array

function call_function() {
    console.log("You have called this function!");
}

call_function();


function deduction(num1, num2) {
    var result = num1 - num2;
    return result
}

var result_num = deduction(100, 50);

function largest_num(array) {
 var i = 0; 
 var largest_so_far = array[0];
 while(i < array.length) {

     if(largest_so_far < array[i]) {
         largest_so_far = array[i];
     }
     i++;
 }
 return largest_so_far;
}

var largest = largest_num([10, 17, -20, 100, 80, 14]);

var quiet_message = "hello";
var loud_message = quiet_message.toUpperCase();
console.log(quiet_message);
console.log(loud_message);

function is_small(num) {
    if(num < 5) {
        return true;
    }else {
        return false;
    }
}

var numbers = [11,3,2,-100,1003,-100000,6000];
var small_numbers = numbers.filter(is_small);