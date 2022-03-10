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

[src/types/index.ts:31](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L31)

___

### args

• `Optional` **args**: `boolean`

#### Defined in

[src/types/index.ts:40](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L40)

___

### availibility

• `Optional` **availibility**: ``1`` \| ``2`` \| ``3``

1 = Text Only, 2 = Both, 3 = Application Only

#### Defined in

[src/types/index.ts:33](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L33)

___

### commandOptions

• `Optional` **commandOptions**: `ApplicationCommandOptionData`[]

ApplicationCommandOptionData - For ApplicationCommand only.

#### Defined in

[src/types/index.ts:44](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L44)

___

### commandType

• `Optional` **commandType**: `ApplicationCommandType`

ApplicationCommandType - For ApplicationCommand only.

#### Defined in

[src/types/index.ts:35](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L35)

___

### cooldown

• `Optional` **cooldown**: `number`

#### Defined in

[src/types/index.ts:39](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L39)

___

### deleteAuthorMessage

• `Optional` **deleteAuthorMessage**: `boolean`

#### Defined in

[src/types/index.ts:41](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L41)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/types/index.ts:36](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L36)

___

### name

• **name**: `string`

#### Defined in

[src/types/index.ts:30](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L30)

___

### nsfw

• `Optional` **nsfw**: `boolean`

#### Defined in

[src/types/index.ts:38](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L38)

___

### protected

• `Optional` **protected**: `boolean`

#### Defined in

[src/types/index.ts:42](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L42)

___

### usage

• `Optional` **usage**: `string`

#### Defined in

[src/types/index.ts:37](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L37)
