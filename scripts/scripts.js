// Show current date & time
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleString();
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
  // Scroll to donate form
  function scrollToDonate() {
    const form = document.getElementById('donateForm');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Save form data using localStorage
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('donateForm');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        localStorage.setItem('donorName', name);
        localStorage.setItem('donorEmail', email);
        alert('Thank you for your interest! We will contact you soon.');
        form.reset();
      });
    }
  });