
var shell = require('shelljs')
  , should = require('should')
  , path = require('path')
  , semver = require('semver')
;


describe('Duplicate mixins', function() {
    it('should overwrite each other', function() {
        var command = 'sass --no-cache --style compressed ' + path.resolve('.', __dirname + '/../duplicate-mixins.scss');
        shell.exec(command, { silent: true }).output
            .trim()
            .should
            .equal('.red{color:red}.blue{color:blue}');
    });
});
