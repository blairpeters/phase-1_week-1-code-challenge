const speedLimit = 70;
const demeritPointsInterval = 5;
const maxPoints = 12;

function speedGauge(speed) {

    if (speed <= speedLimit ) {
        return "Ok"

    }else( demeritPoints = (speed - speedLimit)) 
       

    if (demeritPoints > maxPoints) {
            return "License suspended"
        

    }else{
    return `points: ${demeritPoints}`
    }

}
console.log(speedGauge(80));
console.log(speedGauge(100));

