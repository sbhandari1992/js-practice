
let fedTax = 0.23;
let salaryPerMonth = 5000;
// console.log(salaryPerMonth);
let salaryPeryear = salaryPerMonth * 12;

let totWithheldTax = (salaryPeryear * fedTax);
// console.log(totWithheldTax);

console.log(`The yearly withheldtax is $${totWithheldTax.toFixed(2)}. ` );
