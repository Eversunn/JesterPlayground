const validateValue = require('./validateValue')

test('Value validation', () => {
    expect(validateValue(50)).toBe(true)
})

describe('validateValue',()=>{
    test('CorrectValidation', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('SmallerValue', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('BiggerValue', () => {
        expect(validateValue(101)).toBe(false)
    })
    test('High Border', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('low border', () => {
        expect(validateValue(0)).toBe(true)
    })
            
})