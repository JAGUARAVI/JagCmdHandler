[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / MessageOptions

# Interface: MessageOptions

[Types](../modules/Types.md).MessageOptions

## Hierarchy

- `MessageOptions`

- `InteractionReplyOptions`

- `MessageEditOptions`

  ↳ **`MessageOptions`**

  ↳↳ [`PaginateMessageOptions`](Types.PaginateMessageOptions.md)

## Table of contents

### Properties

- [allowedMentions](Types.MessageOptions.md#allowedmentions)
- [attachments](Types.MessageOptions.md#attachments)
- [components](Types.MessageOptions.md#components)
- [content](Types.MessageOptions.md#content)
- [delete](Types.MessageOptions.md#delete)
- [embeds](Types.MessageOptions.md#embeds)
- [ephemeral](Types.MessageOptions.md#ephemeral)
- [fetchReply](Types.MessageOptions.md#fetchreply)
- [files](Types.MessageOptions.md#files)
- [flags](Types.MessageOptions.md#flags)
- [nonce](Types.MessageOptions.md#nonce)
- [reply](Types.MessageOptions.md#reply)
- [stickers](Types.MessageOptions.md#stickers)
- [threadId](Types.MessageOptions.md#threadid)
- [time](Types.MessageOptions.md#time)
- [tts](Types.MessageOptions.md#tts)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: `MessageMentionOptions`

#### Inherited from

DefaultMesageOption.allowedMentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:4759

___

### attachments

• `Optional` **attachments**: `MessageAttachment`[]

#### Inherited from

DefaultMesageOption.attachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:4763

___

### components

• `Optional` **components**: (`ActionRow`<`MessageActionRowComponent`\> \| `APIActionRowComponent`<`APIMessageActionRowComponent`\> \| `JSONEncodable`<`APIActionRowComponent`<`APIMessageActionRowComponent`\>\> \| `Required`<`BaseComponentData`\> & `ActionRowData`<`MessageActionRowComponent` \| `MessageActionRowComponentData`\>)[]

#### Inherited from

DefaultMesageOption.components

#### Defined in

node_modules/discord.js/typings/index.d.ts:4753

___

### content

• `Optional` **content**: `string`

#### Inherited from

DefaultMesageOption.content

#### Defined in

node_modules/discord.js/typings/index.d.ts:4751

___

### delete

• `Optional` **delete**: `boolean`

For sending DeletableMessages

#### Defined in

[src/types/index.ts:85](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L85)

___

### embeds

• `Optional` **embeds**: (`APIEmbed` \| `JSONEncodable`<`APIEmbed`\>)[]

#### Inherited from

DefaultMesageOption.embeds

#### Defined in

node_modules/discord.js/typings/index.d.ts:4752

___

### ephemeral

• `Optional` **ephemeral**: `boolean`

#### Inherited from

InteractionReplyOptions.ephemeral

#### Defined in

node_modules/discord.js/typings/index.d.ts:4603

___

### fetchReply

• `Optional` **fetchReply**: `boolean`

#### Inherited from

InteractionReplyOptions.fetchReply

#### Defined in

node_modules/discord.js/typings/index.d.ts:4604

___

### files

• `Optional` **files**: (`MessageAttachment` \| `FileOptions` \| `BufferResolvable` \| `Stream`)[]

#### Inherited from

DefaultMesageOption.files

#### Defined in

node_modules/discord.js/typings/index.d.ts:4760

___

### flags

• `Optional` **flags**: `any`

#### Overrides

DefaultMesageOption.flags

#### Defined in

[src/types/index.ts:88](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L88)

___

### nonce

• `Optional` **nonce**: `string` \| `number`

#### Inherited from

DefaultMesageOption.nonce

#### Defined in

node_modules/discord.js/typings/index.d.ts:4750

___

### reply

• `Optional` **reply**: `ReplyOptions`

#### Inherited from

DefaultMesageOption.reply

#### Defined in

node_modules/discord.js/typings/index.d.ts:4761

___

### stickers

• `Optional` **stickers**: `StickerResolvable`[]

#### Inherited from

DefaultMesageOption.stickers

#### Defined in

node_modules/discord.js/typings/index.d.ts:4762

___

### threadId

• `Optional` **threadId**: `string`

#### Inherited from

InteractionReplyOptions.threadId

#### Defined in

node_modules/discord.js/typings/index.d.ts:5217

___

### time

• `Optional` **time**: `number`

#### Defined in

[src/types/index.ts:86](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L86)

___

### tts

• `Optional` **tts**: `boolean`

#### Inherited from

DefaultMesageOption.tts

#### Defined in

node_modules/discord.js/typings/index.d.ts:4749
