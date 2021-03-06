'use strict';

var chai = require('chai'),
    expect = chai.expect,

    cgminer = require('../../../../../lib/modules/miners/cgminer'),
    bfgminer = require('../../../../../lib/modules/miners/bfgminer');

describe('modules/miners/cgminer', function () {

    it('should use the bfgminer adapter', function () {
        expect(cgminer).to.equal(bfgminer);
    });

});