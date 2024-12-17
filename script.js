// Function to display the date and time on the page
function displayDateTime() {
  // declare constatnt new Date, built in to javascript
  const now = new Date();
  // const options format how we want to see the date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  // formattedDateTime is using toLocalestring which lays it out with our local conventions + our options we chose
  const formattedDateTime = now.toLocaleString("en-US", options);
  // adds the innerText to the dateTime div, which is now filled with our formattedDateTime
  document.getElementById("datetime").innerText = formattedDateTime;
}

//calls function
displayDateTime();
// updates second every second
setInterval(displayDateTime, 1000);

// Function to calculate age and update messages
function calculateAge() {
  // const the value of birthdayInput is pulled
  const birthdayInput = document.getElementById("birthdayInput").value;
  // if then
  if (birthdayInput) {
    // if there is a birthday, take the input and make a date call it birthday
    const birthday = new Date(birthdayInput);
    // take the current date which is NOW
    const now = new Date();
    // age is now year -minus- birthday year
    let age = now.getFullYear() - birthday.getFullYear();
    // month difference is now month -minus- birthday month, zero indexed!
    const monthDiff = now.getMonth() - birthday.getMonth();
    // if the month difference is less than 0, they have not had a birthday yet this year
    // example, if it's march 02 and birthday is october -09, you subtract that puts us in negatives, meaning
    // birthday hasn't happened yet.
    if (
      monthDiff < 0 ||
      // if month difference is zero and now month is less than birthday month, they have had a birthday
      (monthDiff === 0 && now.getDate() < birthday.getDate())
    ) {
      age--;
      //
    }

    // Update the age display
    document.getElementById("age").innerText = `They are ${age} years old`;

    // Check if they are over 18 and update the "over18" div
    if (age >= 18) {
      document.getElementById("over18").innerText = "Over 18";
      document.getElementById("over18").classList.add("over18");
    } else {
      document.getElementById("over18").innerText = ""; // Clear the text if under 18
    }

    // Check if they are between 45 and 75 (colonoscopy age) and update the "colonoscopy" div
    if (age >= 45 && age <= 75) {
      document.getElementById("colonoscopy").innerText = "Colonoscopy age";
      document.getElementById("colonoscopy").classList.add("colonoscopy");
    } else {
      document.getElementById("colonoscopy").innerText = ""; // Clear the text if not in range
      document.getElementById("colonoscopy").classList.remove("colonoscopy");
    }
  } else {
    document.getElementById("age").innerText = "Please enter a DOB";
    document.getElementById("over18").innerText = ""; // Clear the "over18" message
    document.getElementById("colonoscopy").innerText = ""; // Clear the "colonoscopy" message
  }
}

// Function to calculate 275 days ago and 5 years ago
function calculateDaysAgo() {
  // Get the claimDate input value
  const claimDateInput = document.getElementById("claimDate").value;

  if (claimDateInput) {
    // Convert claimDateInput to a Date object
    const claimDate = new Date(claimDateInput);

    // Calculate 275 days ago
    const daysAgo275 = new Date(claimDate);
    daysAgo275.setDate(daysAgo275.getDate() - 275); // Subtract 275 days

    // Calculate 5 years ago
    const daysAgo5years = new Date(claimDate);
    daysAgo5years.setFullYear(daysAgo5years.getFullYear() - 5); // Subtract 5 years

    // Format the calculated dates as strings
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDaysAgo275 = daysAgo275.toLocaleDateString("en-US", options);
    const formattedDaysAgo5Years = daysAgo5years.toLocaleDateString(
      "en-US",
      options
    );

    // Update the respective divs
    document.getElementById(
      "daysAgo275"
    ).innerText = `275 days ago: ${formattedDaysAgo275}`;
    document.getElementById(
      "daysAgo5years"
    ).innerText = `5 years ago: ${formattedDaysAgo5Years}`;
  } else {
    // Handle empty input
    document.getElementById("daysAgo275").innerText =
      "Please enter a claim date.";
    document.getElementById("daysAgo5years").innerText = "";
  }
}

// Add event listener to the date input field
document
  .getElementById("birthdayInput")
  .addEventListener("input", calculateAge);

document
  .getElementById("claimDate")
  .addEventListener("input", calculateDaysAgo);
