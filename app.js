const express = require('express');

const initApp = () => {
    const app = express();

    app.get(`/varriables`, (req, res) => {
        res.send(JSON.stringify(global.varriables));
    });

    app.listen(process.env.PORT || 7022, () => {
        console.log(`Started the Express server.`);
    });
}

module.exports = {
    initApp
}