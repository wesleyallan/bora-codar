const card = document.getElementById("card");
const range = 100;

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

let timeout;
document.addEventListener(
  "mousemove",
  ({ x }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const xValue = calcValue(x, window.innerWidth);

      card.style.transform = `rotateY(${xValue}deg)`;
    });
  },
  false
);
