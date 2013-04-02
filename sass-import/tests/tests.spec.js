
var shell = require('shelljs')
  , should = require('should')
  , path = require('path')
  , semver = require('semver')
;

describe('Sass Import', function() {
    describe('sass version', function() {
        var baseVersion = '3.2.5';
        it('should be atleast ' + baseVersion, function() {
            var version = shell.exec('sass --version', { silent: true }).output;
            semver.gt(version, baseVersion).should.be.truthy;
        });
    });

    describe('base line', function() {
        it('should interpolate the default values', function() {
            var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../a.scss');
            shell.exec(command, { silent: true }).output
                .trim()
                .should
                .equal('.red{color:"red"}.green{color:"white"}.blue{color:"white"}');
        });
    });

    describe('one level', function() {
        it('should interpolate imported values', function() {
            var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../b.scss');
            shell.exec(command, { silent: true }).output
                .trim()
                .should
                .equal('.red{color:"red"}.green{color:"white"}.blue{color:"white"}.red{color:"red"}.green{color:"green"}.blue{color:"white"}');
        });
    });

    describe('two levels', function() {
        it('should interpolate imported values', function() {
            var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../c.scss');
            shell.exec(command, { silent: true }).output
                .trim()
                .should
                .equal('.red{color:"red"}.green{color:"white"}.blue{color:"white"}.red{color:"red"}.green{color:"green"}.blue{color:"white"}.red{color:"red"}.green{color:"green"}.blue{color:"blue"}');
        });
    });
});
