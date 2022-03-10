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

[src/functions/TextCommandHandler.ts:16](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L16)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/functions/TextCommandHandler.ts:12](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L12)

___

### cooldowns

• **cooldowns**: `Collection`<`string`, `Collection`<`string`, `number`\>\>

#### Defined in

[src/functions/TextCommandHandler.ts:14](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L14)

___

### messageReplies

• **messageReplies**: `Map`<`string`, `string`[]\>

#### Defined in

[src/functions/TextCommandHandler.ts:15](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L15)

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

[src/functions/TextCommandHandler.ts:42](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L42)

___

### getLanguage

▸ **getLanguage**(`client`, `message`): `Promise`<`string`\>

Extend this function to return the language you want to use for error embeds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `message` | [`Message`](../interfaces/Types.Message.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/functions/TextCommandHandler.ts:37](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L37)

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

[src/functions/TextCommandHandler.ts:31](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L31)

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

[src/functions/TextCommandHandler.ts:53](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/functions/TextCommandHandler.ts#L53)
