[jag-cmd-handler](../README.md) / [Exports](../modules.md) / Messages

# Class: Messages

## Table of contents

### Properties

- [data](Messages.md#data)

### Methods

- [clear](Messages.md#clear)
- [get](Messages.md#get)
- [getKeys](Messages.md#getkeys)
- [import](Messages.md#import)
- [parseVariables](Messages.md#parsevariables)

## Properties

### data

• **data**: [`Data`](../interfaces/Types.Data.md)

#### Defined in

[src/classes/Messages.ts:7](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Messages.ts#L7)

## Methods

### clear

▸ **clear**(`keepDefault?`): [`Messages`](Messages.md)

Reset all data.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keepDefault` | `boolean` | `true` | If true, keep default data. |

#### Returns

[`Messages`](Messages.md)

#### Defined in

[src/classes/Messages.ts:75](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Messages.ts#L75)

___

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

[src/classes/Messages.ts:21](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Messages.ts#L21)

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

[src/classes/Messages.ts:55](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Messages.ts#L55)

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

[src/classes/Messages.ts:14](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Messages.ts#L14)

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

[src/classes/Messages.ts:45](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Messages.ts#L45)
