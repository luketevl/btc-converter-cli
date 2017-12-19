'use strict';

var expect = require('chai').expect;

var exec = require('child_process').exec;

var btcConverter = './src/main.js';

var pkg = require('../package.json');

describe('Main CLI', function () {
  it('should return version of btc-converter', function (done) {
    exec(btcConverter + ' --version', function (err, stdout, stderr) {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the descrition when  btc-converter --help', function (done) {
    exec(btcConverter + ' --help', function (err, stdout, stderr) {
      if (err) throw err;
      expect(stdout.includes(pkg.description)).to.be.true;
      done();
    });
  });
});