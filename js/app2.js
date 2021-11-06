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

//Creating arrays for users and subscription status
var age = [15, 19];
var is_subscribed = ["true", "false"];

for(i=0; i < age.length; i++) {
if(age[i] < 18 && is_subscribed[i] !=="true") {
    console.log("The user is younger than 18 and not subscribed");
}else if(age[i] >= 18 && is_subscribed[i] !== "true") {
    console.log("The user is 18 or older and not subscribed")
}else if(age[i] < 18 && is_subscribed[i] === "true") {
    console.log("The user is younger than 18 and is subscribed")
}else if(age[i] >= 18 && is_subscribed[i] === "true") {
    console.log("The user is 18 or older and is subscribed");
}else {
    console.log("Something went wrong!")
}
}
