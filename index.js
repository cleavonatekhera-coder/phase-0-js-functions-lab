//Function calculateTax//
function calculateTax(amount) {
    if (amount === 0) {
        return 0;
    }
    if (amount <0) {
       return amount;
    }
    return amount * 0.1;
}
console.log(calculateTax(0));
console.log(calculateTax(100));
console.log(calculateTax(-1000));
console.log(calculateTax(1000000));

//Function convertToUpperCase//
function convertToUpperCase(text) {
    if (typeof text !== 'string') {
        return '';
    }
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));
console.log(convertToUpperCase("HELLO WORLD"));
console.log(convertToUpperCase(""));
console.log(convertToUpperCase(12345));
console.log(convertToUpperCase("hELLO wORLD"));

//Function findMaximum//
function findMaximum(num1 , num2) {
    return Math.max (num1 , num2)
}
console.log(findMaximum(10, 5));
console.log(findMaximum(-10, -5));
console.log(findMaximum(0, 0)); 
console.log(findMaximum(-100, 100));

//Function isPalindrome//
function isPalindrome(word) {
    if (typeof word !== 'string') {
        return false;
    }
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("a"));
console.log(isPalindrome(""));
console.log(isPalindrome("Not a palindrome"));

//Function calculateDiscountedPrice//
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - (discountPercentage / 100));
}
console.log(calculateDiscountedPrice(100, 20));
console.log(calculateDiscountedPrice(100, 0));
console.log(calculateDiscountedPrice(100, 100));
console.log(calculateDiscountedPrice(100, 150));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };