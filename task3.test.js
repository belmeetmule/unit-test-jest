const Calculator = require('./modules/Task3')

describe('Test division', () => {
    const cal = new Calculator(4, 2);
test ('test denomnator is different from zero', () => {
    expect(cal.div(4, 0)).toBe('division by zeno is illigal');
})

test ('test divioin on whole numbers', () => {
    expect(cal.div(4, 2)).toBe("2.00");
})

test ('test divioin on fractions', () => {
    expect(cal.div(3, 2)).toBe("1.50");
})

})

describe('Test add', () => {
    const cal = new Calculator(4, 2);
test ('test it adds well', () => {
    expect(cal.add(cal.op1, cal.op2)).toBe(6);
})

test ('operand check: null', () => {
    expect(cal.op1).not.toBeNull();
    expect(cal.op2).not.toBeNull();
})

test ('operand check: undefined', () => {
    expect(cal.op1).toBeDefined();
    expect(cal.op2).toBeDefined();
}) 

})

describe('Test subtraction', () => {
    const cal = new Calculator(4, 2);
test ('test it adds well', () => {
    expect(cal.sub(cal.op1, cal.op2)).toBe(2);
})

test ('operand check: null', () => {
    expect(cal.op1).not.toBeNull();
    expect(cal.op2).not.toBeNull();
})

test ('operand check: undefined', () => {
    expect(cal.op1).toBeDefined();
    expect(cal.op2).toBeDefined();
}) 

})

describe('Test multiplication', () => {
    const cal = new Calculator(4, 2);
test ('test it multiplies well', () => {
    expect(cal.mult(cal.op1, cal.op2)).toBe(8);
})

test ('operand check: null', () => {
    expect(cal.op1).not.toBeNull();
    expect(cal.op2).not.toBeNull();
})

test ('operand check: undefined', () => {
    expect(cal.op1).toBeDefined();
    expect(cal.op2).toBeDefined();
}) 

})