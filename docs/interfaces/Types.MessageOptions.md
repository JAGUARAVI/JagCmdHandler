[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / MessageOptions

# Interface: MessageOptions

[Types](../modules/Types.md).MessageOptions

## Hierarchy

- `MessageOptions`

- `InteractionReplyOptions`

- `MessageEditOptions`

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

node_modules/discord.js/typings/index.d.ts:4788

___

### attachments

• `Optional` **attachments**: `MessageAttachment`[]

#### Inherited from

DefaultMesageOption.attachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:4792

___

### components

• `Optional` **components**: (`ActionRow`<`MessageActionRowComponent`\> \| `APIActionRowComponent`<`APIMessageActionRowComponent`\> \| `JSONEncodable`<`APIActionRowComponent`<`APIMessageActionRowComponent`\>\> \| `Required`<`BaseComponentData`\> & `ActionRowData`<`MessageActionRowComponent` \| `MessageActionRowComponentData`\>)[]

#### Inherited from

DefaultMesageOption.components

#### Defined in

node_modules/discord.js/typings/index.d.ts:4782

___

### content

• `Optional` **content**: `string`

#### Inherited from

DefaultMesageOption.content

#### Defined in

node_modules/discord.js/typings/index.d.ts:4780

___

### delete

• `Optional` **delete**: `boolean`

#### Defined in

[src/types/index.ts:66](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L66)

___

### embeds

• `Optional` **embeds**: `any`

#### Overrides

DefaultMesageOption.embeds

#### Defined in

[src/types/index.ts:81](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L81)

___

### ephemeral

• `Optional` **ephemeral**: `boolean`

#### Inherited from

InteractionReplyOptions.ephemeral

#### Defined in

node_modules/discord.js/typings/index.d.ts:4632

___

### failIfNotExists

• `Optional` **failIfNotExists**: `boolean`

#### Defined in

[src/types/index.ts:67](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L67)

___

### fetchReply

• `Optional` **fetchReply**: `boolean`

#### Inherited from

InteractionReplyOptions.fetchReply

#### Defined in

node_modules/discord.js/typings/index.d.ts:4633

___

### files

• `Optional` **files**: `any`

#### Overrides

DefaultMesageOption.files

#### Defined in

[src/types/index.ts:79](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L79)

___

### flags

• `Optional` **flags**: `any`

#### Overrides

DefaultMesageOption.flags

#### Defined in

[src/types/index.ts:77](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L77)

___

### nonce

• `Optional` **nonce**: `string` \| `number`

#### Inherited from

DefaultMesageOption.nonce

#### Defined in

node_modules/discord.js/typings/index.d.ts:4779

___

### refresh

• `Optional` **refresh**: `boolean`

Only for paginate

#### Defined in

[src/types/index.ts:69](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L69)

___

### reply

• `Optional` **reply**: `ReplyOptions`

#### Inherited from

DefaultMesageOption.reply

#### Defined in

node_modules/discord.js/typings/index.d.ts:4790

___

### stickers

• `Optional` **stickers**: `StickerResolvable`[]

#### Inherited from

DefaultMesageOption.stickers

#### Defined in

node_modules/discord.js/typings/index.d.ts:4791

___

### threadId

• `Optional` **threadId**: `string`

#### Inherited from

InteractionReplyOptions.threadId

#### Defined in

node_modules/discord.js/typings/index.d.ts:5246

___

### time

• `Optional` **time**: `number`

Only for paginate & deletableMessage

#### Defined in

[src/types/index.ts:75](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L75)

___

### tts

• `Optional` **tts**: `boolean`

#### Inherited from

DefaultMesageOption.tts

#### Defined in

node_modules/discord.js/typings/index.d.ts:4778

## Methods

### pageGen

▸ `Optional` **pageGen**(): `void`

Only for paginate

#### Returns

`void`

#### Defined in

[src/types/index.ts:73](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L73)

___

### refreshData

▸ `Optional` **refreshData**(): `unknown`

Only for paginate

#### Returns

`unknown`

#### Defined in

[src/types/index.ts:71](https://github.com/JAGUARAVI/JagCmdHandler/blob/bd4ae4b/src/types/index.ts#L71)
