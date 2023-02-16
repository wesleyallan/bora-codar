const card = document.getElementById("card");
const range = 100;

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

let timeout;
document.addEventListener(
  "mousemove",
  ({ x, y }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    });
  },
  false
);
