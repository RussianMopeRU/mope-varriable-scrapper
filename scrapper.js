const axios = require(`axios`).default;

// Add a standart user agent to prevent cloudflare blocking our requests.
axios.interceptors.request.use((config) => {
    config.headers[`User-Agent`] = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.64`;
    return config;
});

const getClient = () => {
    return new Promise((resolve, reject) => {
      axios.get(`https://mope.io/client.js`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  };

module.exports = {
    getClient
};