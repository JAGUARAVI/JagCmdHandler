[jag-cmd-handler](../README.md) / [Exports](../modules.md) / ApplicationCommandHandler

# Class: ApplicationCommandHandler

## Table of contents

### Properties

- [checks](ApplicationCommandHandler.md#checks)
- [client](ApplicationCommandHandler.md#client)
- [cooldowns](ApplicationCommandHandler.md#cooldowns)

### Methods

- [getErrorEmbed](ApplicationCommandHandler.md#geterrorembed)
- [getLanguage](ApplicationCommandHandler.md#getlanguage)
- [handle](ApplicationCommandHandler.md#handle)

## Properties

### checks

• **checks**: [`Middleware`](Middleware.md)

#### Defined in

[src/functions/ApplicationCommandHandler.ts:34](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/ApplicationCommandHandler.ts#L34)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/functions/ApplicationCommandHandler.ts:31](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/ApplicationCommandHandler.ts#L31)

___

### cooldowns

• **cooldowns**: `Collection`<`string`, `Collection`<`string`, `number`\>\>

#### Defined in

[src/functions/ApplicationCommandHandler.ts:33](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/ApplicationCommandHandler.ts#L33)

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

[src/functions/ApplicationCommandHandler.ts:48](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/ApplicationCommandHandler.ts#L48)

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

[src/functions/ApplicationCommandHandler.ts:41](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/ApplicationCommandHandler.ts#L41)

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

[src/functions/ApplicationCommandHandler.ts:59](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/ApplicationCommandHandler.ts#L59)
