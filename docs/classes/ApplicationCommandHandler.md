[jag-cmd-handler](../README.md) / [Exports](../modules.md) / ApplicationCommandHandler

# Class: ApplicationCommandHandler

## Table of contents

### Properties

- [checks](ApplicationCommandHandler.md#checks)
- [client](ApplicationCommandHandler.md#client)
- [cooldowns](ApplicationCommandHandler.md#cooldowns)
- [deleteByDefault](ApplicationCommandHandler.md#deletebydefault)

### Methods

- [getErrorEmbed](ApplicationCommandHandler.md#geterrorembed)
- [getLanguage](ApplicationCommandHandler.md#getlanguage)
- [handle](ApplicationCommandHandler.md#handle)

## Properties

### checks

• **checks**: [`Middleware`](Middleware.md)

#### Defined in

[src/functions/ApplicationCommandHandler.ts:38](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L38)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/functions/ApplicationCommandHandler.ts:32](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L32)

___

### cooldowns

• **cooldowns**: `Collection`<`string`, `Collection`<`string`, `number`\>\>

#### Defined in

[src/functions/ApplicationCommandHandler.ts:37](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L37)

___

### deleteByDefault

• **deleteByDefault**: `boolean`

Whether or not to send a DeletableMessage by default.

#### Defined in

[src/functions/ApplicationCommandHandler.ts:35](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L35)

## Methods

### getErrorEmbed

▸ **getErrorEmbed**(`msg`, `large?`, `language?`): `EmbedBuilder`

Extend this function to customize error Embeds..

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `large?` | `boolean` |
| `language?` | `string` |

#### Returns

`EmbedBuilder`

#### Defined in

[src/functions/ApplicationCommandHandler.ts:53](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L53)

___

### getLanguage

▸ **getLanguage**(`client`, `interaction`): `Promise`<`string`\>

Extend this function to return the language you want to use for error Embeds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `interaction` | `CommandInteraction`<`CacheType`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/functions/ApplicationCommandHandler.ts:46](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L46)

___

### handle

▸ **handle**(`client`, `interaction`, `next`, `defaultChecks?`): `Promise`<`void`\>

This is the function which handles the interactions.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `client` | [`Client`](Client.md) | `undefined` |
| `interaction` | `CommandInteraction`<`CacheType`\> | `undefined` |
| `next` | () => `void` | `undefined` |
| `defaultChecks` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/functions/ApplicationCommandHandler.ts:64](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/functions/ApplicationCommandHandler.ts#L64)
