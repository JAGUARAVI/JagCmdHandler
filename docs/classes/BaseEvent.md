[jag-cmd-handler](../README.md) / [Exports](../modules.md) / BaseEvent

# Class: BaseEvent

## Table of contents

### Constructors

- [constructor](BaseEvent.md#constructor)

### Properties

- [name](BaseEvent.md#name)

### Methods

- [run](BaseEvent.md#run)

## Constructors

### constructor

• **new BaseEvent**(`eventName`)

Name of the event for which the body is executed when emitted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Defined in

[src/classes/base/BaseEvent.ts:7](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseEvent.ts#L7)

## Properties

### name

• **name**: `string`

#### Defined in

[src/classes/base/BaseEvent.ts:4](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseEvent.ts#L4)

## Methods

### run

▸ **run**(`client`, ...`data`): `Promise`<`any`\>

Event body which gets executed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `...data` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/classes/base/BaseEvent.ts:12](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/classes/base/BaseEvent.ts#L12)
