// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const first = drivers.slice(0,2);
    return first;
}

const returnLastTwoDrivers = function(drivers){
    const last = drivers.slice(-2);
    return last;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    function fareMult(fare){
        return fare*mult;
    }
    return fareMult;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}