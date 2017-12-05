# tsGuard

TypeScript Type Guard Library.

    import { TSGuard } from './tsGuard';

# Simple Types

This prevents case-sensitivity errors, and typos.

    method(example: string | number) {
        var example: string | number = '';
        if (TSGuard.isNumber(example)) {
            // example: number
            console.log(example.toFixed());
        } else {
            // example: string
            console.log(example.length);
        }
    }

Simple Custom Type Guards

    isNumber(item: any)

    isString(item: any)

    isObject(item: any)

# Structures

This allows you to check that a type matches some structure.

    method(example: Structure | AlternateStructure) {
        if (TSGuard.isStructure<Structure>(example, { name: ''})) {
            // example: Structure
            console.log(example.name);
        } else {
            // example: AlternateStructure
            console.log(example.n)
        }
    }

You can narrow down from any type to a structural type...

    method(example: any) {
        if (TSGuard.isStructure<{age: number}>(example, { age: 1})) {
            // example: { age: number }
            console.log(example.age);
        } else {
            // example: any
            console.log(JSON.stringify(example))
        }
    }

And you can catch subsets of types, including simple types...

    export interface NumberLike {
        toFixed(): string;
    }

    // The above interface only has one method that matches number, so it is "Number Like"...

   // Here is the structural check in use, happily allowing any type with toFixed(): string into the "if"

    method(example: number | NumberLike | {}) {
        if (TSGuard.isStructure<{toFixed(): string}>(example, { toFixed: () => '' })) {
            // example: number | NumberLike
            console.log(example.toFixed());
        } else {
            // example: {}}
            console.log(JSON.stringify(example))
        }
    }

Structural Custom Type Guards

    isStructure<T>(item: any, matcher: T)