import {test,assert} from 'vitest';
import { RomanCalculator } from './romanCalculator';


test('isValid returns true given valid roman numeral', () => {    
    const calc = new RomanCalculator();

    assert.isTrue(calc.isValid("I"))
    assert.isTrue(calc.isValid("II"))
    assert.isTrue(calc.isValid("III"))    
    assert.isTrue(calc.isValid("IV"))
    assert.isTrue(calc.isValid("V"))
    assert.isTrue(calc.isValid("VI"))
    assert.isTrue(calc.isValid("VII"))
    assert.isTrue(calc.isValid("VIII"))
    assert.isTrue(calc.isValid("IX"))
    assert.isTrue(calc.isValid("XXX"))
    assert.isTrue(calc.isValid("XXXIX"))
    assert.isTrue(calc.isValid("XXVII"))
    assert.isTrue(calc.isValid("MMMCM"))
    assert.isTrue(calc.isValid("MMMCM"))
    assert.isTrue(calc.isValid("MMMCMXC"))
})

test('isValid returns false given I, X, C or M repeated more than 3 times in a numeral', () => {    
    const calc = new RomanCalculator();
    assert.isFalse(calc.isValid("IIII"))
    assert.isFalse(calc.isValid("XIIII"))
    assert.isFalse(calc.isValid("CCCC"))
    assert.isFalse(calc.isValid("XVIXXXX"))
})

test('isValid returns false given a non roman numeral', () => {    
    const calc = new RomanCalculator();
    assert.isFalse(calc.isValid("VV"))
    assert.isFalse(calc.isValid("y"))
    assert.isFalse(calc.isValid("0"))
    assert.isFalse(calc.isValid("x"))
})

test('isValid returns false given repeated V, L or D in a numeral', () => {  
    const calc = new RomanCalculator();
    assert.isFalse(calc.isValid("VV"))
    assert.isFalse(calc.isValid("DD"))
    assert.isFalse(calc.isValid("MDMDD"))
    assert.isFalse(calc.isValid("LL"))
    assert.isFalse(calc.isValid("XVVV"))
})


test('isValid returns false when a numeral\'s suffixes are not valid', () => { 
    const calc = new RomanCalculator();    
    assert.isFalse(calc.isValid("IC"));    
    // assert.isFalse(calc.isValid("IIV")); 
    assert.isFalse(calc.isValid("IIIV")); 
    // assert.isFalse(calc.isValid("MMMCMXC")); 
})

test('toNumber gets the number value of the roman numeral', () => { 
    const calc = new RomanCalculator();

    assert.equal(calc.toNumber("I"), 1);
    assert.equal(calc.toNumber("II"), 2);
    assert.equal(calc.toNumber("III"), 3);
    assert.equal(calc.toNumber("IV"), 4);
    assert.equal(calc.toNumber("V"), 5);
    assert.equal(calc.toNumber("VI"), 6);
    assert.equal(calc.toNumber("VII"), 7);
    assert.equal(calc.toNumber("VIII"), 8);
    assert.equal(calc.toNumber("IX"), 9);
    assert.equal(calc.toNumber("X"), 10);

    assert.equal(calc.toNumber("XIII"), 13);
    assert.equal(calc.toNumber("XIV"), 14);
    assert.equal(calc.toNumber("XXVII"), 27);   
    assert.equal(calc.toNumber("XXIX"), 29);   
})

test('toNumeral gets the numberal value of a digit', () => { 
    const calc = new RomanCalculator();

    assert.equal(calc.toNumeral(1), "I");
    assert.equal(calc.toNumeral(2), "II");
    assert.equal(calc.toNumeral(3), "III");
    assert.equal(calc.toNumeral(4), "IV");
    assert.equal(calc.toNumeral(5), "V");
    assert.equal(calc.toNumeral(6), "VI");
    assert.equal(calc.toNumeral(7), "VII");
    assert.equal(calc.toNumeral(8), "VIII");
    assert.equal(calc.toNumeral(9), "IX");
    assert.equal(calc.toNumeral(10), "X");
    assert.equal(calc.toNumeral(13), "XIII");
    assert.equal(calc.toNumeral(14), "XIV");
    assert.equal(calc.toNumeral(27), "XXVII");   
    assert.equal(calc.toNumeral(29), "XXIX");   
    assert.equal(calc.toNumeral(447), "CDXLVII");   
    assert.equal(calc.toNumeral(543), "DXLIII");   
    assert.equal(calc.toNumeral(1536), "MDXXXVI");  
})

test('add returns INVALID INPUT given an invlaid Numerals as a parameter', () => {  
    const calc = new RomanCalculator();
    assert.equal(calc.add("VV", "I"), "INVALID INPUT")
    assert.equal(calc.add("IIII", "L"), "INVALID INPUT")
    assert.equal(calc.add("XVIXX", "II"), "INVALID INPUT")
})

test('add sums the roman numerals', () => {   
    const calc = new RomanCalculator();
    assert.equal(calc.add("I", "I"), "II")
    assert.equal(calc.add("I", "II"), "III")
    assert.equal(calc.add("X", "X"), "XX")
    assert.equal(calc.add("C", "C"), "CC")
    assert.equal(calc.add("V", "I"), "VI")
    assert.equal(calc.add("X", "II"), "XII")
    assert.equal(calc.add("X", "VI"), "XVI")
    assert.equal(calc.add("L", "XV"), "LXV")
    assert.equal(calc.add("X", "XX"), "XXX")
    
    assert.equal(calc.add("I", "III"), "IV")
    assert.equal(calc.add("MDVI", "XL"), "MDXLVI")
})
