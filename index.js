const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Express is working! Rafael B. Patiño")
});

app.listen(port, () => {
    console.log("This express server listens to PORT 3000");
})