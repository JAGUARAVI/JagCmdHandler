[jag-cmd-handler](../README.md) / [Exports](../modules.md) / Middleware

# Class: Middleware

## Table of contents

### Constructors

- [constructor](Middleware.md#constructor)

### Properties

- [middlewares](Middleware.md#middlewares)

### Methods

- [run](Middleware.md#run)
- [use](Middleware.md#use)

## Constructors

### constructor

• **new Middleware**()

#### Defined in

[src/classes/base/Middleware.ts:5](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/classes/base/Middleware.ts#L5)

## Properties

### middlewares

• **middlewares**: (...`args`: `any`[]) => `any`[]

#### Defined in

[src/classes/base/Middleware.ts:3](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/classes/base/Middleware.ts#L3)

## Methods

### run

▸ **run**(...`args`): `Promise`<`void`\>

Run all the middlewares with provided args. Next middleware is executed after the current has finished running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/classes/base/Middleware.ts:18](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/classes/base/Middleware.ts#L18)

___

### use

▸ **use**(`middleware`): [`Middleware`](Middleware.md)

Add a middleware to execute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | (...`args`: `any`[]) => `any` |

#### Returns

[`Middleware`](Middleware.md)

#### Defined in

[src/classes/base/Middleware.ts:11](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/classes/base/Middleware.ts#L11)
