const { response } = require("express");

fetch('http://localhost:3000/users/data')
    .then(response => console.log(response))