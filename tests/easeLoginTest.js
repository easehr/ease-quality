

module.exports = {
  tags: ['ease'],
  'Should navigate to EaseCentral login on staging' : function (client) {
    client
      .url('https://ease.staging.easecentral.com/')
      .pause(1000);

    client.expect.element('body').to.be.present;
    client.end();
  }
};
