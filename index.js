const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(arr){
    const newDrivers = arr.slice(0, 2);
       return newDrivers;
    }
// console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(arr){
    const newDrivers = arr.slice(2, 4)
    return newDrivers
}
// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// console.log(selectingDrivers[1])

const createFareMultiplier = function(fare){
    function quint(value){
        return fare*value;
       }
       return quint;
    }
// console.log(createFareMultiplier(5));

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(arr, foo){
    return foo(arr)
}

