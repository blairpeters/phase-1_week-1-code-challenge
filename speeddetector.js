const speedLimit = 70;
const demeritPointsInterval = 5;
const maxPoints = 12;

function speedGauge() {
  let speed = prompt("Enter speed of car"); //prompts the user to key in speed of car.
  if (isNaN(speed)) {
    alert("Error!! Enter a valid speed!"); //alerts the user when the value keyed in is not a number
    return;
  }

  if (speed <= speedLimit) {
    alert("Ok");
    //giving demerit points for every 5 km/s above speedLimit
  } else demeritPoints = (speed - speedLimit) / 5;

  //license suspension

  if (demeritPoints > maxPoints) {
    alert("License suspended");
  } else {
    alert(`points: ${demeritPoints}`);
  }
}
speedGauge();
