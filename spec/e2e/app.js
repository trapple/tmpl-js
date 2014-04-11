var Zombie = require("zombie");
var assert = require("assert");

describe("my-app", function () {
  var promise;
  var browser;
  var $;
  var url = "http://localhost:8000/index.html";

  before( function (done) {
    browser = new Zombie({debug: true});
    promise = browser.visit(url);
    promise.then(function () {
      $ = browser.window.$; 
    }).then(done, done);
  });

  it('header section', function (done) {
    promise.then(function () {
      assert.equal( $("#message").text(), "hello, my app!!");
    })
    .then(done, done);
  });
});
