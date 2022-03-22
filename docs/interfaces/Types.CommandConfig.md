[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / CommandConfig

# Interface: CommandConfig

[Types](../modules/Types.md).CommandConfig

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [aliases](Types.CommandConfig.md#aliases)
- [args](Types.CommandConfig.md#args)
- [availibility](Types.CommandConfig.md#availibility)
- [commandOptions](Types.CommandConfig.md#commandoptions)
- [commandType](Types.CommandConfig.md#commandtype)
- [cooldown](Types.CommandConfig.md#cooldown)
- [deleteAuthorMessage](Types.CommandConfig.md#deleteauthormessage)
- [description](Types.CommandConfig.md#description)
- [name](Types.CommandConfig.md#name)
- [nsfw](Types.CommandConfig.md#nsfw)
- [protected](Types.CommandConfig.md#protected)
- [usage](Types.CommandConfig.md#usage)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

#### Defined in

[src/types/index.ts:50](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L50)

___

### args

• `Optional` **args**: `boolean`

#### Defined in

[src/types/index.ts:59](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L59)

___

### availibility

• `Optional` **availibility**: ``1`` \| ``2`` \| ``3``

1 = Text Only, 2 = Both, 3 = Application Only

#### Defined in

[src/types/index.ts:52](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L52)

___

### commandOptions

• `Optional` **commandOptions**: `ApplicationCommandOptionData`[]

ApplicationCommandOptionData - For ApplicationCommand only.

#### Defined in

[src/types/index.ts:63](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L63)

___

### commandType

• `Optional` **commandType**: `ApplicationCommandType`

ApplicationCommandType - For ApplicationCommand only.

#### Defined in

[src/types/index.ts:54](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L54)

___

### cooldown

• `Optional` **cooldown**: `number`

#### Defined in

[src/types/index.ts:58](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L58)

___

### deleteAuthorMessage

• `Optional` **deleteAuthorMessage**: `boolean`

#### Defined in

[src/types/index.ts:60](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L60)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/types/index.ts:55](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L55)

___

### name

• **name**: `string`

#### Defined in

[src/types/index.ts:49](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L49)

___

### nsfw

• `Optional` **nsfw**: `boolean`

#### Defined in

[src/types/index.ts:57](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L57)

___

### protected

• `Optional` **protected**: `boolean`

#### Defined in

[src/types/index.ts:61](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L61)

___

### usage

• `Optional` **usage**: `string`

#### Defined in

[src/types/index.ts:56](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L56)
