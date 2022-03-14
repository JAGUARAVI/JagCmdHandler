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

[src/types/index.ts:18](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L18)

___

### client

• **client**: [`Client`](../classes/Client.md)

#### Defined in

[src/types/index.ts:23](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L23)

___

### flags

• **flags**: `string`[]

Only for text commands.

#### Defined in

[src/types/index.ts:16](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L16)

___

### isApplicationCommand

• **isApplicationCommand**: `boolean`

Whether the command is an ApplicationCommand.

#### Defined in

[src/types/index.ts:20](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L20)

___

### language

• **language**: `string`

Used for messages

#### Defined in

[src/types/index.ts:22](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L22)

___

### source

• **source**: [`Message`](Types.Message.md) \| `Interaction`<`CacheType`\>

#### Defined in

[src/types/index.ts:14](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L14)

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

[src/types/index.ts:26](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L26)

___

### prompt

▸ **prompt**(`Payload`): `Promise`<{ `[key: string]`: `string`;  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `Payload` | [`PromptOptions`](Types.PromptOptions.md) |

#### Returns

`Promise`<{ `[key: string]`: `string`;  }[]\>

#### Defined in

[src/types/index.ts:27](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L27)

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

[src/types/index.ts:24](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L24)

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

[src/types/index.ts:25](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L25)
