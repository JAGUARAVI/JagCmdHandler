[jag-cmd-handler](../README.md) / [Exports](../modules.md) / CommandHandler

# Class: CommandHandler

## Table of contents

### Properties

- [client](CommandHandler.md#client)
- [middlewares](CommandHandler.md#middlewares)

### Methods

- [run](CommandHandler.md#run)
- [use](CommandHandler.md#use)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/classes/Handler.ts:6](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Handler.ts#L6)

___

### middlewares

• **middlewares**: (...`args`: `any`[]) => `any`[]

#### Defined in

[src/classes/base/Middleware.ts:3](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/base/Middleware.ts#L3)

## Methods

### run

▸ **run**(...`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/classes/Handler.ts:14](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Handler.ts#L14)

___

### use

▸ **use**(`middleware`): [`CommandHandler`](CommandHandler.md)

Add a middleware to execute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | (...`args`: `any`[]) => `any` |

#### Returns

[`CommandHandler`](CommandHandler.md)

#### Defined in

[src/classes/base/Middleware.ts:11](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/base/Middleware.ts#L11)
