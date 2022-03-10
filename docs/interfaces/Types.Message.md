[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / Message

# Interface: Message

[Types](../modules/Types.md).Message

## Hierarchy

- `Message`

  ↳ **`Message`**

## Table of contents

### Properties

- [activity](Types.Message.md#activity)
- [applicationId](Types.Message.md#applicationid)
- [attachments](Types.Message.md#attachments)
- [author](Types.Message.md#author)
- [channelId](Types.Message.md#channelid)
- [client](Types.Message.md#client)
- [components](Types.Message.md#components)
- [content](Types.Message.md#content)
- [createdTimestamp](Types.Message.md#createdtimestamp)
- [editedTimestamp](Types.Message.md#editedtimestamp)
- [embeds](Types.Message.md#embeds)
- [flags](Types.Message.md#flags)
- [groupActivityApplication](Types.Message.md#groupactivityapplication)
- [guildId](Types.Message.md#guildid)
- [id](Types.Message.md#id)
- [interaction](Types.Message.md#interaction)
- [mentions](Types.Message.md#mentions)
- [nonce](Types.Message.md#nonce)
- [pinned](Types.Message.md#pinned)
- [reactions](Types.Message.md#reactions)
- [reference](Types.Message.md#reference)
- [stickers](Types.Message.md#stickers)
- [system](Types.Message.md#system)
- [tts](Types.Message.md#tts)
- [type](Types.Message.md#type)
- [user](Types.Message.md#user)
- [webhookId](Types.Message.md#webhookid)

### Accessors

- [channel](Types.Message.md#channel)
- [cleanContent](Types.Message.md#cleancontent)
- [createdAt](Types.Message.md#createdat)
- [crosspostable](Types.Message.md#crosspostable)
- [deletable](Types.Message.md#deletable)
- [editable](Types.Message.md#editable)
- [editedAt](Types.Message.md#editedat)
- [guild](Types.Message.md#guild)
- [hasThread](Types.Message.md#hasthread)
- [member](Types.Message.md#member)
- [partial](Types.Message.md#partial)
- [pinnable](Types.Message.md#pinnable)
- [thread](Types.Message.md#thread)
- [url](Types.Message.md#url)

### Methods

- [awaitMessageComponent](Types.Message.md#awaitmessagecomponent)
- [awaitReactions](Types.Message.md#awaitreactions)
- [createMessageComponentCollector](Types.Message.md#createmessagecomponentcollector)
- [createReactionCollector](Types.Message.md#createreactioncollector)
- [crosspost](Types.Message.md#crosspost)
- [delete](Types.Message.md#delete)
- [edit](Types.Message.md#edit)
- [equals](Types.Message.md#equals)
- [fetch](Types.Message.md#fetch)
- [fetchReference](Types.Message.md#fetchreference)
- [fetchWebhook](Types.Message.md#fetchwebhook)
- [inGuild](Types.Message.md#inguild)
- [pin](Types.Message.md#pin)
- [react](Types.Message.md#react)
- [removeAttachments](Types.Message.md#removeattachments)
- [reply](Types.Message.md#reply)
- [resolveComponent](Types.Message.md#resolvecomponent)
- [startThread](Types.Message.md#startthread)
- [suppressEmbeds](Types.Message.md#suppressembeds)
- [toJSON](Types.Message.md#tojson)
- [toString](Types.Message.md#tostring)
- [unpin](Types.Message.md#unpin)
- [valueOf](Types.Message.md#valueof)

## Properties

### activity

• **activity**: `MessageActivity`

#### Inherited from

BaseMessage.activity

#### Defined in

node_modules/discord.js/typings/index.d.ts:1520

___

### applicationId

• **applicationId**: `string`

#### Inherited from

BaseMessage.applicationId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1521

___

### attachments

• **attachments**: `Collection`<`string`, `MessageAttachment`\>

#### Inherited from

BaseMessage.attachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:1522

___

### author

• **author**: `User`

#### Inherited from

BaseMessage.author

#### Defined in

node_modules/discord.js/typings/index.d.ts:1523

___

### channelId

• **channelId**: `string`

#### Inherited from

BaseMessage.channelId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1525

___

### client

• `Readonly` **client**: `Client`<`boolean`\>

#### Inherited from

BaseMessage.client

#### Defined in

node_modules/discord.js/typings/index.d.ts:323

___

### components

• **components**: `ActionRow`<`MessageActionRowComponent`\>[]

#### Inherited from

BaseMessage.components

#### Defined in

node_modules/discord.js/typings/index.d.ts:1527

___

### content

• **content**: `string`

#### Inherited from

BaseMessage.content

#### Defined in

node_modules/discord.js/typings/index.d.ts:1528

___

### createdTimestamp

• **createdTimestamp**: `number`

#### Inherited from

BaseMessage.createdTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:1530

___

### editedTimestamp

• **editedTimestamp**: `number`

#### Inherited from

BaseMessage.editedTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:1535

___

### embeds

• **embeds**: `Embed`[]

#### Inherited from

BaseMessage.embeds

#### Defined in

node_modules/discord.js/typings/index.d.ts:1536

___

### flags

• **flags**: `Readonly`<`MessageFlagsBitField`\>

#### Inherited from

BaseMessage.flags

#### Defined in

node_modules/discord.js/typings/index.d.ts:1557

___

### groupActivityApplication

• **groupActivityApplication**: `ClientApplication`

#### Inherited from

BaseMessage.groupActivityApplication

#### Defined in

node_modules/discord.js/typings/index.d.ts:1537

___

### guildId

• **guildId**: `string`

#### Inherited from

BaseMessage.guildId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1538

___

### id

• **id**: `string`

#### Inherited from

BaseMessage.id

#### Defined in

node_modules/discord.js/typings/index.d.ts:1541

___

### interaction

• **interaction**: `MessageInteraction`

#### Inherited from

BaseMessage.interaction

#### Defined in

node_modules/discord.js/typings/index.d.ts:1542

___

### mentions

• **mentions**: `MessageMentions`

#### Inherited from

BaseMessage.mentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:1544

___

### nonce

• **nonce**: `string` \| `number`

#### Inherited from

BaseMessage.nonce

#### Defined in

node_modules/discord.js/typings/index.d.ts:1545

___

### pinned

• **pinned**: `boolean`

#### Inherited from

BaseMessage.pinned

#### Defined in

node_modules/discord.js/typings/index.d.ts:1548

___

### reactions

• **reactions**: `ReactionManager`

#### Inherited from

BaseMessage.reactions

#### Defined in

node_modules/discord.js/typings/index.d.ts:1549

___

### reference

• **reference**: `MessageReference`

#### Inherited from

BaseMessage.reference

#### Defined in

node_modules/discord.js/typings/index.d.ts:1558

___

### stickers

• **stickers**: `Collection`<`string`, `Sticker`\>

#### Inherited from

BaseMessage.stickers

#### Defined in

node_modules/discord.js/typings/index.d.ts:1550

___

### system

• **system**: `boolean`

#### Inherited from

BaseMessage.system

#### Defined in

node_modules/discord.js/typings/index.d.ts:1551

___

### tts

• **tts**: `boolean`

#### Inherited from

BaseMessage.tts

#### Defined in

node_modules/discord.js/typings/index.d.ts:1553

___

### type

• **type**: `MessageType`

#### Inherited from

BaseMessage.type

#### Defined in

node_modules/discord.js/typings/index.d.ts:1554

___

### user

• `Optional` **user**: `User`

#### Defined in

[src/types/index.ts:5](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L5)

___

### webhookId

• **webhookId**: `string`

#### Inherited from

BaseMessage.webhookId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1556

## Accessors

### channel

• `get` **channel**(): `If`<`Cached`, `GuildTextBasedChannel`, `TextBasedChannel`\>

#### Returns

`If`<`Cached`, `GuildTextBasedChannel`, `TextBasedChannel`\>

#### Inherited from

BaseMessage.channel

#### Defined in

node_modules/discord.js/typings/index.d.ts:1524

___

### cleanContent

• `get` **cleanContent**(): `string`

#### Returns

`string`

#### Inherited from

BaseMessage.cleanContent

#### Defined in

node_modules/discord.js/typings/index.d.ts:1526

___

### createdAt

• `get` **createdAt**(): `Date`

#### Returns

`Date`

#### Inherited from

BaseMessage.createdAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:1529

___

### crosspostable

• `get` **crosspostable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessage.crosspostable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1531

___

### deletable

• `get` **deletable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessage.deletable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1532

___

### editable

• `get` **editable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessage.editable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1533

___

### editedAt

• `get` **editedAt**(): `Date`

#### Returns

`Date`

#### Inherited from

BaseMessage.editedAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:1534

___

### guild

• `get` **guild**(): `If`<`Cached`, `Guild`, ``null``\>

#### Returns

`If`<`Cached`, `Guild`, ``null``\>

#### Inherited from

BaseMessage.guild

#### Defined in

node_modules/discord.js/typings/index.d.ts:1539

___

### hasThread

• `get` **hasThread**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessage.hasThread

#### Defined in

node_modules/discord.js/typings/index.d.ts:1540

___

### member

• `get` **member**(): `GuildMember`

#### Returns

`GuildMember`

#### Inherited from

BaseMessage.member

#### Defined in

node_modules/discord.js/typings/index.d.ts:1543

___

### partial

• `get` **partial**(): ``false``

#### Returns

``false``

#### Inherited from

BaseMessage.partial

#### Defined in

node_modules/discord.js/typings/index.d.ts:1546

___

### pinnable

• `get` **pinnable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessage.pinnable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1547

___

### thread

• `get` **thread**(): `ThreadChannel`

#### Returns

`ThreadChannel`

#### Inherited from

BaseMessage.thread

#### Defined in

node_modules/discord.js/typings/index.d.ts:1552

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Inherited from

BaseMessage.url

#### Defined in

node_modules/discord.js/typings/index.d.ts:1555

## Methods

### awaitMessageComponent

▸ **awaitMessageComponent**<`T`\>(`options?`): `Promise`<`MappedInteractionTypes`<`boolean`\>[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `MessageComponentType` = `ActionRow` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `componentType?`: `T`  } & `Pick`<`InteractionCollectorOptions`<`MappedInteractionTypes`<`boolean`\>[`T`], `CacheType`\>, ``"componentType"`` \| ``"filter"`` \| ``"time"`` \| ``"idle"`` \| ``"dispose"``\> |

#### Returns

`Promise`<`MappedInteractionTypes`<`boolean`\>[`T`]\>

#### Inherited from

BaseMessage.awaitMessageComponent

#### Defined in

node_modules/discord.js/typings/index.d.ts:1559

___

### awaitReactions

▸ **awaitReactions**(`options?`): `Promise`<`Collection`<`string`, `MessageReaction`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AwaitReactionsOptions` |

#### Returns

`Promise`<`Collection`<`string`, `MessageReaction`\>\>

#### Inherited from

BaseMessage.awaitReactions

#### Defined in

node_modules/discord.js/typings/index.d.ts:1562

___

### createMessageComponentCollector

▸ **createMessageComponentCollector**<`T`\>(`options?`): `InteractionCollector`<`MappedInteractionTypes`<`boolean`\>[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `MessageComponentType` = `ActionRow` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `componentType?`: `T`  } & `MessageComponentCollectorOptions`<`MappedInteractionTypes`<`boolean`\>[`T`]\> |

#### Returns

`InteractionCollector`<`MappedInteractionTypes`<`boolean`\>[`T`]\>

#### Inherited from

BaseMessage.createMessageComponentCollector

#### Defined in

node_modules/discord.js/typings/index.d.ts:1564

___

### createReactionCollector

▸ **createReactionCollector**(`options?`): `ReactionCollector`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ReactionCollectorOptions` |

#### Returns

`ReactionCollector`

#### Inherited from

BaseMessage.createReactionCollector

#### Defined in

node_modules/discord.js/typings/index.d.ts:1563

___

### crosspost

▸ **crosspost**(): `Promise`<`Message`<`boolean`\>\>

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.crosspost

#### Defined in

node_modules/discord.js/typings/index.d.ts:1572

___

### delete

▸ **delete**(): `Promise`<`Message`<`boolean`\>\>

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.delete

#### Defined in

node_modules/discord.js/typings/index.d.ts:1567

___

### edit

▸ **edit**(`content`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| `MessageEditOptions` \| `MessagePayload` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.edit

#### Defined in

node_modules/discord.js/typings/index.d.ts:1568

___

### equals

▸ **equals**(`message`, `rawData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`boolean`\> |
| `rawData` | `unknown` |

#### Returns

`boolean`

#### Inherited from

BaseMessage.equals

#### Defined in

node_modules/discord.js/typings/index.d.ts:1569

___

### fetch

▸ **fetch**(`force?`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.fetch

#### Defined in

node_modules/discord.js/typings/index.d.ts:1573

___

### fetchReference

▸ **fetchReference**(): `Promise`<`Message`<`boolean`\>\>

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.fetchReference

#### Defined in

node_modules/discord.js/typings/index.d.ts:1570

___

### fetchWebhook

▸ **fetchWebhook**(): `Promise`<`Webhook`\>

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

BaseMessage.fetchWebhook

#### Defined in

node_modules/discord.js/typings/index.d.ts:1571

___

### inGuild

▸ **inGuild**(): this is Message<true\> & Message

#### Returns

this is Message<true\> & Message

#### Inherited from

BaseMessage.inGuild

#### Defined in

node_modules/discord.js/typings/index.d.ts:1584

___

### pin

▸ **pin**(`reason?`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.pin

#### Defined in

node_modules/discord.js/typings/index.d.ts:1574

___

### react

▸ **react**(`emoji`): `Promise`<`MessageReaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `EmojiIdentifierResolvable` |

#### Returns

`Promise`<`MessageReaction`\>

#### Inherited from

BaseMessage.react

#### Defined in

node_modules/discord.js/typings/index.d.ts:1575

___

### removeAttachments

▸ **removeAttachments**(): `Promise`<`Message`<`boolean`\>\>

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.removeAttachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:1576

___

### reply

▸ **reply**(`options`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `MessagePayload` \| `ReplyMessageOptions` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.reply

#### Defined in

node_modules/discord.js/typings/index.d.ts:1577

___

### resolveComponent

▸ **resolveComponent**(`customId`): `MessageActionRowComponent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `customId` | `string` |

#### Returns

`MessageActionRowComponent`

#### Inherited from

BaseMessage.resolveComponent

#### Defined in

node_modules/discord.js/typings/index.d.ts:1578

___

### startThread

▸ **startThread**(`options`): `Promise`<`ThreadChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `StartThreadOptions` |

#### Returns

`Promise`<`ThreadChannel`\>

#### Inherited from

BaseMessage.startThread

#### Defined in

node_modules/discord.js/typings/index.d.ts:1579

___

### suppressEmbeds

▸ **suppressEmbeds**(`suppress?`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `suppress?` | `boolean` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.suppressEmbeds

#### Defined in

node_modules/discord.js/typings/index.d.ts:1580

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

BaseMessage.toJSON

#### Defined in

node_modules/discord.js/typings/index.d.ts:1581

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

BaseMessage.toString

#### Defined in

node_modules/discord.js/typings/index.d.ts:1582

___

### unpin

▸ **unpin**(`reason?`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Inherited from

BaseMessage.unpin

#### Defined in

node_modules/discord.js/typings/index.d.ts:1583

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

BaseMessage.valueOf

#### Defined in

node_modules/discord.js/typings/index.d.ts:325