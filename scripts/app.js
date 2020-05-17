const cordinates = document.getElementById('cordinates');
const areaL = document.getElementById('area-l');
const head = document.getElementById('chead-svg');
const eye = document.getElementById('Layer_2_1_');
// areaL.style.cursor = `copy`;

showCordinates = (cordX, cordY) => {
  cordinates.innerHTML = `possition x-${cordX}, possition y-${cordY}, position divided-${Math.round(
    cordY / 10
  )}`;
  if (cordY < 100) {
    head.style.transform = 'rotate(15deg)';
    eye.style.transform = 'rotate(-3deg)';
  } else if (cordY < 200) {
    head.style.transform = 'rotate(10deg)';
    eye.style.transform = 'rotate(-2deg)';
  } else if (cordY < 300) {
    head.style.transform = 'rotate(5deg)';
    eye.style.transform = 'rotate(-1deg)';
  } else if (cordY < 400) {
    head.style.transform = 'rotate(0deg)';
    eye.style.transform = 'rotate(-1deg)';
  } else if (cordY < 500) {
    head.style.transform = 'rotate(-2deg)';
    eye.style.transform = 'rotate(-0.5deg)';
  } else if (cordY < 600) {
    head.style.transform = 'rotate(-5deg)';
    eye.style.transform = 'rotate(-0.2deg)';
  } else if (cordY < 700) {
    head.style.transform = 'rotate(-10deg)';
    eye.style.transform = 'rotate(0deg)';
  } else if (cordY < 800) {
    head.style.transform = 'rotate(-15deg)';
    eye.style.transform = 'rotate(1deg)';
  } else if (cordY < 900) {
    head.style.transform = 'rotate(-20deg)';
    eye.style.transform = 'rotate(2deg)';
  } else if (cordY < 1000) {
    head.style.transform = 'rotate(-25deg)';
    eye.style.transform = 'rotate(1deg)';
  }
};

moveEye = (cordX, cordY) => {
  if (cordX < 30) {
    eye.style.transform = 'translate(-3px, 0px)';
  } else if (cordX < 100) {
    eye.style.transform = 'translate(-2.5px, 0px)';
  } else if (cordX < 150) {
    eye.style.transform = 'translate(-2px, 0px)';
  } else if (cordX < 200) {
    eye.style.transform = 'translate(-1.5px, 0px)';
  } else if (cordX < 300) {
    eye.style.transform = 'translate(-1px, 0px)';
  }
};

generateCordinates = (event) => {
  showCordinates(event.clientX, event.clientY);
  moveEye(event.clientX, event.clientY);
};

// hideHead = (cordX, cordY) => {

// };

areaL.addEventListener('mousemove', generateCordinates);
// areaL.addEventListener('mouseleave', hideHead);
