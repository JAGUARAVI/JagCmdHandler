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

[src/functions/ApplicationCommandHandler.ts:15](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/ApplicationCommandHandler.ts#L15)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/functions/ApplicationCommandHandler.ts:12](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/ApplicationCommandHandler.ts#L12)

___

### cooldowns

• **cooldowns**: `Collection`<`string`, `Collection`<`string`, `number`\>\>

#### Defined in

[src/functions/ApplicationCommandHandler.ts:14](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/ApplicationCommandHandler.ts#L14)

## Methods

### getErrorEmbed

▸ **getErrorEmbed**(`msg`, `large?`, `language?`): `Embed`

Extend this function to customize error embeds..

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `large?` | `boolean` |
| `language?` | `string` |

#### Returns

`Embed`

#### Defined in

[src/functions/ApplicationCommandHandler.ts:29](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/ApplicationCommandHandler.ts#L29)

___

### getLanguage

▸ **getLanguage**(`client`, `interaction`): `Promise`<`string`\>

Extend this function to return the language you want to use for error embeds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `interaction` | `CommandInteraction`<`CacheType`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/functions/ApplicationCommandHandler.ts:22](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/ApplicationCommandHandler.ts#L22)

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

[src/functions/ApplicationCommandHandler.ts:40](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/ApplicationCommandHandler.ts#L40)
