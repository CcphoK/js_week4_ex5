// Exercise 5 - Template Literals and Arrow Functions

// TODO: Create a multiline string using template literals
const createMultilineString = () => {
    const multilineText = 
`This is a multiline string
using template literals.
You can write across multiple lines
without using \\n or concatenation.
It preserves all the spacing and line breaks.`;
    return multilineText;
};

// TODO: Create a function that uses template literals for HTML generation
const generateUserCard = (name, age, email) => {
    const currentDate = new Date().toLocaleDateString();
    const html = 
`<div class="user-card">
    <h2>` + name + `</h2>
    <p><strong>Age:</strong> ` + age + ` years old</p>
    <p><strong>Email:</strong> ` + email + `</p>
    <p class="timestamp">Generated on: ` + currentDate + `</p>
</div>`;
    return html;
};

// TODO: Convert regular functions to arrow functions

// Regular function converted to arrow function
const addNumbers = (a, b) => {
    return a + b;
};

// Arrow function with implicit return
const multiplyNumbers = (a, b) => a * b;

// Arrow function with single parameter
const squareNumber = num => num * num;

// Arrow function with no parameters
const getCurrentTime = () => new Date().toLocaleTimeString();

// TODO: Use arrow functions with array methods
const processNumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Using arrow functions with array methods
    const doubled = numbers.map(num => num * 2);
    
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    const squaredEvens = numbers
        .filter(num => num % 2 === 0)
        .map(num => num * num);
    
    return {
        original: numbers,
        doubled: doubled,
        evenNumbers: evenNumbers,
        sum: sum,
        squaredEvens: squaredEvens
    };
};
