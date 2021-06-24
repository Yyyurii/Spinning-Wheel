// Spinning

const startBtn = document.querySelector('.btnContainer');
const wheel = window.document.querySelector('.sliceWrapper');
let deg = 0;

startBtn.addEventListener('click', () => {
  startBtn.style.pointerEvents = 'none';
  startUpWheel();

  setTimeout(() => {
    const pointerEl = pointerCoord();
    console.log(pointerEl);
  }, 3000)
});

wheel.addEventListener('transitionend', () => {
  wheel.classList.remove('_active');
  startBtn.style.pointerEvents = 'auto';
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;
})

function startUpWheel() {
  deg = Math.floor(3000 + Math.random() * 3000);
  wheel.classList.add('_active');
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.style.webkitTransform = `rotate(${deg}deg)`;
  wheel.style.mozTransform = `rotate(${deg}deg)`;
};

//pointer coordinates

function pointerCoord() {
  const el = document.elementsFromPoint(374.5, 245.5);
  console.log(el);
  for (let key of el) {
    return key.id
  }
}
