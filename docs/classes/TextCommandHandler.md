[jag-cmd-handler](../README.md) / [Exports](../modules.md) / TextCommandHandler

# Class: TextCommandHandler

## Table of contents

### Properties

- [checks](TextCommandHandler.md#checks)
- [client](TextCommandHandler.md#client)
- [cooldowns](TextCommandHandler.md#cooldowns)
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

[src/functions/TextCommandHandler.ts:37](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L37)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/functions/TextCommandHandler.ts:33](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L33)

___

### cooldowns

• **cooldowns**: `Collection`<`string`, `Collection`<`string`, `number`\>\>

#### Defined in

[src/functions/TextCommandHandler.ts:35](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L35)

___

### messageReplies

• **messageReplies**: `Map`<`string`, `string`[]\>

#### Defined in

[src/functions/TextCommandHandler.ts:36](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L36)

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

[src/functions/TextCommandHandler.ts:63](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L63)

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

[src/functions/TextCommandHandler.ts:58](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L58)

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

[src/functions/TextCommandHandler.ts:52](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L52)

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

[src/functions/TextCommandHandler.ts:74](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/functions/TextCommandHandler.ts#L74)
