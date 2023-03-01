import {test,assert} from 'vitest';
import { RomanCalculator } from './romanCalculator';

test('add sums the roman numerals', ()=>{    
    assert.equal(RomanCalculator.add("I", "I"), "II")
    assert.equal(RomanCalculator.add("I", "II"), "III")
    assert.equal(RomanCalculator.add("X", "X"), "XX")
    assert.equal(RomanCalculator.add("C", "C"), "CC")
    assert.equal(RomanCalculator.add("V", "I"), "VI")
    assert.equal(RomanCalculator.add("X", "II"), "XII")
    assert.equal(RomanCalculator.add("X", "VI"), "XVI")
    assert.equal(RomanCalculator.add("L", "XV"), "LXV")
    assert.equal(RomanCalculator.add("X", "XX"), "XXX")
})

test('add returns INVALID INPUT given repeated V, L or D in a numeral', ()=>{    
    assert.equal(RomanCalculator.add("VV", "I"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("I", "LL"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("X", "DD"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("IIII", "L"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("I", "XXXX"), "INVALID INPUT")
})
test('add returns INVALID INPUT given I, X, C or M repeated more than 3 times in a numeral', ()=>{    
    assert.equal(RomanCalculator.add("IIII", "L"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("I", "XXXX"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("CCCC", "MMMMMMMM"), "INVALID INPUT")
})

test('add returns INVALID INPUT given a non roman numeral', ()=>{    
    assert.equal(RomanCalculator.add("VV", "3"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("y", "LL"), "INVALID INPUT")
    assert.equal(RomanCalculator.add("X", "d"), "INVALID INPUT")
})