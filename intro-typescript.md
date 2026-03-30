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

Summary:
This demonstrates how to define arrays that can hold multiple types using union types, how to create objects with specific property types, and how to use the `Record` type for flexible key-value pairs. This highlights the importance of defining types to enhance code maintainability.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

Summary:
It showed how to define an enum to group a set of named values together, and how to use it as a type for variables. We give the values a name in this one instead of just putting numbers or plain strings.

## 06-alternative-to-enum.ts
Literal types can be used as an alternative to enums by directly listing the allowed values using a union type. Instead of defining a separate enum, the valid options are written inline, making it simpler.

## 07-custom-type-role.ts
Type aliases can create a reusable custom type and compose them together into a more complex object type. Instead of repeating the union type everywhere, the Role type is defined once and reused across the variable, the object property, and the function parameter.

## 08-functions.ts
It showed how to define typed functions with explicit return types, and how TypeScript uses special types like void for functions that return nothing and never for functions that never finish normally.

## 09-special-types.ts
Null and undefined can be used as explicit types in TypeScript. We can combine them with other types using union types to alow a variale to hold either a value or no value at all.

## 10-form.html and 10-type-narrowing.ts
This demonstrates how to interact with DOM elements in TypeScript, and how TypeScript handles the possibility of an element not being found by typing getElementById as HTMLElement | null.

## 11-optional.ts
This shows how to define optional properties in TypeScript using the `?` syntax. Optional properties allow us to create more flexible types that can represent objects with missing properties without causing type errors.