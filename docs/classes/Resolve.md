[jag-cmd-handler](../README.md) / [Exports](../modules.md) / Resolve

# Class: Resolve

## Table of contents

### Constructors

- [constructor](Resolve.md#constructor)

### Properties

- [client](Resolve.md#client)

### Methods

- [channel](Resolve.md#channel)
- [member](Resolve.md#member)
- [role](Resolve.md#role)
- [user](Resolve.md#user)

## Constructors

### constructor

• **new Resolve**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Defined in

[src/classes/Resolve.ts:7](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Resolve.ts#L7)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/classes/Resolve.ts:5](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Resolve.ts#L5)

## Methods

### channel

▸ **channel**(`search`, `guild`): `Channel`

Resolves a Channel from search string and Guild to search from.

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `string` |
| `guild` | `Guild` |

#### Returns

`Channel`

#### Defined in

[src/classes/Resolve.ts:41](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Resolve.ts#L41)

___

### member

▸ **member**(`search`, `guild`): `Promise`<`void` \| `GuildMember`\>

Resolves a GuildMember from search string and Guild to search from.

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `string` |
| `guild` | `Guild` |

#### Returns

`Promise`<`void` \| `GuildMember`\>

#### Defined in

[src/classes/Resolve.ts:23](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Resolve.ts#L23)

___

### role

▸ **role**(`search`, `guild`): `Role`

Resolves a Role from search string and Guild to search from.

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `string` |
| `guild` | `Guild` |

#### Returns

`Role`

#### Defined in

[src/classes/Resolve.ts:31](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Resolve.ts#L31)

___

### user

▸ **user**(`search`): `Promise`<`void` \| `User`\>

Resolves a User object from search string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `string` |

#### Returns

`Promise`<`void` \| `User`\>

#### Defined in

[src/classes/Resolve.ts:12](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Resolve.ts#L12)
