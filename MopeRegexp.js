class MopeRegexp {
    constructor(script) {
        this.script = script;
    }

    get(regexp) {
        let result = this.script.match(regexp)
        return result || new Error(`Wrong regexp: ${regexp}`);
    }
}

module.exports = MopeRegexp;