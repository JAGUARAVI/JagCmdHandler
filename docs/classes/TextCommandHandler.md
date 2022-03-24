[jag-cmd-handler](../README.md) / [Exports](../modules.md) / TextCommandHandler

# Class: TextCommandHandler

## Table of contents

### Properties

- [checks](TextCommandHandler.md#checks)
- [client](TextCommandHandler.md#client)
- [cooldowns](TextCommandHandler.md#cooldowns)
- [deleteByDefault](TextCommandHandler.md#deletebydefault)
- [messageReplies](TextCommandHandler.md#messagereplies)

### Methods

- [getErrorEmbed](TextCommandHandler.md#geterrorembed)
- [getLanguage](TextCommandHandler.md#getlanguage)
- [getPrefix](TextCommandHandler.md#getprefix)
- [handle](TextCommandHandler.md#handle)

## Properties

### checks

• **checks**: [`Middleware`](Middleware.md)

#### Defined in

[src/functions/TextCommandHandler.ts:41](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L41)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/functions/TextCommandHandler.ts:34](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L34)

___

### cooldowns

• **cooldowns**: `Collection`<`string`, `Collection`<`string`, `number`\>\>

#### Defined in

[src/functions/TextCommandHandler.ts:39](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L39)

___

### deleteByDefault

• **deleteByDefault**: `boolean`

Whether or not to send a DeletableMessage by default.

#### Defined in

[src/functions/TextCommandHandler.ts:37](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L37)

___

### messageReplies

• **messageReplies**: `Map`<`string`, `string`[]\>

#### Defined in

[src/functions/TextCommandHandler.ts:40](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L40)

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

[src/functions/TextCommandHandler.ts:68](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L68)

___

### getLanguage

▸ **getLanguage**(`client`, `message`): `Promise`<`string`\>

Extend this function to return the language you want to use for error Embeds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `message` | [`Message`](../interfaces/Types.Message.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/functions/TextCommandHandler.ts:63](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L63)

___

### getPrefix

▸ **getPrefix**(`client`, `message`): `Promise`<`string` \| `string`[]\>

Extend this function to return the prefix to be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `message` | [`Message`](../interfaces/Types.Message.md) |

#### Returns

`Promise`<`string` \| `string`[]\>

#### Defined in

[src/functions/TextCommandHandler.ts:57](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L57)

___

### handle

▸ **handle**(`client`, `message`, `next`, `defaultChecks?`): `Promise`<`void`\>

This is the function which handles the messages.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `client` | [`Client`](Client.md) | `undefined` |
| `message` | [`Message`](../interfaces/Types.Message.md) | `undefined` |
| `next` | () => `void` | `undefined` |
| `defaultChecks` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/functions/TextCommandHandler.ts:79](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/functions/TextCommandHandler.ts#L79)
