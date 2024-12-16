//function to display the date and time on the page
//naming the funciton
function displayDateTime() {
  //declaring constant NOW which is calling a new date
  const now = new Date();
  // formatting the date
  const options = {
    // says SUNDAY in long format not SUN
    weekday: "long",
    // year is numeric "2024"
    year: "numeric",
    // month is long DECEMBER not DEC
    month: "long",
    // day is a number?
    day: "numeric",
    // hour is 2 digit
    hour: "2-digit",
    // minute is 2 digit
    minute: "2-digit",
    // seconds are 2 digit
    second: "2-digit",
  };
  // declaring new const, formattedDateTime which takes NOW and makes a string that conforms to US date/time conventions
  const formattedDateTime = now.toLocaleString("en-US", options);
  // pulls the div with the ID datetime and sets the innertext to this formattedDate
  document.getElementById("datetime").innerText = formattedDateTime;
}
//calls the function above
displayDateTime();
// updates every second
setInterval(displayDateTime, 1000);

// function to display current age
function calculateAge() {
  // takes the input from the birthday date box's value
  const birthdayInput = document.getElementById("birthdayInput").value;
  //if there is a birthday input, we need to...
  if (birthdayInput) {
    // create a constant called birthday using the date from the birthday input
    const birthday = new Date(birthdayInput);
    // set Now as a new date
    const now = new Date();
    // the getFullYear is built into Javascript, this is taking the year and subtracting from birthday years
    let age = now.getFullYear() - birthday.getFullYear();
    // this is taking the month and subtracting it from the current month
    const monthDiff = now.getMonth() - birthday.getMonth();

    // checking if their birthday has happened this year yet!
    if (
      // if monthDiff is negative, it means the current month is before birthday month
      monthDiff < 0 ||
      (monthDiff === 0 && now.getDate() < birthday.getDate())
    ) {
      age--;
    }
    document.getElementById("age").innerText = `They are ${age} years old`;
  } else {
    document.getElementById("age").innerText = "Please enter a DOB";
  }
}

document
  .getElementById("birthdayInput")
  .addEventListener("input", calculateAge);
