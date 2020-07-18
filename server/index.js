const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const app=express();
const port = process.env.PORT||5000;

app.listen(port,console.log(`LISTENING ON PORT ${port}`));