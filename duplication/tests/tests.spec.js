
var shell = require('shelljs')
  , should = require('should')
  , path = require('path')
  , semver = require('semver')
;


describe('Duplicating', function() {
    describe('sass version', function() {
        var baseVersion = '3.2.5';
        it('should be atleast ' + baseVersion, function() {
            var version = shell.exec('sass --version', { silent: true }).output;
            semver.gt(version, baseVersion).should.be.truthy;
        });
    });
    it('a mixin should overwrite the previous one', function() {
        var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../mixins.scss');
        shell.exec(command, { silent: true }).output
            .trim()
            .should
            .equal('.red{color:red}.blue{color:blue}');
    });
    it('a function should overwrite the previous one', function() {
        var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../functions.scss');
        shell.exec(command, { silent: true }).output
            .trim()
            .should
            .equal('.red{color:red}.blue{color:blue}');
    });
    it('a placeholder should create an additional placeholder', function() {
        var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../placeholders.scss');
        shell.exec(command, { silent: true }).output
            .trim()
            .should
            .equal('.red,.blue{color:red}.red,.blue{color:blue}');
    });
});
