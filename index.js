const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const PORT = process.env.PORT || 8005;

const app = express();

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
