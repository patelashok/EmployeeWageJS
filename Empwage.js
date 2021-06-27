const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_Hours = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_Hours;
                default:
                    return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAY ) {
        totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays +
" Total hrs: " + totalEmpHrs + " Emp Wage:" + empWage);

//  Array Helper Function
// UC 7A - Calc total Wage using Array for Each traversal
let totEmpWage = 0;
function sum (dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days: " + totalWorkingDays + 
" Total Hrs: " + totalEmpHrs + "Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " +empDailyWageArr.reduce(totalWages, 0 ));

// UC 7B - Show the Daily along Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
dailyCntr ++;
return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily wage Map");
console.log(mapDayWithWageArr)

// UC 7C - Show Days when full time wage of 160 were earnd
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C - Daily wage Filter When fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurance when Full Time Wage was earned using function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC-7D - First time Fulltime wage was earned on Day: " + 
mapDayWithWageArr.find(findFulltimeWage) );

//  UC 7E - Check if Every Element of Full Time Wage is truely holding full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
    console.log("UC 7E - All Element have Full time wage: " + 
    fullDayWageArr.every(isAllFulltimeWage));

    // UC 7G - Find the number of the days the Employee Worked
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0) return numOfDays+1;
        return numOfDays;
    }
    console.log("UC 7G - Number of Days Emp Worked: "+
    empDailyWageArr.reduce(totalDaysWorked, 0));

    // UC 8 Emp Wage  using Map in totalHrs
    console.log(empDailyWageMap);
    function totalWages (totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("UC8 - Emp Wage Map totalHrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0));