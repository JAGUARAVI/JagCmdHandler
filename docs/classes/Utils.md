[jag-cmd-handler](../README.md) / [Exports](../modules.md) / Utils

# Class: Utils

## Table of contents

### Constructors

- [constructor](Utils.md#constructor)

### Properties

- [general](Utils.md#general)
- [logger](Utils.md#logger)
- [merge](Utils.md#merge)
- [parsebool](Utils.md#parsebool)
- [time](Utils.md#time)

## Constructors

### constructor

• **new Utils**()

## Properties

### general

▪ `Static` **general**: `Object` = `General`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base64` | (`text`: `string`, `mode`: `string`) => `string` |
| `capitalize` | (`str`: `string`) => `string` |
| `chunk` | <T\>(`array`: `T`[], `chunkSize`: `number`) => `T`[][] |
| `embedBuilderURL` | (`title`: `string`, `url`: `string`, `display`: `string`) => `string` |
| `escapeRegex` | (`str`: `string`) => `string` |
| `formatNumber` | (`number`: `string` \| `number`, `minimumFractionDigits`: `number`) => `string` |
| `hash` | (`text`: `string`, `algorithm`: `string`) => `string` |
| `removeDuplicates` | <T\>(`arr`: `T`[]) => `T`[] |
| `removeFromArray` | <T\>(`arr`: `T`[], ...`rem`: `T`[]) => `T`[] |
| `replaceAll` | (`str`: `string`, `term`: `string`, `replacement`: `string`) => `string` |
| `shorten` | (`text`: `string`, `maxLen`: `number`) => `string` |
| `shuffle` | <T\>(`obj`: `string` \| `T`[]) => `string` \| `T`[] |
| `trimArray` | (`arr`: `string`[], `maxLen`: `number`) => `string`[] |

#### Defined in

[src/utils/index.ts:9](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/utils/index.ts#L9)

___

### logger

▪ `Static` **logger**: `Object` = `Logger`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | (`text`: `any`, `str`: `string`) => `void` |
| `error` | (`text`: `any`, `str`: `string`) => `void` |
| `info` | (`text`: `any`, `str`: `string`) => `void` |
| `success` | (`text`: `any`, `str`: `string`) => `void` |
| `warn` | (`text`: `any`, `str`: `string`) => `void` |

#### Defined in

[src/utils/index.ts:8](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/utils/index.ts#L8)

___

### merge

▪ `Static` **merge**: (`model`: { `[key: string]`: `any`;  }, `value`: { `[key: string]`: `any`;  }, `strict`: `boolean`) => { `[key: string]`: `any`;  } = `Merge`

#### Type declaration

▸ (`model`, `value`, `strict?`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `model` | `Object` | `undefined` |
| `value` | `Object` | `undefined` |
| `strict` | `boolean` | `true` |

##### Returns

`Object`

#### Defined in

[src/utils/index.ts:12](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/utils/index.ts#L12)

___

### parsebool

▪ `Static` **parsebool**: (`v`: `string`) => `boolean` = `Parsebool`

#### Type declaration

▸ (`v`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

##### Returns

`boolean`

#### Defined in

[src/utils/index.ts:11](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/utils/index.ts#L11)

___

### time

▪ `Static` **time**: `Object` = `Time`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msToString` | (`duration`: `number`) => `string` |

#### Defined in

[src/utils/index.ts:10](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/utils/index.ts#L10)
