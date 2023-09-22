const { describe, it } = require('mocha');
const assert = require('assert');
const PlayerBuilder = require('../src/playerSystem/playerBuilder.js')
const fs = require('fs');
const fakes = require('./fakes.json');


describe('PlayerBuilder', () => {
    describe('Builds correctly', () => {
        it('Player should have all neccessary data', () => {
            let name = "oleg"
            const player = PlayerBuilder.Build('oleg');

            assert.equal(player.nickname, 'oleg');
            assert.equal(player.activity_time.length, 0);
            assert.equal(player.faction, null);
        })
    })
    describe('Builds from Json correctly', () => {
        it('Should have all properties from fake json', () => {
            const player = PlayerBuilder.BuildFromJson(fakes.fake_player);

            assert.equal(player.nickname, "fake");

            test_activity_time = [100, 200, 300, 400, 500];
            assert.ok(player.activity_time.length ==
                test_activity_time.length & player.activity_time.every((val, index) =>
                val === test_activity_time[index]))
        })
    })
})
describe('Player reports', () => {
    describe('Writes correctly', () => {
        it('Should have all properties from fake json', () => {
            const player = PlayerBuilder.BuildFromJson(fakes.fake_player);
            const test_player_path = './test_player_report.json';
            fs.writeFile(test_player_path, JSON.stringify(player), (err) => {
                if (err) throw err;
            })


            const new_player = PlayerBuilder.BuildFromJson(JSON.parse(fs.readFileSync(test_player_path)));
            assert.equal(new_player.nickname, "fake");

            test_activity_time = [100, 200, 300, 400, 500];
            assert.ok(new_player.activity_time.length ==
                test_activity_time.length & new_player.activity_time.every((val, index) =>
                    val === test_activity_time[index]))

            fs.unlink(test_player_path, (err) => {
                if (err) throw err;
            });
        })
    })
})