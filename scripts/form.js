document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
  ];

  const selectElement = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });

  // Save form data to localStorage
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    });

    localStorage.setItem("reviewData", JSON.stringify(data));
    window.location.href = "review.html";
  });

  // Update last modified and current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});