export class RomanCalculator{
    add(numeralOne:string, numeralTwo:string):string  {
        if (!this.isValid(numeralOne) || !this.isValid(numeralTwo)){
            return "INVALID INPUT"
        }
        const sumValue = this.toNumber(numeralOne) + this.toNumber(numeralTwo)
        return this.toNumeral(sumValue);
    }

    toNumber(numeral: string): number{
        let value :number = 0;
        for (let index = 0; index < numeral.length; index++) { 
            const digitValue = numeralValueMap.get(numeral[index]) as number
            const nextDigitValue = numeralValueMap.get(numeral[index+1]) as number
            if (digitValue < nextDigitValue)
                value -= digitValue;
            else
                value += digitValue;
        }
        return value;
    }

    toNumeral(digit: number): string { 
        let romanNumeral: string="";
        for (const numeral of Array.from(subtractionNotationMap).reverse()) {
            let count = 0;
            if (digit >= numeral[1]) { 
                count = Math.trunc(digit / numeral[1]); 
                for (let i = 0 ; i < count; i++) { 
                    romanNumeral += numeral[0]
                }
                digit %= numeral[1];
            }
        }
        return romanNumeral;
    }

    isValid(numeral: string): boolean{
        const romanNumeralRegex = /^(M{0,3})(D?C{0,3}|CD|CM|)(L?X{0,3}|XL|XC)(V?I{0,3}|IV|IX)$/;
        return romanNumeralRegex.test(numeral);
    }
    // isValid = (numeral: string): boolean => {
        // for (let index = 0; index < numeral.length; index++) {
        //     if (!numeralRuleMap.has(numeral[index])) {
        //         console.log(`${numeral[index]} is not a roman numeral in ${numeral}`)
        //         return false;
        //     }              
        //     if (hasInvalidRepetitions(numeral, numeral[index])) {
        //         console.log(`${numeral[index]} has invalid repetitions in ${numeral}`)
        //         return false;
        //     } 
        //     if (hasWrongSubtractionNotation(numeral, index)) {
        //         console.log(`${numeral[index]} prcedes wrongly in ${numeral}`)
        //         return false;
        //     } 
        // }
        // return true;
    // }
}




/*
const hasWrongSubtractionNotation = (numeral: string, index: number): boolean => { 
    const numeralRule :NumeralRule  = numeralRuleMap.get(numeral[index]) as NumeralRule;
    const allowedSuffixes = numeralRule.allowedSuffixesOfHigherValue;
    
    if (index + 1 <= numeral.length && allowedSuffixes!.length == 0)
        return false;

    const digitValue = numeralRuleMap.get(numeral[index])?.value as number
    const nextDigitValue = numeralRuleMap.get(numeral[index + 1])?.value as number
    // const nextToNextDigitValue = index + 2 < numeral.length ? numeralRuleMap.get(numeral[index + 2])?.value as number : 0

    return digitValue < nextDigitValue && !allowedSuffixes!.includes(numeral[index + 1])
        // && nextToNextDigitValue != 0 && digitValue;
}

const hasInvalidRepetitions = (numeral: string, numeralChar: string):boolean => { 
    const allowedRepetitions = numeralRuleMap.get(numeralChar)?.allowedRepetitions as number;
    const invalidRepetition =numeralChar.repeat(allowedRepetitions + 1)
    return numeral.includes(invalidRepetition);
}

const numeralRuleMap = new Map<string, NumeralRule>([
    ["I", { value: 1,    allowedRepetitions: 3,  allowedSuffixesOfHigherValue:["V", "X"]    }],
    ["V", { value: 5,    allowedRepetitions: 1,  allowedSuffixesOfHigherValue:[]            }],
    ["X", { value: 10,   allowedRepetitions: 3 , allowedSuffixesOfHigherValue:[ "L", "C"] }],
    ["L", { value: 50,   allowedRepetitions: 1,  allowedSuffixesOfHigherValue:[]           }],
    ["C", { value: 100,  allowedRepetitions: 3,  allowedSuffixesOfHigherValue:["D", "M"]  }],
    ["D", { value: 500,  allowedRepetitions: 1,  allowedSuffixesOfHigherValue:[]          }],
    ["M", { value: 1000, allowedRepetitions: 3,  allowedSuffixesOfHigherValue:[]         }]
]);

type NumeralRule = {
    value:number,
    allowedRepetitions: number ,
    allowedSuffixesOfHigherValue?: string[]
}
*/

const numeralValueMap = new Map<string, number>([
   ["I", 1 ],
   ["V", 5],
   ["X", 10],
   ["L", 50 ],
   ["C", 100],
   ["D", 500],
   ["M", 1000],
]);
const subtractionNotationMap = new Map<string, number>([
    ["I", 1],
    ["IV", 4 ],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40 ],
    ["L", 50],
    ["XC", 90 ],
    ["C", 100],
    ["CD", 400 ],
    ["D", 500],
    ["CM", 900 ],
    ["M", 1000],
 ]);