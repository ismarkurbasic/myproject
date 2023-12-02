document.getElementById("load").onclick = function () {
  axios.get("/api/products")
    .then(addButtons)
    .catch((err) => {
      console.error('Error fetching boot data:', err);
    });
};

function addButtons({ data }) {
  resetContentArea();

  const results = document.getElementById('results');

  data.forEach((boot) => {
    const button = createBootButton(boot);
    results.appendChild(button);
  });
}

function createBootButton(boot) {
  const button = document.createElement('button');
  button.textContent = boot.name;
  button.classList.add('orange-button'); // Add a class for styling
  button.onclick = function () {
    // Handle what happens when a button is clicked (e.g., display boot details)
    // You can add logic here to display boot details when a button is clicked
    // Example: displayBootDetails(boot);
    console.log(`Boot ${boot.name} clicked!`);
  };

  return button;
}

function resetContentArea() {
  const results = document.getElementById('results');
  results.innerHTML = ''; // Clear previous content
}
