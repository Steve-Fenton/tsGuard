import { Assert, given, when, then } from '../node_modules/typespec-bdd/src/TypeSpec';
import { TSGuard } from '../src/tsGuard';

export interface Structure {
    name: string;
}

export interface AlternateStructure {
    n: string;
}

export interface GuardTestContext {
    done: () => void;
    narrownFunc: string;
    strNum: number | string;
    objNum: object | number;
    struc: Structure | AlternateStructure;
}

export class GuardSteps {
    @given(/^I import tsGuard$/i)
    importTsGuard(context: GuardTestContext) {
    }

    @given(/^And I have a constant of number | string union type$/i)
    constantNumberString(context: GuardTestContext) {
    }

    @given(/^I have a constant of object | number union type$/i)
    constantObjectNumber(context: GuardTestContext) {
    }

    @given(/^I have a structural type$/i)
    constantStructure(context: GuardTestContext) {
    }

    @when(/^the constant contains a number$/i)
    constantContainsNumber(context: GuardTestContext) {
        context.strNum = 1;
        context.objNum = 1;
    }

    @when(/^the constant contains a string$/i)
    constantContainsString(context: GuardTestContext) {
        context.strNum = 'str';
    }

    @when(/^the constant contains a object$/i)
    constantContainsObject(context: GuardTestContext) {
        context.objNum = { name: 'tsGuard' };
    }

    @when(/^the constant contains a required structure$/i)
    constantContainsStructure(context: any) {
        context.struc = { name: 'tsGuard' };
    }

    @when(/^the constant does not contain a required structure$/i)
    constantDoesNotContainStructure(context: any) {
        context.struc = { n: 'tsGuard' };
    }

    @then(/^the result of isNumber should be "number"$/i)
    isNumberShouldBeNumber(context: GuardTestContext) {
        let num: number;
        
        if (TSGuard.isNumber(context.strNum)) {
            num = context.strNum;
            Assert.areIdentical(1, num);
        } else {
            Assert.fail();
        }
    }

    @then(/^the else result of isNumber should be "string"$/i)
    isNumberShouldBeString(context: GuardTestContext) {
        let str: string;
        
        if (TSGuard.isNumber(context.strNum)) {
            Assert.fail();
        } else {
            str = context.strNum;
            Assert.areIdentical('str', str);
        }
    }

    @then(/^the result of isString should be "string"$/i)
    isStringShouldBeString(context: GuardTestContext) {
        let str: string;
        
        if (TSGuard.isString(context.strNum)) {
            str = context.strNum;
            Assert.areIdentical('str', str);
        } else {
            Assert.fail()
        }
    }

    @then(/^the else result of isString should be "number"$/i)
    isStringShouldBeNumber(context: GuardTestContext) {
        let num: number;
        
        if (TSGuard.isString(context.strNum)) {
            Assert.fail()
        } else {
            num = context.strNum;
            Assert.areIdentical(1, num);
        }

    }

    @then(/^the result of isObject should be "object"$/i)
    isObjectShouldBeObject(context: GuardTestContext) {
        let obj: object;

        if (TSGuard.isObject(context.objNum)) {
            obj = context.objNum;
            Assert.areIdentical('tsGuard', (<any>obj).name);
        } else {
            Assert.fail();
        }
    }

    @then(/^the else result of isObject should be "number"$/i)
    isObjectShouldBeString(context: GuardTestContext) {
        let num: number;

        if (TSGuard.isObject(context.objNum)) {
            Assert.fail();
        } else {
            num = context.objNum;
            Assert.areIdentical(1, num);
        }
    }

    @then(/^the result of isStructure should match$/i)
    isStructureShouldMatch(context: GuardTestContext) {
        if (TSGuard.isStructure<Structure>(context.struc, { name: ''})) {
            Assert.areIdentical('tsGuard', context.struc.name);
        } else {
            Assert.fail();
        }
    }

    @then(/^the result of isStructure should not match$/i)
    isStructureShouldNotMatch(context: GuardTestContext) {
        if (TSGuard.isStructure<Structure>(context.struc, { name: ''})) {
            Assert.fail();
        } else {
            Assert.areIdentical('tsGuard', context.struc.n);
        }
    }
}