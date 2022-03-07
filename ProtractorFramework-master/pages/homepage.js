let homepage = function () {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    }

    this.enterFirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function (secondNo) {
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        let outPut = element(by.cssContainingText('.ng-binding', result));
        expect(outPut.getText()).toEqual(result);

    }


};
//the folloiwng command will refer this homepage.js class to any external file. In 
//this case, calculator.js file will refer this call objects & methods 

module.exports = new homepage();