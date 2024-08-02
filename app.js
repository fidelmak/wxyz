let express = require('express');
let app = express();


app.get("/user", (req, res) => {
    res.json({
        "message": "Hello Viewer",
        "Name": "Paul Fidelis",
        "Email" : " bigfidelis@outlook.com",
        "url": "https://akintundeweb.vercel.app/"
        
    })
})
module.exports = app;
