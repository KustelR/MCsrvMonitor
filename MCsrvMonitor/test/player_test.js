const { describe, it } = require('mocha');
const assert = require('assert');
const PlayerBuilder = require('../src/playerSystem/playerBuilder.js')
const fs = require('fs');
const fakes = require('./fakes.json');


describe('PlayerBuilder', () => {
    describe('Builds correctly', () => {
        it('Player should have all neccessary data', () => {
            let name = "oleg"
            const player = PlayerBuilder.Build(0, 'oleg');

            assert.equal(player.id, 0);
            assert.equal(player.nickname, 'oleg');
        })
    })
    describe('Builds from Json correctly', () => {
        it('Should have all properties from fake json', () => {
            const player = PlayerBuilder.BuildFromJson(fakes.fake_player);

            assert.equal(player.id, 1337);
            assert.equal(player.nickname, "fake");
            assert.equal(player.last_login, 500);
            assert.equal(player.last_activity_check_date, 500);

            test_activity_time = [100, 200, 300, 400, 500];
            assert.ok(player.activity_time.length ==
                test_activity_time.length & player.activity_time.every((val, index) =>
                val === test_activity_time[index]))
        })
    })
})
