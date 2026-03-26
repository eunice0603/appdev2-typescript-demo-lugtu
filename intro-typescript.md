# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

Summary:
It shows the basics of types. It is important that when you assign a type to a variable, you will be consistent when substituting the variable with a value. If it is a string, it should remain a string. If it is an integer, it should remain an integer. We should be mindful of assigning types to ensure the smooth flow of our codebase and logic.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

Summary:
In JavaScript, we can check the type of a variable using the `typeof` operator. This is useful for debugging and ensuring that variables hold the expected types during runtime. In my experimentation, it had identified a string, a boolean, and a number.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

Summary:
The `any` type in TypeScript allows a variable to hold any type of value, providing flexibility. In the example, we can assign a number to `age`, then reassign it to a string, a boolean, an object, and an array without any type errors.

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.