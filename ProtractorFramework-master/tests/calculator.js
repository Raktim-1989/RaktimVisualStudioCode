
let homepage = require('../pages/homepage');   //this command is like importing other package class over this class

describe('demo calculation tests' , function()
{
    it('addition test',function()
    {
      
        homepage.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        homepage.enterFirstNumber('123');
        homepage.enterSecondNumber('7');
        homepage.clickGo();

        browser.sleep(6000);

        homepage.verifyResult('130');

        browser.sleep(6000);
      
    });
    it('subtraction test',function()
    {
      
        homepage.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        homepage.enterFirstNumber('123');
        homepage.enterSecondNumber('7');
        homepage.clickGo1();

        browser.sleep(2000);

        homepage.verifyResult('130');

        browser.sleep(6000);
      
    });

    
    
});