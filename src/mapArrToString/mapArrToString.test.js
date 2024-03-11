const mapArrToString = require('./mapArrToString.js')

describe ('MapArrayToStrings',()=>{
    test('correct Value',()=>{
        expect(mapArrToString([1,2,3])).toEqual(['1','2','3'])
    })
    test('incorrect array',()=>{
        expect(mapArrToString([1,2,3,null,undefined,])).toEqual(['1','2','3'])
    })
    test('empty array',()=>{
        expect(mapArrToString([])).toEqual([])
    })
    test('string array',()=>{
        expect(mapArrToString(['1','2','3'])).not.toEqual(['1','2','3','4'])
    })
})