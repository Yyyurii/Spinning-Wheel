const startBtn = document.querySelectorAll('.btnContainer');
const wheel = window.document.querySelector('.sliceWrapper');
let deg = 0;

startBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none';
    closeModal();
    startUpWheel();
  
    setTimeout(() => {
      const pointerEl = pointerCoord();
      console.log(pointerEl)
    }, 2500)
    setTimeout(() => {
      showModal();
    }, 3500)
  });
})

wheel.addEventListener('transitionend', () => {
  startBtn.forEach(btn =>  btn.style.pointerEvents = 'auto');
  wheel.classList.remove('_active');
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;
})

document.querySelector('.modal__closeBtn').addEventListener('click', closeModal);

// Spinning
function startUpWheel() {
  deg = Math.floor(3000 + Math.random() * 3000);
  wheel.classList.add('_active');
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.style.webkitTransform = `rotate(${deg}deg)`;
  wheel.style.mozTransform = `rotate(${deg}deg)`;
};

//pointer coordinates
function pointerCoord() {
  const pointer = document.querySelector('.pointer');
  const modalText = document.querySelector('.modal__text-num');
  const x = pointer.getBoundingClientRect().x;
  const y = pointer.getBoundingClientRect().y;
  const el = document.elementsFromPoint(x, y + 35);
  el.forEach((item, index) => {
    if (item.classList.contains('slice')) {
      modalText.textContent = item.textContent;
      console.log(item.textContent)
    }
  })
}

//modal
const modalContainer = document.querySelector('.fixed-overlay');

function showModal() {
  modalContainer.classList.add('show');
  modalContainer.classList.add('_active');
  modalContainer.classList.remove('hide');
}

function closeModal() {
  modalContainer.classList.remove('show');
  modalContainer.classList.add('hide');
}
