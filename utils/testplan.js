/*
The testplan utility builds a text based test plan with summarized test cases directly from the automated test scripts. 
The testplan utility assumes that the automated tests are using BDD styled Descriptions or "gherkin-like" wording within 
your test. The utility will read the test from the command-line and display the plan onscreen, as well as output a 
text file (in the automated script directory) with the extension "testplan.txt".
*/

'use strict';
const fs = require('fs');
const lineByline = require('./../node_modules/n-readlines/readlines.js');
const program = require('commander');
const colors = require('colors');
const clear = require('clear');
require('dotenv').config();

clear();
console.log('\n');
program
  .version('0.0.1', '-v, --version')
  .option('-d, --display', 'displays a verbose console print out')
  .description(colors.green('Testplan is a utility that builds summary based test cases from your automated test scripts.'))
  .usage('\nExample: ' + colors.italic('node testplan ../test/specs/employee/employee.test.js'))
  .command('<dir\\file>','directory path and filename of where your automated test scripts are located.')  
  .action(function (dir) {
    if (typeof dir !== 'undefined') {
      try {
        let checkSys = fs.lstatSync(dir);        
        if(checkSys.isDirectory() || checkSys.isFile()) {
          readFile(dir);
        }
      } catch(e) {
        console.error(colors.red('Invalid directory or file. Error: ' + e));
        console.log('\n');
        process.exit(1);  
      }           
    }
  });

program.parse(process.argv); 

function readFile(input) {

  console.log(colors.italic('Building your test plan from the following directory/file: "' + input + '"\n'));

  const liner = new lineByline(input);
  let line;
  let lineNumber = 0;
  let incY = 0; 
  let incX = 0;
  let incZ = 0;
  let incV = 1;
  let describeArray = [];
  let itArray = [];

  while (line = liner.next()) {    
    if(line.includes("describe('")) {        
      let testplanHeader = line.toString('ascii').substr(parseInt(line.indexOf('describe')) + 10);
      describeArray[incY] = testplanHeader.slice(0, testplanHeader.lastIndexOf("',"));
      incY++;      
    }

    if(line.includes("it('")) {        
      let testcaseSummary = line.toString('ascii').substr(parseInt(line.indexOf('it')) + 4);
      itArray[incX] = testcaseSummary.slice(0, testcaseSummary.lastIndexOf("',"));
      incX++;      
    }

    if(program.display) {
      console.log(colors.grey.italic('Line ' + lineNumber + ': ' + line.toString('ascii')));
    }    
    lineNumber++;
  }
  
  if(program.display) {
    console.log(colors.grey('End of Script\n'));
    console.log(colors.bold(describeArray[0] + ' ' +  describeArray[1] + ' Test Plan'));
    console.log(colors.grey('----------'));
    console.log('Test Cases\n');
  }

  try {
    let fileStream = fs.createWriteStream(input + '.testplan.txt');

    fileStream.write(describeArray[0] + ' ' +  describeArray[1] + ' Test Plan\n');  
    fileStream.write('----------\nTest Cases\n');
  
    while (incZ < itArray.length) {
      if(program.display) {
        console.log(incV + '. ' + describeArray[1] + ' ' + itArray[incZ]);
      }
      fileStream.write(incV + '. ' + describeArray[1] + ' ' + itArray[incZ] + '\n');
      incZ++;
      incV++;
    }

    fileStream.end();

  } catch(e) {
    console.error(colors.red('Invalid file write. Error: ' + e));
    console.log('\n');
    process.exit(1);  
  }
  
  console.log(colors.grey('----------'));
  console.log(colors.italic('\nYour test plan is ready and located here: ' + input + '.testplan.txt\n'));
  console.log(colors.green('Done.\n'));
  
}
