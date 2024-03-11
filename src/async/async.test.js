const delay = require('./async.js')

describe ('delay',()=>{
    test('correct Value', async()=>{
        const sum = await delay(() =>5+5,1000);
        expect(sum).toEqual(10);
})
})