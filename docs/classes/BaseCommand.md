[jag-cmd-handler](../README.md) / [Exports](../modules.md) / BaseCommand

# Class: BaseCommand

## Table of contents

### Constructors

- [constructor](BaseCommand.md#constructor)

### Properties

- [config](BaseCommand.md#config)
- [data](BaseCommand.md#data)
- [permissions](BaseCommand.md#permissions)

### Methods

- [run](BaseCommand.md#run)

## Constructors

### constructor

• **new BaseCommand**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.config` | [`CommandConfig`](../interfaces/Types.CommandConfig.md) |
| `data.data` | `Object` |
| `data.permissions` | [`CommandPermissions`](../interfaces/Types.CommandPermissions.md) |

#### Defined in

[src/classes/base/BaseCommand.ts:12](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseCommand.ts#L12)

## Properties

### config

• **config**: [`CommandConfig`](../interfaces/Types.CommandConfig.md)

#### Defined in

[src/classes/base/BaseCommand.ts:4](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseCommand.ts#L4)

___

### data

• **data**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/classes/base/BaseCommand.ts:6](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseCommand.ts#L6)

___

### permissions

• **permissions**: [`CommandPermissions`](../interfaces/Types.CommandPermissions.md)

#### Defined in

[src/classes/base/BaseCommand.ts:5](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseCommand.ts#L5)

## Methods

### run

▸ **run**(`ctx`): `Promise`<`any`\>

Command body which gets executed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`CommandContext`](../interfaces/Types.CommandContext.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/classes/base/BaseCommand.ts:20](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseCommand.ts#L20)
