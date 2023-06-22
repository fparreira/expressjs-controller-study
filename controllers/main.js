const express = require('express');

module.exports = {

    php: (req, res) => {
        console.log('redirect to site php');
        res.redirect('https://www.php.net');
    },
    node: (req, res) => {
        console.log('redirect to site nodejs');
        res.redirect('https://nodejs.org');
    },
    express: (req, res) => {
        console.log('redirect to site expressj');
        res.redirect('https://expressjs.com');
    },

    fernando: (req, res) => {
        res.send('<h3>my name is Fernando Parreira</h3>');
    },

    page: (req, res, next) => {
        res.send("<h1>Express JS Page - Controller Study</h1>");
    },

    pageNotFound: (req, res) => {
        res.status(404).send('<h2>Page Not Found</h2>');
    }

}