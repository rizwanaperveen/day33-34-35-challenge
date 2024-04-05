//**Question 97:** Write a function that returns the current date in the format "DD-MM-YYYY".
//**Explain & TIP:** Working with dates in JavaScript often requires formatting them in a specific way. The `Date` object provides methods to get the day, month, and year, which you can then assemble into any format you need.
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    var month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
//**Question 98:** Create a JavaScript snippet that calculates and logs how many days are left until New Year.
//**Explain & TIP:** To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    var diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
//**Question 99:** Generate a date object representing your next birthday and log it to the console.
//**Explain & TIP:** When creating a `Date` object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
var nextBirthday = getNextBirthday(12, 25); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
