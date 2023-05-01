const MopeRegexp = require('./MopeRegexp.js');

let filterMopeScript = (script) => {
    // Gets list of all varriables returned in richPresences, removes richPresences from there
    let richPresence = new MopeRegexp(script).get(/richPresences\((.*?)}/g)[0].slice(`richPresences(`.length);
    let richPresencesObj = new MopeRegexp(richPresence).get(/:(.*?)[,}]/g);
    let richPresences = [];

    richPresencesObj.forEach((obj) => {
        richPresences.push(obj.slice(`:`.length).slice(0, -",".length));
    })

    let gameObjsByIDs = new MopeRegexp(richPresences[5]).get(/_(.*?)\[/g)[0].slice(0, -`]`.length);
    let gameObjs = new MopeRegexp(new MopeRegexp(script).get(/]\)\)delete _0(.*?)\);}/g)[0]).get(/=_0x(.*?)\['/g)[0].slice("=".length).slice(0, -"['".length);

    let MsgWriter = new MopeRegexp(script).get(/newMsg=(.*?)\),/g)[0].slice(`newMsg=new `.length).slice(0, -`(0x2),`.length)
    let wsSendMsg = new MopeRegexp(new MopeRegexp(script).get(/newMsg=new(.*?)\(new/g)[0]).get(/\),_0(.*?)\(/g)[0].slice(`),`.length).slice(0, -`(`.length);

    let allVarriables = {
        ani: richPresences[0],
        species: richPresences[1],
        subspecies: richPresences[2],
        xp: richPresences[3],
        server: richPresences[4],
        player: richPresences[5],
        playerID: richPresences[6],
        gameObjsByIDs: gameObjsByIDs,
        gameObjs: gameObjs,
        MsgWriter: MsgWriter,
        wsSendMsg: wsSendMsg
    };

    console.log(allVarriables)

    return allVarriables;
};

module.exports = {
    filterMopeScript
};