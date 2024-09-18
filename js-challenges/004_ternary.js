const consumption = 400;
const consumptionReals = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(consumption);

const tip = consumption >= 50 && consumption <= 300 ? 15 : 20;

const bill = (tip / 100) * consumption;

const billReals = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(bill);

console.log(
  `The consumption is ${consumptionReals}, the tip is ${
    consumption >= 50 && consumption <= 300 ? 15 : 20
  }%, and the total bill is ${billReals}.`
);
