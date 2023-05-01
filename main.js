const { getClient } = require(`./scrapper.js`);
const { filterMopeScript } = require(`./filter.js`);
const { initApp } = require(`./app.js`);

(async () => {
    global.varriables = filterMopeScript(await getClient());

    setInterval(async () => {
        global.varriables = filterMopeScript(await getClient());
    }, 1000 * 30); // Update it every 30 seconds

    console.log(global.varriables)

    initApp();
})()

module.exports = {};