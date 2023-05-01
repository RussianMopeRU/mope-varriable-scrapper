const MopeRegexp = require('./MopeRegexp.js');

let filterMopeScript = (script) => {
    let richPresence = new MopeRegexp(script).get(/richPresences\((.*?)}/g)[0].slice(`richPresences(`.length);
    let richPresencesObj = new MopeRegexp(richPresence).get(/:(.*?)[,}]/g);
    let richPresences = [];

    richPresencesObj.forEach((obj) => {
        richPresences.push(obj.slice(`:`.length).slice(0, -",".length));
    })

    let gameObjsByID = new MopeRegexp(richPresences[5]).get(/_(.*?)\[/g)[0].slice(0, -`]`.length);
    let gameObjs = new MopeRegexp(new MopeRegexp(script).get(/]\)\)delete _0(.*?)\);}/g)[0]).get(/=_0x(.*?)\['/g)[0].slice("=".length).slice(0, -"['".length);

    let MsgWriter = new MopeRegexp(script).get(/newMsg=(.*?)\),/g)[0].slice(`newMsg=new `.length).slice(0, -`(0x2),`.length)
    let wsSendMsg = new MopeRegexp(new MopeRegexp(script).get(/newMsg=new(.*?)\(new/g)[0]).get(/\),_0(.*?)\(/g)[0].slice(`),`.length).slice(0, -`(`.length);

    let gameMouse = new MopeRegexp(new MopeRegexp(new MopeRegexp(script).get(/']&&document\['(.*?),mes/g)[0]).get(/\|\|Math\['(.*?),m/g)[0]).get(/\){(.*?),m/g)[0].slice(`){`.length).slice(0, -`,m`.length)
    let gameMouseX = new MopeRegexp(gameMouse).get(/=(.*?),/g)[0].slice(`=`.length).slice(0, -`,`.length);
    let gameMouseY = new MopeRegexp(gameMouse).get(/(?<==)_0x[0-9a-f]{6}(?!\s*,)/g)[0];

    let camzoom = new MopeRegexp(new MopeRegexp(script).get(/\*_0x[0-9a-f]{6}\)\)\/_0x[0-9a-f]{6};/)[0]).get(/\/(.*?);/)[0].slice("/".length).slice(0, -";".length);
    let cam = new MopeRegexp(script).get(/camzoom_n(.*?)=!\[]/)[0];
    let camx = new MopeRegexp(cam).get(/0x1,(.*?),_/)[1].slice(0, -"=0x0".length);
    let camy = new MopeRegexp(cam).get(/=0x0,(.*?)=/)[1];

    let pvpArenaObj = new MopeRegexp(new MopeRegexp(new MopeRegexp(script).get(/:default:return(.*?)=null/)[0]).get(/!\[](.*?)=null/)[1].slice(`,`.length)).get(/(?<=,)_0x([^\W_]+)(?=,|$)/)[0]; 
    let isInArena = new MopeRegexp(script).get(/'],!!\[]\);(.*?)&&\(\$bus\['/)[1]

    let dangerAniTypes = new MopeRegexp(script).get(/:null;},(.*?)=Array/)[1]
    let waterBarPerc_n = new MopeRegexp(new MopeRegexp(script).get(/\)\);};_(.*?)\);const _/)[1]).get(/\((?:.........)/)[0].slice(`(`.length);
    let graphicsType = new MopeRegexp(new MopeRegexp(script).get(/\)\?parseInt\(_(.*?),_/)[1]).get(/:(?:.........)/)[0].slice(`:`.length);

    let playerName = new MopeRegexp(script).get(/=>{if\(typeof (.*?)!==/)[1];
    let pixelRat = new MopeRegexp(new MopeRegexp(script).get(/:0x3}\);}function(.*?)\*0x3/)[1]).get(/=(?:.........)/)[0].slice(`=`.length);
    let interfS = new MopeRegexp(script).get(/'];return;}}(.*?)=/)[1];
    let drawGame = new MopeRegexp(script).get(/requestAnimationFrame\((.*?)\)/)[1];

    let allVarriables = {
        ani: richPresences[0],
        species: richPresences[1],
        subspecies: richPresences[2],
        xp: richPresences[3],
        
        server: richPresences[4],
        
        player: richPresences[5],
        selfId: richPresences[6],

        gameObjsByID: gameObjsByID,
        gameObjs: gameObjs,

        MsgWriter: MsgWriter,
        wsSendMsg: wsSendMsg,

        gameMouseX: gameMouseX,
        gameMouseY: gameMouseY,

        camzoom: camzoom,
        camx: camx,
        camy: camy,

        pvpArenaObj: pvpArenaObj,
        isInArena: isInArena,

        dangerAniTypes: dangerAniTypes,
        waterBarPerc_n: waterBarPerc_n,
        
        graphicsType: graphicsType,
        playerName: playerName,
        pixelRat: pixelRat,
        interfS: interfS,
        drawGame: drawGame
    };

    return allVarriables;
};

module.exports = {
    filterMopeScript
};