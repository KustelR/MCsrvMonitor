const { describe, it} = require('mocha');
const assert = require('assert');
const getData = require('../src/mcapirequester.js')


describe('Mcapi getData tests', function () {
    describe('getData', function () {
        it('MC api working', async function () {

            srv_data = await getData('mc.hypixel.net');

            assert.equal(srv_data.status, 'success');
        })
    })
})