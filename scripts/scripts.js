// Show current date & time
function updateDateTime() {
  const now = new Date();
  const datetimeElements = document.querySelectorAll('#datetime, #date-time');
  datetimeElements.forEach(el => {
    el.textContent = now.toLocaleString();
  });
}
setInterval(updateDateTime, 1000);
updateDateTime();

document.addEventListener("DOMContentLoaded", () => {
  const donationForm = document.getElementById('donation-form');
  const confirmation = document.getElementById('confirmation');

  // Handle donation form
  if (donationForm) {
    donationForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = donationForm.name.value.trim();
      const email = donationForm.email.value.trim();
      const amount = donationForm.amount.value;

      // Create a donor object ✅
      const donor = {
        name: name,
        email: email,
        amount: Number(amount),
        donatedAt: new Date().toLocaleString()
      };

      // Retrieve donor array or initialize it ✅
      const donors = JSON.parse(localStorage.getItem('donors')) || [];

      // Add new donor to the array ✅
      donors.push(donor);

      // Save updated array back to localStorage ✅
      localStorage.setItem('donors', JSON.stringify(donors));

      // Show confirmation message using template literal ✅
      confirmation.innerHTML = `
        <p>Thank you, <strong>${donor.name}</strong>! Your generous donation of 
        <strong>$${donor.amount.toFixed(2)}</strong> has been received.</p>
      `;

      // Reset the form
      donationForm.reset();
    });
  }

  // Handle contact form (from index.html)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      // Just show a basic alert (you can enhance this if needed)
      alert('Thank you for reaching out! We will get back to you shortly.');
      contactForm.reset();
    });
  }
});
