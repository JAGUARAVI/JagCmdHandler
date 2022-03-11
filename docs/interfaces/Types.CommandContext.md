[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / CommandContext

# Interface: CommandContext

[Types](../modules/Types.md).CommandContext

## Table of contents

### Properties

- [args](Types.CommandContext.md#args)
- [client](Types.CommandContext.md#client)
- [flags](Types.CommandContext.md#flags)
- [isApplicationCommand](Types.CommandContext.md#isapplicationcommand)
- [language](Types.CommandContext.md#language)
- [source](Types.CommandContext.md#source)

### Methods

- [paginate](Types.CommandContext.md#paginate)
- [prompt](Types.CommandContext.md#prompt)
- [reply](Types.CommandContext.md#reply)
- [send](Types.CommandContext.md#send)

## Properties

### args

• **args**: `string`[]

Only for text commands.

#### Defined in

[src/types/index.ts:17](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L17)

___

### client

• **client**: [`Client`](../classes/Client.md)

#### Defined in

[src/types/index.ts:22](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L22)

___

### flags

• **flags**: `string`[]

Only for text commands.

#### Defined in

[src/types/index.ts:15](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L15)

___

### isApplicationCommand

• **isApplicationCommand**: `boolean`

Whether the command is an ApplicationCommand.

#### Defined in

[src/types/index.ts:19](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L19)

___

### language

• **language**: `string`

Used for messages

#### Defined in

[src/types/index.ts:21](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L21)

___

### source

• **source**: [`Message`](Types.Message.md) \| `Interaction`<`CacheType`\>

#### Defined in

[src/types/index.ts:13](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L13)

## Methods

### paginate

▸ **paginate**(`Payload`): `Promise`<[`Message`](Types.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `MessagePayload` \| [`MessageOptions`](Types.MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Types.Message.md)\>

#### Defined in

[src/types/index.ts:25](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L25)

___

### prompt

▸ **prompt**(`Payload`): `Promise`<[`Message`](Types.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `MessagePayload` \| [`MessageOptions`](Types.MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Types.Message.md)\>

#### Defined in

[src/types/index.ts:26](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L26)

___

### reply

▸ **reply**(`Payload`): `Promise`<[`Message`](Types.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `MessagePayload` \| [`MessageOptions`](Types.MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Types.Message.md)\>

#### Defined in

[src/types/index.ts:23](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L23)

___

### send

▸ **send**(`Payload`): `Promise`<[`Message`](Types.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `MessagePayload` \| [`MessageOptions`](Types.MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Types.Message.md)\>

#### Defined in

[src/types/index.ts:24](https://github.com/JAGUARAVI/JagCmdHandler/blob/76c0a4e/src/types/index.ts#L24)
