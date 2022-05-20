const evens = document.querySelectorAll(".even");
const odds = document.querySelectorAll(".odd");
const genHexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }

  return hexa;
};
setInterval(() => {
  evens.forEach((even) => {
    even.style.backgroundColor = genHexaColor();
  });
}, 2000);
setInterval(() => {
  odds.forEach((odd) => {
    odd.style.backgroundColor = genHexaColor();
  });
}, 2000);

console.log(genHexaColor());
