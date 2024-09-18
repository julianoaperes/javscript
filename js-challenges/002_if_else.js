const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

const massMark = 58;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;

console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark has the biggest BMI, ${bmiMark.toFixed(0)}.`);
} else {
  console.log(`John has the biggest BMI, ${bmiJohn.toFixed(0)}.`);
}
