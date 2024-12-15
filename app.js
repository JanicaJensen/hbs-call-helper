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
