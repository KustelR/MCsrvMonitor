const { describe, it} = require('mocha');
const assert = require('assert');
const getData = require('../src/mcapirequester.js')


describe('Mcapi getData tests', function () {
    describe('getData', function () {
        it('MC api working', async function () {
            let srv_data;
            await getData('mc.hypixel.net').then(data => { srv_data = data });

            assert.equal(srv_data.status, 'success');
        })
    })
})