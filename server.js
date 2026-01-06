const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1> Node.js App Deployed from Dropbox</h1>
        <p>This application is automatically deployed to Azure Web App.</p>
    `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
