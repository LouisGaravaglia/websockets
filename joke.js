const express = require('express');
const axios = require("axios");
const app = express();

const getJoke = async function() {
    const joke = await axios.get("https://icanhazdadjoke.com/", { headers: {Accept: "application/json"}});
    return joke;
}

module.exports = getJoke;