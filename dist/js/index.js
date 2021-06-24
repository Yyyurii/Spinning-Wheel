// Spinning

const startUpBtn = document.querySelector('.btnContainer');
startUpBtn.addEventListener('click', () => {
  startUpWheel('.sliceWrapper');
  setTimeout(() => {
    const pointerEl = pointerCoord();
    console.log(pointerEl);
  }, 3000)
});

function startUpWheel(selector) {
  const wheel = window.document.querySelector(selector);
  makeCircle(wheel, 0);
};

function makeCircle(item, targetAngle) {
  changeRotate(item, targetAngle);
  const step = 10;

  if (targetAngle < 710) {
    setTimeout(function () {
      makeCircle(item, targetAngle + step);
    }, 20);
  }
  console.log(targetAngle);
};

function changeRotate(item, val) {
  item.classList.add('_active');
  item.style.transform = "rotate(" + val + "deg)";
  item.style.webkitTransform = "rotate(" + val + "deg)";
  item.style.mozTransform = "rotate(" + val + "deg)";
};

//pointer coordinates

function pointerCoord() {
  const el = document.elementsFromPoint(374.5, 245.5);
  for (let key of el) {
    return key.id
  }
}
