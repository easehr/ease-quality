"use strict";

const fs = require('fs');
let d = new Date();

let ds = (d.getMonth() + parseInt(1)) + '.' + d.getDate() + '.' + d.getFullYear() + '.' + d.getHours() + '.' + d.getMinutes() + '.' + d.getSeconds();

module.exports = {
    
    // methods
    exitStamp: function (exitcode, browser) {  
        if(browser === 'internet explorer') {
            browser = 'IE';
        }     
        console.log('[' + browser + ' | Exitcode: ' + exitcode + ' | Stamp: ' + ds + ']');    
    },

    quarantineStamp: function (exitcode, browser) {
        if(browser === 'internet explorer') {
            browser = 'IE';
        }     
        fs.appendFile('./test/reports/quarantine-results/'+browser+'.txt', exitcode+':'+ ds +'\r\n', function(err) {
            if(err) throw err;            
        });
    },

    easeStamp: function(browser, status) {        
        console.log('EaseCentral: ' + browser + ' Browser: Automated Functional Tests: ' + status);
    },

    // urls
    _etUrl: 'https://easycentralqa.new.easecentral.com/?CCh5DmKolLIXrWjfVuX7nA==_2517a82cc29415d44309d582250ac8a214728d788298e9e98e3d1d8b30b83380ec',
    _etTabPageUrl: 'https://easycentralqa.new.easecentral.com/?yhE6QDVmYvqRzlh25TL0GBpEJay64NTy5EzhM68Ay1c9V4ShE7NRWDEFSuluxB/FPhdUieg4RoPvBv8KGxZX5A/TpkL7Vqx6fhmo10GgzZwTPppAmom7yWK4fc5aJ1OG_950b496c3026a321030af10552848180c307ed5ca2627d5117e7180df7e35f71ec',
    _employeeUrl: 'https://qualitycompany.new.easecentral.com/?CCh5DmKolLIXrWjfVuX7nA==_2517a82cc29415d44309d582250ac8a214728d788298e9e98e3d1d8b30b83380ec',
    _employeeDashboardUrl: 'https://qualitycompany.new.easecentral.com/?rn354KXxhGrhIBM+aK/NPnwSOqk0YHAfeSiGt6h8IyM=_e87197d5d6178e51225f9e95381d5f5958343f2423bfd87b2a4f87affe180435ec',
    _selectctlUrl: 'http://192.168.1.100:8000/',
    _baseUrl: 'https://www.easecentral.com',
    _prodUrl: 'https://www.easecentral.com',
    _netlifyUrl: 'http://5b6cbcd267610c2d4cff2072.flamboyant-murdock-285c03.netlify.com',
    _stageUrl: 'https://www.easecentral.com',
    _redesignUrl: 'https://www.easecentral.com',
    _loginProdUrl: 'https://secure.easecentral.com/?jh4wPEjnBS9O9+btJV1QGg==_953e3bd00adb06c72d7fe8d83677d02ad6ef68efe762367e8d9fbecf5047fddaec',
    _signupProdUrl: 'https://secure.easecentral.com/?PMdUS171FEZgIC0Kw7t8rXiqdo1tgs1VXgNOFashZcM=_5cdd69ab5c3c64725ecb6a7a73386c44fbdfedad10d1033f890e008f92ebc6fcec',
    _blogProdUrl: 'http://blog.easecentral.com/category/broker-tool-belt/',
    _bestbenefitProdUrl: 'https://www.easecentral.com/best-benefits-administration-software-for-brokers/',
    _helpProdUrl: 'https://support.easecentral.com/support/home',
    _pressBlogUrl: 'http://blog.easecentral.com/category/news/',
    _miscUrl: '',

    // data
    _empId: 'john.arterberry+two@easecentral.com',
    _empPwd: '2bad!g699BBM',
    _etID: 'john.arterberry+ceo@easecentral.com',
    _etPwd: 'QvSL*rr4'

};