console.log("-------Welcome To Employee Wages-------");
const IS_ABSENT = 0;

let empcheck = Math.floor(Math.random() * 10) % 2;
if(empcheck == IS_ABSENT) {
    console.log("Employee is Absent");
}else {
    console.log("Employee is Present");
}
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0

for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empcheck =  Math.floor(Math.random()* 10) % 3;
    empHrs += getWorkingHours(empcheck);
}
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++
    let empcheck =  Math.floor(Math.random()* 10) % 3;
    totalEmpHrs += getWorkingHours(empcheck);
}

function getWorkingHours(empcheck) {
    switch(empcheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
        return 0; 
    }
}

empcheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empcheck);
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Employee Wage:" +empWage);
console.log("Total Days :- " + totalWorkingDays +"; total Emp Hrs :- " + totalEmpHrs +"; Employee Wage :- " + empWage);
