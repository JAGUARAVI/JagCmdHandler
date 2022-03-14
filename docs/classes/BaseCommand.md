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

[src/classes/base/BaseCommand.ts:14](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/classes/base/BaseCommand.ts#L14)

## Properties

### config

• **config**: [`CommandConfig`](../interfaces/Types.CommandConfig.md)

#### Defined in

[src/classes/base/BaseCommand.ts:6](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/classes/base/BaseCommand.ts#L6)

___

### data

• **data**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/classes/base/BaseCommand.ts:8](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/classes/base/BaseCommand.ts#L8)

___

### permissions

• **permissions**: [`CommandPermissions`](../interfaces/Types.CommandPermissions.md)

#### Defined in

[src/classes/base/BaseCommand.ts:7](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/classes/base/BaseCommand.ts#L7)

## Methods

### autocomplete

▸ **autocomplete**(`client`, `interaction`): `Promise`<`ApplicationCommandOptionChoice`[]\>

Use if you have an Autocomplete option. Return the data and don't use `AutocompleteInteraction#respond`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `interaction` | `AutocompleteInteraction`<`CacheType`\> |

#### Returns

`Promise`<`ApplicationCommandOptionChoice`[]\>

#### Defined in

[src/classes/base/BaseCommand.ts:22](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/classes/base/BaseCommand.ts#L22)

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

[src/classes/base/BaseCommand.ts:28](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/classes/base/BaseCommand.ts#L28)
