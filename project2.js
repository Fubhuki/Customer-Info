document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const correctPasscode = "1234"; // your set passcode
  const enteredPasscode = prompt("Enter passcode to view your details:");

  if (enteredPasscode === correctPasscode) {
    // Get user data from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;

    // Show the data along with passcode
    document.getElementById("output").innerHTML = `
      <h3>Your Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Number:</strong> ${number}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Passcode Used:</strong> ${enteredPasscode}</p>
    `;
  } else {
    document.getElementById("output").innerHTML = `
      <p style="color: red;">❌ Incorrect passcode. Access denied.</p>
    `;
  }
});

