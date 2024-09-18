// PROBLEM

// Mark and John  are trying to compare their BMI (Body Mass index), which is calculate using the formula:

// BMI = mass(kg)/height(m) ** 2 = mass(kg) / (height(m) * heigh(m))

// SOLUTION

// Locating and Storing the variables

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;

console.log(bmiMark, bmiJohn);
console.log(bmiMark > bmiJohn);
console.log(bmiMark < bmiJohn);
