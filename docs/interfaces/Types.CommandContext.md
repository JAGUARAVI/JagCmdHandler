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

[src/types/index.ts:36](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L36)

___

### client

• **client**: [`Client`](../classes/Client.md)

#### Defined in

[src/types/index.ts:41](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L41)

___

### flags

• **flags**: `string`[]

Only for text commands.

#### Defined in

[src/types/index.ts:34](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L34)

___

### isApplicationCommand

• **isApplicationCommand**: `boolean`

Whether the command is an ApplicationCommand.

#### Defined in

[src/types/index.ts:38](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L38)

___

### language

• **language**: `string`

Used for messages

#### Defined in

[src/types/index.ts:40](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L40)

___

### source

• **source**: [`Message`](Types.Message.md) \| `Interaction`<`CacheType`\>

#### Defined in

[src/types/index.ts:32](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L32)

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

[src/types/index.ts:44](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L44)

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

[src/types/index.ts:45](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L45)

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

[src/types/index.ts:42](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L42)

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

[src/types/index.ts:43](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L43)
