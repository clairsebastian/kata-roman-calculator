export class RomanCalculator{

    static add(numeralOne:string, numeralTwo:string):string{
        if (!RomanCalculator.isValid(numeralOne) || !RomanCalculator.isValid(numeralTwo)){
            return "INVALID INPUT"
        }

        return numeralOne + numeralTwo;
    }
    static isValid(numeral:string):boolean{

        for (let index = 0; index < numeral.length; index++) {
            if (numeralsRuleMap.has(numeral[index])) {
                const allowedRepetitions = numeralsRuleMap.get(numeral[index])?.allowedRepetitions as number;
                const invalidRepetition = numeral[index].repeat(allowedRepetitions + 1)
                console.log(`${numeral[index]} is allowed ${allowedRepetitions} times. invalidRepetition = ${invalidRepetition}`);
                if (numeral.includes(invalidRepetition)) {
                    return false;
                }
            }
            else { 
                return false;
            }             
        }

        return true;
    }
}

const numeralsRuleMap = new Map<string, NumeralRule>([
    ["I", { allowedRepetitions: 3 }],
    ["V", { allowedRepetitions: 1 }],
    ["X", { allowedRepetitions: 3 }],
    ["L", { allowedRepetitions: 1 }],
    ["C", { allowedRepetitions: 3 }],
    ["D", { allowedRepetitions: 1 }],
    ["M", { allowedRepetitions: 3 }]
]);

type NumeralRule = {
    allowedRepetitions:number 
}