[jag-cmd-handler](../README.md) / [Exports](../modules.md) / Messages

# Class: Messages

## Table of contents

### Properties

- [data](Messages.md#data)

### Methods

- [get](Messages.md#get)
- [getKeys](Messages.md#getkeys)
- [import](Messages.md#import)
- [parseVariables](Messages.md#parsevariables)

## Properties

### data

• **data**: [`Data`](../interfaces/Types.Data.md)

#### Defined in

[src/classes/Messages.ts:6](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/Messages.ts#L6)

## Methods

### get

▸ **get**(...`keys`): `string`

Get data from object path. (Example- 'en.errors.title')

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | `string`[] |

#### Returns

`string`

#### Defined in

[src/classes/Messages.ts:20](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/Messages.ts#L20)

___

### getKeys

▸ **getKeys**(...`keys`): `string`[]

Get keys of objects from path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/classes/Messages.ts:53](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/Messages.ts#L53)

___

### import

▸ **import**(`data`, `language?`): [`Messages`](Messages.md)

Import data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Data`](../interfaces/Types.Data.md) |
| `language?` | `string` |

#### Returns

[`Messages`](Messages.md)

#### Defined in

[src/classes/Messages.ts:13](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/Messages.ts#L13)

___

### parseVariables

▸ **parseVariables**(`str`, `data?`): `string`

Parse variables in string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `data` | `Object` |

#### Returns

`string`

#### Defined in

[src/classes/Messages.ts:44](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/Messages.ts#L44)
