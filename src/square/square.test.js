const square = require('./square.js')

describe ('square',()=>{
    let mockValue;
    beforeEach(()=>{

    })
    beforeAll(()=>{

    })
    test('correct Value',()=>{
        const spyMathPow = jest.spyOn(Math,'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
})
test('correct Value',()=>{
    const spyMathPow = jest.spyOn(Math,'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
})
    afterEach(()=>{
        jest.clearAllMocks()
    })
})