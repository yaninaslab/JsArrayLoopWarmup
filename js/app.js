function print_greeting(username) {
    console.log(`Welcome to the print_greeting function! ${username}`);
}

function square(num) {
    var square_num = num * num;
    return square_num;
}

function array_peek(array) {
    var last_element = array[array.length - 1]
    return last_element;
}

function do_math(num1, num2) {
    var result = (num1 + num2)* num2;
    return result;
}

function find_smaller(num1, num2) {
    if(num1 <= num2) return num1;
    else return num2;

}


var amazon_products = ["Coffee Grinder", "Paw Patrol Toys", "Popcorn Maker", "Mini Fridge", "Chess Board", "Office Chair"];
var amazon_ratings = [3.8, 4.4, 4.9, 3.1, 2.7, 1.2];
console.log(amazon_products[0]);
console.log(amazon_products[amazon_products.length - 1]);

var counter = 0;
while(counter < amazon_products.length) {
    console.log(amazon_products[counter]);
    counter = counter + 1;
}

for(var i=0; i < amazon_products.length; i++) {
    console.log(amazon_products[i])
}

for(i=0; i < amazon_products.length; i++){
    if(amazon_ratings[i] >= 4) {
        console.log(`${amazon_products[i]} is a great product`);
    }else if(amazon_ratings[i] >= 3) {
        console.log(`${amazon_products[i]} is a good product`);
    }else if(amazon_ratings[i] >= 2) {
        console.log(`${amazon_products[i]} is a okay product`);
    }else {
        console.log(`${amazon_products[i]} is a bad product`);
    }
}

print_greeting("bestUser");
var ten_squared = square(10);
var last_amazon_product = array_peek(amazon_products);
var special_num = do_math(2,5);
console.log(do_math(3,5));
var smaller = find_smaller(1500, 250);

var dog = {
    breed: "Pug",
    weight: 10,
    chipped: true,
    given_name: "Spot",
    parents: ["Chewy", "Sky"],
    "Fave Toy": "Mr. Potato Head",
    
}

console.log(dog.weight);
console.log(dog["breed"]);
console.log(dog["Fave Toy"]);
console.log(dog["parents"][1])

var tweets = [{
    content: "This is an awesome tweet for tweeter",
    posted_at: "2021-11-05",
    username: "awesomeUser",
},
{
    content: "Second Tweet",
    posted_at: "2021-11-05",
    username: "bestUser",
}]

console.log(tweets[1]['content']);