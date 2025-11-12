// Sample mobile stock data
const mobiles = [
  { name: "Samsung Galaxy A54", price: 400, quantity: 10 },
  { name: "iPhone 15", price: 999, quantity: 5 },
  { name: "Vivo V30", price: 350, quantity: 8 },
  { name: "OnePlus 12", price: 700, quantity: 12 },
  { name: "Redmi Note 13", price: 250, quantity: 20 },
  { name: "Red 13", price: 250, quantity: 20 },
  { name: "Redmi  113", price: 25, quantity: 10 },
  { name: "Samsung Galaxy A54", price: 400, quantity: 10 },
  { name: "iPhone 15", price: 999, quantity: 5 },
  { name: "Vivo V30", price: 350, quantity: 8 },
  { name: "OnePlus 12", price: 700, quantity: 12 },
  { name: "Redmi Note 13", price: 250, quantity: 20 },
  { name: "Red 13", price: 250, quantity: 20 },
  { name: "Redmi  113", price: 25, quantity: 10 },
  { name: "Samsung Galaxy A54", price: 400, quantity: 10 },
  { name: "iPhone 15", price: 999, quantity: 5 },
  { name: "Vivo V30", price: 350, quantity: 8 },
  { name: "OnePlus 12", price: 700, quantity: 12 },
  { name: "Redmi Note 13", price: 250, quantity: 20 },
  { name: "Red 13", price: 250, quantity: 20 },
  { name: "Redmi  113", price: 25, quantity: 10 },
  { name: "Samsung Galaxy A54", price: 400, quantity: 10 },
  { name: "iPhone 15", price: 999, quantity: 5 },
  { name: "Vivo V30", price: 350, quantity: 8 },
  { name: "OnePlus 12", price: 700, quantity: 12 },
  { name: "Redmi Note 13", price: 250, quantity: 20 },
  { name: "Red 13", price: 250, quantity: 20 },
  { name: "Redmi  113", price: 25, quantity: 10 }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

function renderTable(data) {
  tableBody.innerHTML = "";
  if (data.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='3' style='text-align:center;'>No results found</td></tr>";
    return;
  }
  data.forEach(m => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${m.name}</td><td>${m.price}</td><td>${m.quantity}</td>`;
    tableBody.appendChild(row);
  });
}

// Initial load
renderTable(mobiles);

// Live search
searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = mobiles.filter(m => m.name.toLowerCase().includes(query));
  renderTable(filtered);
});



