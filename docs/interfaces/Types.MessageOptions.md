[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / MessageOptions

# Interface: MessageOptions

[Types](../modules/Types.md).MessageOptions

## Hierarchy

- `MessageOptions`

- `InteractionReplyOptions`

  ↳ **`MessageOptions`**

## Table of contents

### Properties

- [allowedMentions](Types.MessageOptions.md#allowedmentions)
- [attachments](Types.MessageOptions.md#attachments)
- [components](Types.MessageOptions.md#components)
- [content](Types.MessageOptions.md#content)
- [delete](Types.MessageOptions.md#delete)
- [embeds](Types.MessageOptions.md#embeds)
- [ephemeral](Types.MessageOptions.md#ephemeral)
- [failIfNotExists](Types.MessageOptions.md#failifnotexists)
- [fetchReply](Types.MessageOptions.md#fetchreply)
- [files](Types.MessageOptions.md#files)
- [flags](Types.MessageOptions.md#flags)
- [nonce](Types.MessageOptions.md#nonce)
- [refresh](Types.MessageOptions.md#refresh)
- [reply](Types.MessageOptions.md#reply)
- [stickers](Types.MessageOptions.md#stickers)
- [threadId](Types.MessageOptions.md#threadid)
- [time](Types.MessageOptions.md#time)
- [tts](Types.MessageOptions.md#tts)

### Methods

- [pageGen](Types.MessageOptions.md#pagegen)
- [refreshData](Types.MessageOptions.md#refreshdata)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: `MessageMentionOptions`

#### Inherited from

DefaultMesageOption.allowedMentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:4712

___

### attachments

• `Optional` **attachments**: `MessageAttachment`[]

#### Inherited from

DefaultMesageOption.attachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:4716

___

### components

• `Optional` **components**: (`ActionRow`<`MessageActionRowComponent`\> \| `Required`<`BaseComponentData`\> & `ActionRowData`<`MessageActionRowComponentData`\> \| `APIActionRowComponent`<`APIMessageActionRowComponent`\>)[]

#### Inherited from

DefaultMesageOption.components

#### Defined in

node_modules/discord.js/typings/index.d.ts:4707

___

### content

• `Optional` **content**: `string`

#### Inherited from

DefaultMesageOption.content

#### Defined in

node_modules/discord.js/typings/index.d.ts:4705

___

### delete

• `Optional` **delete**: `boolean`

#### Defined in

[src/types/index.ts:65](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L65)

___

### embeds

• `Optional` **embeds**: (`Embed` \| `APIEmbed`)[]

#### Inherited from

DefaultMesageOption.embeds

#### Defined in

node_modules/discord.js/typings/index.d.ts:4706

___

### ephemeral

• `Optional` **ephemeral**: `boolean`

#### Inherited from

InteractionReplyOptions.ephemeral

#### Defined in

node_modules/discord.js/typings/index.d.ts:4562

___

### failIfNotExists

• `Optional` **failIfNotExists**: `boolean`

#### Defined in

[src/types/index.ts:66](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L66)

___

### fetchReply

• `Optional` **fetchReply**: `boolean`

#### Inherited from

InteractionReplyOptions.fetchReply

#### Defined in

node_modules/discord.js/typings/index.d.ts:4563

___

### files

• `Optional` **files**: `any`

#### Overrides

DefaultMesageOption.files

#### Defined in

[src/types/index.ts:78](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L78)

___

### flags

• `Optional` **flags**: `any`

#### Overrides

DefaultMesageOption.flags

#### Defined in

[src/types/index.ts:76](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L76)

___

### nonce

• `Optional` **nonce**: `string` \| `number`

#### Inherited from

DefaultMesageOption.nonce

#### Defined in

node_modules/discord.js/typings/index.d.ts:4704

___

### refresh

• `Optional` **refresh**: `boolean`

Only for paginate

#### Defined in

[src/types/index.ts:68](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L68)

___

### reply

• `Optional` **reply**: `ReplyOptions`

#### Inherited from

DefaultMesageOption.reply

#### Defined in

node_modules/discord.js/typings/index.d.ts:4714

___

### stickers

• `Optional` **stickers**: `StickerResolvable`[]

#### Inherited from

DefaultMesageOption.stickers

#### Defined in

node_modules/discord.js/typings/index.d.ts:4715

___

### threadId

• `Optional` **threadId**: `string`

#### Inherited from

InteractionReplyOptions.threadId

#### Defined in

node_modules/discord.js/typings/index.d.ts:5170

___

### time

• `Optional` **time**: `number`

Only for paginate & deletableMessage

#### Defined in

[src/types/index.ts:74](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L74)

___

### tts

• `Optional` **tts**: `boolean`

#### Inherited from

DefaultMesageOption.tts

#### Defined in

node_modules/discord.js/typings/index.d.ts:4703

## Methods

### pageGen

▸ `Optional` **pageGen**(): `void`

Only for paginate

#### Returns

`void`

#### Defined in

[src/types/index.ts:72](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L72)

___

### refreshData

▸ `Optional` **refreshData**(): `unknown`

Only for paginate

#### Returns

`unknown`

#### Defined in

[src/types/index.ts:70](https://github.com/JAGUARAVI/JagCmdHandler/blob/c9559fb/src/types/index.ts#L70)
