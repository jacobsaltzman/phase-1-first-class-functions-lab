
// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2,drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function fareMultiplier(fare){
        return fare * multiplier;
    }
}

const fareDoubler = (createFareMultiplier(2));

const fareTripler = (createFareMultiplier(3));

function selectDifferentDrivers(drivers, func){
    if (func == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
        return returnLastTwoDrivers(drivers);

}