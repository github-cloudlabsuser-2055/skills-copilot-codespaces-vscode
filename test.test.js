const assert = require('assert');
const { calculateResult } = require('./test');

describe('calculateResult', function() {
    it('should return the sum of firstOperand and secondOperand when operator is "+"', function() {
        global.firstOperand = 5;
        global.operator = '+';
        assert.strictEqual(calculateResult(3), 8);
    });

    it('should return the difference of firstOperand and secondOperand when operator is "-"', function() {
        global.firstOperand = 5;
        global.operator = '-';
        assert.strictEqual(calculateResult(3), 2);
    });

    it('should return the product of firstOperand and secondOperand when operator is "*"', function() {
        global.firstOperand = 5;
        global.operator = '*';
        assert.strictEqual(calculateResult(3), 15);
    });

    it('should return the quotient of firstOperand and secondOperand when operator is "/"', function() {
        global.firstOperand = 6;
        global.operator = '/';
        assert.strictEqual(calculateResult(3), 2);
    });

    it('should return secondOperand when operator is not recognized', function() {
        global.firstOperand = 5;
        global.operator = '%';
        assert.strictEqual(calculateResult(3), 3);
    });
});