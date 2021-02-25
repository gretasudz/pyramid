// function myFunction() {
//   document.getElementById("triangleone").style.borderBottomWidth = "200px";
// }
// function increaseHeight(elementId){
//   var value = document.getElementById('triangleone').style.borderBottomWidth;
//   console.log(value);
//   var height = parseInt(value, 10);
//   console.log(height);
//   height++;
//   console.log(height);
//   document.getElementById(elementId).style.borderBottomWidth = height +'px';
//   console.log(document.getElementById(elementId).style.borderBottomWidth);
// }

// tried to change the height of pyramid using the above function

function countUp(elementId){
  var value = document.getElementById(elementId).value;
  value++;
  document.getElementById(elementId).value = value;
}

function countDown(elementId){
  var value = document.getElementById(elementId).value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById(elementId).value = value;
}

function countUpone() {
  countUp('numberone');
  increaseHeight('triangleone');
}

function countDownone() {
  countUp('numberone');
}

function countUptwo() {
  countUp('numbertwo');
}

function countDowntwo() {
  countDown('numbertwo');
}

function countUpthree() {
  countUp('numberthree');
}

function countDownthree() {
  countDown('numberthree');
}

function countUpfour() {
countUp('numberfour');
}

function countDownfour() {
  countDown('numberfour');
}


function countUpfive() {
countUp('numberfive');
}

function countDownfive() {
countDown('numberfive');
}


function countUpsix() {
  countUp('numbersix');
}

function countDownsix() {
  countDown('numbersix');
}
