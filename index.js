const express = require ("express");
const app = express();

let PORT = 1213;

app.use(express.json()); //middleware

app.listen(PORT, () => {
    console.log( "App is running on "  + PORT)
});


