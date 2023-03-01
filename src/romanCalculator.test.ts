import {test,assert} from 'vitest';
import { RomanCalculator } from './romanCalculator';

test('add sums the roman numerals', ()=>{    
    assert.equal(RomanCalculator.add("I", "I"), "II")
    assert.equal(RomanCalculator.add("I", "II"), "III")
    assert.equal(RomanCalculator.add("X", "X"), "XX")
    assert.equal(RomanCalculator.add("C", "C"), "CC")
})