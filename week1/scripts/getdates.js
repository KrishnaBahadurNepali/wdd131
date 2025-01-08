// Function to get and display the current date and time
  function displayCurrentDate() {
  const now = new Date();
  const dateString = now.toLocaleString(); // Localized date and time format
  const dateElement = document.getElementById("current-date");
  dateElement.textContent = "Current Date and Time:${dateString}"; 
}

// Call the function when the page loads
window.onload = displayCurrentDate;


document.getElementById('flag').addEventListener('mouseover', function () {
  this.style.animationDuration = '1s'; // Increase flutter speed
});

document.getElementById('flag').addEventListener('mouseout', function () {
  this.style.animationDuration = '2s'; // Return to normal speed
});

const dateElement = document.getElementById("date-display"); // Assume this is your element
const currentDate = new Date();
const dateString = currentDate.toLocaleString(); // Format date and time
dateElement.textContent = 'Current Date and Time: ${dateString}';


/* For counting image slide */
const images = document.querySelectorAll('.image-cont img');

document.addEventListener('mouseover', () => {
    images.forEach((img) => {
        img.style.animationPlayState = 'paused'; // Pause animation
    });
});

document.addEventListener('mouseout', () => {
    images.forEach((img) => {
        img.style.animationPlayState = 'running'; // Resume animation
    });
});