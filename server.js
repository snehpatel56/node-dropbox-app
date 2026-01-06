const express = require('express');
const sql = require('mssql');

const app = express();

// Read connection string from Azure App Service
const dbConfig = {
  connectionString: process.env.SQLConnection
};

app.get('/', async (req, res) => {
  try {
    await sql.connect(dbConfig);

    const result = await sql.query`
      SELECT * FROM Employees
    `;

    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Database connection failed: ' + err.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
