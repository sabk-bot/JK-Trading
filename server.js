const express = require('express');
const app = express();
const port = 3000;

// Your mobile stock data
const mobiles = [
  { name: 'IPHONE 7', price: 50, memory: '64GB', status: 'In Stock' },
  { name: 'IPHONE 8', price: 90, memory: '64GB', status: 'In Stock' },
  { name: 'SAMSUNG S23', price: 400, memory: '256GB', status: 'In Stock' },
  { name: 'REDMI 15', price: 120, memory: '6/128GB', status: 'In Stock' },
  // ... add all your stock items here
];

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API to get mobiles dynamically
app.get('/get-mobiles', (req, res) => {
  const search = (req.query.search || '').toLowerCase();
  const brand = (req.query.brand || 'all').toLowerCase();

  const filtered = mobiles.filter(mobile => {
    const matchesBrand = brand === 'all' || mobile.name.toLowerCase().includes(brand);
    const matchesSearch = mobile.name.toLowerCase().includes(search);
    return matchesBrand && matchesSearch;
  });

  res.json(filtered);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
