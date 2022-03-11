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

- [autocomplete](BaseCommand.md#autocomplete)
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

[src/classes/base/BaseCommand.ts:13](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/classes/base/BaseCommand.ts#L13)

## Properties

### config

• **config**: [`CommandConfig`](../interfaces/Types.CommandConfig.md)

#### Defined in

[src/classes/base/BaseCommand.ts:5](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/classes/base/BaseCommand.ts#L5)

___

### data

• **data**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/classes/base/BaseCommand.ts:7](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/classes/base/BaseCommand.ts#L7)

___

### permissions

• **permissions**: [`CommandPermissions`](../interfaces/Types.CommandPermissions.md)

#### Defined in

[src/classes/base/BaseCommand.ts:6](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/classes/base/BaseCommand.ts#L6)

## Methods

### autocomplete

▸ **autocomplete**(`interaction`): `Promise`<`ApplicationCommandOptionChoice`[]\>

Use if you have an Autocomplete option. Return the data and don't use `AutocompleteInteraction#respond`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `AutocompleteInteraction`<`CacheType`\> |

#### Returns

`Promise`<`ApplicationCommandOptionChoice`[]\>

#### Defined in

[src/classes/base/BaseCommand.ts:21](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/classes/base/BaseCommand.ts#L21)

___

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

[src/classes/base/BaseCommand.ts:27](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/classes/base/BaseCommand.ts#L27)
