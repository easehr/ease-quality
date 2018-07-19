'use strict';

//var MailListener = require("mail-listener2");
var IPromise = require('imap-promise');
var Imap = require('imap'), inspect = require('util').inspect;
 


var loginPageCommands = {      
  
  validLogin : function (_email, _password, _url, _wait, browser) {
    
    browser.url(_url);
    browser.pause(_wait);

    return this.waitForElementVisible('@username', 50000)
      .setValue('@username', _email)
      .setValue('@password', _password)
      .click('@loginButton');
    
  },

  // EMAIL
  accessEmail: function(_email, _password) {

    var imap = new Imap({
      user: _email,
      password: _password,
      host: "imap.gmail.com",
      port: 993,
      tls: true
    });
      
    function openInbox(cb) {
      imap.openBox('INBOX', true, cb);
    }
      
      imap.once('ready', function() {
      openInbox(function(err, box) {
        if (err) throw err;
        var f = imap.seq.fetch('1:1', {
          bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
          struct: true
        });
        f.on('message', function(msg, seqno) {
          console.log('Message #%d', seqno);
          var prefix = '(#' + seqno + ') ';
          msg.on('body', function(stream, info) {
            var buffer = '';
            stream.on('data', function(chunk) {
              buffer += chunk.toString('utf8');
            });
            stream.once('end', function() {
              console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
            });
          });
          msg.once('attributes', function(attrs) {
            console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
          });
          msg.once('end', function() {
            console.log(prefix + 'Finished');
          });
        });
        f.once('error', function(err) {
          console.log('Fetch error: ' + err);
        });
        f.once('end', function() {
          console.log('Done fetching all messages!');
          imap.end();
        });
      });
      });
      
      imap.once('error', function(err) {
      console.log(err);
      });
      
      imap.once('end', function() {
      console.log('Connection ended');
      });
      
      imap.connect();


  },
  
  // CATCH ANY ISSUE
  assertCredentialsError: function (error_string) {
    this.waitForElementVisible('@wrongCredentialsError', 50000).expect.element('@wrongCredentialsError').text.to.contains(error_string);
  },      
  

};
  
// email two-factor authentication


  module.exports = {
    elements: {
      username: {
        selector: '#email'
      },
      password: {
        selector: '#password'
      },
      loginButton: {
        selector: '.large.button.c-button'
      },
      loginForm: {
        selector: '#auth'
      },
      wrongCredentialsError: {
        selector: 'c-login__error'
      },
      twofactorLabel: {
        selector: '.c-input__label'
      },
      twofactorField: {
        selector: '.c-input__field'
      },
    },
    commands: [loginPageCommands]
  };
  