// Spinning

startUpWheel('.sliceWrapper');

function startUpWheel(selector) {
  const wheel = window.document.querySelector(selector);
  makeCircle(wheel, 0);
};

function makeCircle(item, targetAngle) {
  changeRotate(item, targetAngle);
  const step = 10;

  if (targetAngle < 480) {
    setTimeout(function () {
      makeCircle(item, targetAngle + step);
    }, 20);
  }
};

function changeRotate(item, val) {
  item.classList.add('_active');
  item.style.transform = "rotate(" + val + "deg)";
  item.style.webkitTransform = "rotate(" + val + "deg)";
  item.style.mozTransform = "rotate(" + val + "deg)";
};