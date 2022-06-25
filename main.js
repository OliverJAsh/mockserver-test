const ms = require("mockserver-node");
const express = require("express");

ms.start_mockserver({
    serverPort: 3030,
    verbose: true,
});

const app = express();
app.listen(8080);
