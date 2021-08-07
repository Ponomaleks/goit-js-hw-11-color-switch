const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.body,
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let identificator = null;

function startColorSwitch() {identificator = setInterval(() => {refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)]}, 1000)
refs.startBtn.removeEventListener('click', startColorSwitch);
refs.stopBtn.addEventListener('click', stopColorSwitch);
}

refs.startBtn.addEventListener('click', startColorSwitch);

function stopColorSwitch() {
    clearInterval(identificator)
    refs.startBtn.addEventListener('click', startColorSwitch);
    refs.stopBtn.removeEventListener('click', stopColorSwitch);
};