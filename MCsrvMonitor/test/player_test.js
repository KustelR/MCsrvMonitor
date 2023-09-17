const { describe, it } = require('mocha');
const assert = require('assert');
const PlayerBuilder = require('../src/playerSystem/playerBuilder.js')


describe('PlayerBuilder', () => {
    describe('Builds correct', () => {
        it('Player should have all neccessary data', () => {
            let name = "oleg"
            const player = PlayerBuilder.Build(name);
            assert.equal(player.login_count, 0);
        })
    })
})