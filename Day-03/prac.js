// Practice Questions
//Q1.
const dis = (price, dis = 10) => {
  return (price * (100 - dis)) / 100;
};

console.log(dis(1000));

//Q2.
const merge = (a, b) => {
  return [...a, ...b];
};

console.log(merge([1, 2, 3], [4, 5, 6]));

//Q3.
const logar = (a, ...b) => {
  return { a, b };
};

console.log(logar(10, 20, 30, 40, 50));

//Q4.
const createmess = (mess = "Good Morninng!", ...name) => {
  return name.map((x) => {
    return `${mess} : ${x}`;
  });
};

console.log(createmess(undefined, "Sumit", "Punit", "Munna"));

//Q5.
const sum = (a, b, c) => {
  return a + b + c;
};

console.log(sum(...[1, 2, 3]));

//Q6.
const func = (name, age = 25, country = "India") => {
  return { name, age, country };
};

console.log(func("Hello"));
