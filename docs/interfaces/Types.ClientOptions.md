[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / ClientOptions

# Interface: ClientOptions

[Types](../modules/Types.md).ClientOptions

## Hierarchy

- `ClientOptions`

  ↳ **`ClientOptions`**

## Table of contents

### Properties

- [allowedMentions](Types.ClientOptions.md#allowedmentions)
- [data](Types.ClientOptions.md#data)
- [debug](Types.ClientOptions.md#debug)
- [disableDefaultReady](Types.ClientOptions.md#disabledefaultready)
- [failIfNotExists](Types.ClientOptions.md#failifnotexists)
- [intents](Types.ClientOptions.md#intents)
- [makeCache](Types.ClientOptions.md#makecache)
- [owners](Types.ClientOptions.md#owners)
- [partials](Types.ClientOptions.md#partials)
- [presence](Types.ClientOptions.md#presence)
- [rest](Types.ClientOptions.md#rest)
- [shardCount](Types.ClientOptions.md#shardcount)
- [shards](Types.ClientOptions.md#shards)
- [sweepers](Types.ClientOptions.md#sweepers)
- [waitGuildTimeout](Types.ClientOptions.md#waitguildtimeout)
- [ws](Types.ClientOptions.md#ws)

### Methods

- [jsonTransformer](Types.ClientOptions.md#jsontransformer)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: `MessageMentionOptions`

#### Inherited from

BaseClientOptions.allowedMentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:3793

___

### data

• `Optional` **data**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owners?` | `string`[] |

#### Defined in

[src/types/index.ts:90](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L90)

___

### debug

• `Optional` **debug**: `boolean`

#### Defined in

[src/types/index.ts:86](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L86)

___

### disableDefaultReady

• `Optional` **disableDefaultReady**: `boolean`

#### Defined in

[src/types/index.ts:89](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L89)

___

### failIfNotExists

• `Optional` **failIfNotExists**: `boolean`

#### Inherited from

BaseClientOptions.failIfNotExists

#### Defined in

node_modules/discord.js/typings/index.d.ts:3795

___

### intents

• **intents**: `BitFieldResolvable`<``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojisAndStickers"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"`` \| ``"GuildScheduledEvents"``, `number`\>

#### Inherited from

BaseClientOptions.intents

#### Defined in

node_modules/discord.js/typings/index.d.ts:3797

___

### makeCache

• `Optional` **makeCache**: `CacheFactory`

#### Inherited from

BaseClientOptions.makeCache

#### Defined in

node_modules/discord.js/typings/index.d.ts:3792

___

### owners

• `Optional` **owners**: `string`[]

Array containing Ids of bot owners (people who can use staff commands like eval.)

#### Defined in

[src/types/index.ts:88](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L88)

___

### partials

• `Optional` **partials**: `Partials`[]

#### Inherited from

BaseClientOptions.partials

#### Defined in

node_modules/discord.js/typings/index.d.ts:3794

___

### presence

• `Optional` **presence**: `PresenceData`

#### Inherited from

BaseClientOptions.presence

#### Defined in

node_modules/discord.js/typings/index.d.ts:3796

___

### rest

• `Optional` **rest**: `Partial`<`RESTOptions`\>

#### Inherited from

BaseClientOptions.rest

#### Defined in

node_modules/discord.js/typings/index.d.ts:3801

___

### shardCount

• `Optional` **shardCount**: `number`

#### Inherited from

BaseClientOptions.shardCount

#### Defined in

node_modules/discord.js/typings/index.d.ts:3791

___

### shards

• `Optional` **shards**: `number` \| `number`[] \| ``"auto"``

#### Inherited from

BaseClientOptions.shards

#### Defined in

node_modules/discord.js/typings/index.d.ts:3790

___

### sweepers

• `Optional` **sweepers**: `SweeperOptions`

#### Inherited from

BaseClientOptions.sweepers

#### Defined in

node_modules/discord.js/typings/index.d.ts:3799

___

### waitGuildTimeout

• `Optional` **waitGuildTimeout**: `number`

#### Inherited from

BaseClientOptions.waitGuildTimeout

#### Defined in

node_modules/discord.js/typings/index.d.ts:3798

___

### ws

• `Optional` **ws**: `WebSocketOptions`

#### Inherited from

BaseClientOptions.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:3800

## Methods

### jsonTransformer

▸ `Optional` **jsonTransformer**(`obj`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`unknown`

#### Inherited from

BaseClientOptions.jsonTransformer

#### Defined in

node_modules/discord.js/typings/index.d.ts:3802
