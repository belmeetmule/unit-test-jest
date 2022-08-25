const capitalize = require('./modules/task4');
describe('test capitalization', ()=>{
    test('is first letter capital', ()=>{
        expect(capitalize('man')).toBe('Man');
    })
})