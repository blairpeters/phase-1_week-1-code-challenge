const speedLimit = 70;
const demeritPointsInterval = 5;
const maxPoints = 12;


function speedGauge(speed) {

    if (speed <= speedLimit ) {
        return "Ok"
        //giving demerit points for every 5 km/s above speedLimit

    }else( demeritPoints = (speed - speedLimit)) 

    //license suspension
       

    if (demeritPoints > maxPoints) {
            return "License suspended"
        

    }else{
    return `points: ${demeritPoints}`
    }

}

//examples
console.log(speedGauge(80));
console.log(speedGauge(100));

