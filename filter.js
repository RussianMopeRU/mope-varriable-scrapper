const MopeRegexp = require('./MopeRegexp.js');

let filterMopeScript = (script) => {
    // Gets list of all varriables returned in richPresences, removes richPresences from there
    let richPresence = new MopeRegexp(script).get(/richPresences\((.*?)}/g)[0].slice(`richPresences(`.length);
    let richPresencesObj = new MopeRegexp(richPresence).get(/:(.*?)[,}]/g);
    let richPresences = [];

    richPresencesObj.forEach((obj) => {
        richPresences.push(obj.slice(`:`.length).slice(0, -",".length));
    })

    let allVarriables = {
        ani: richPresences[0],
        species: richPresences[1],
        subspecies: richPresences[2],
        xp: richPresences[3],
        server: richPresences[4],
        player: richPresences[5],
        playerID: richPresences[6],

    };

    console.log(allVarriables)

    return allVarriables;
};

module.exports = {
    filterMopeScript
};