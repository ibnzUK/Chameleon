const cordinates = document.getElementById('cordinates');
const areaL = document.getElementById('area-l');
const head = document.getElementById('chead');

showCordinates = (cordX, cordY) => {
  cordinates.innerHTML = `possition x-${cordX}, possition y-${cordY}, position divided-${Math.round(
    cordY / 10
  )}`;

  // if (Math.round(cordY/10 >50 ) {
  //     head.style.transform = "rotate(15deg)";
  // }

//   if (Math.round(cordY / 10) < 50) {
//     console.log(Math.round(cordY / 10));
//   } else if (Math.round(cordY / 10) > 50){
 //   console.log(Math.round(cordY / 10));
//   } else 
  
  if (cordY < 100) {
    head.style.transform = 'rotate(15deg)';
  } else if (cordY < 200) {
    head.style.transform = 'rotate(10deg)';
  } else if (cordY < 300) {
    head.style.transform = 'rotate(5deg)';
  } else if (cordY < 400) {
    head.style.transform = 'rotate(0deg)';
  } else if (cordY < 500) {
    head.style.transform = 'rotate(-2deg)';
  } else if (cordY < 600) {
    head.style.transform = 'rotate(-5deg)';
  } else if (cordY < 700) {
    head.style.transform = 'rotate(-10deg)';
  } else if (cordY < 800) {
    head.style.transform = 'rotate(-15deg)';
  } else if (cordY < 900) {
    head.style.transform = 'rotate(-20deg)';
  } else if (cordY < 1000) {
    head.style.transform = 'rotate(-25deg)';
  }
};

generateCordinates = (event) => {
  //   console.log(event.clientX);
  showCordinates(event.clientX, event.clientY);
};

hideHead = () => {
  if (head.style.display === 'none') {
    // head.style.display = "block";
  } else {
    // head.style.display = "none";
    deg = rotated ? 0 : 66;

    head.style.webkitTransform = 'rotate(' + deg + 'deg)';
    head.style.mozTransform = 'rotate(' + deg + 'deg)';
    head.style.msTransform = 'rotate(' + deg + 'deg)';
    head.style.oTransform = 'rotate(' + deg + 'deg)';
    head.style.transform = 'rotate(' + deg + 'deg)';
  }
};

areaL.addEventListener('mousemove', generateCordinates);
areaL.addEventListener('click', hideHead);
