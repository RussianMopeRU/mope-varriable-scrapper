const { getClient } = require(`./scrapper.js`);
const { filterMopeScript } = require(`./filter.js`);

(async () => {
    filterMopeScript(await getClient());
})()

module.exports = {};