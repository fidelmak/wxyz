
 

const myApp = require('./myApp');
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
app.use(myApp);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


