[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / PaginateMessageOptions

# Interface: PaginateMessageOptions

[Types](../modules/Types.md).PaginateMessageOptions

## Hierarchy

- [`MessageOptions`](Types.MessageOptions.md)

  ↳ **`PaginateMessageOptions`**

## Table of contents

### Properties

- [allowedMentions](Types.PaginateMessageOptions.md#allowedmentions)
- [attachments](Types.PaginateMessageOptions.md#attachments)
- [components](Types.PaginateMessageOptions.md#components)
- [content](Types.PaginateMessageOptions.md#content)
- [delete](Types.PaginateMessageOptions.md#delete)
- [embeds](Types.PaginateMessageOptions.md#embeds)
- [ephemeral](Types.PaginateMessageOptions.md#ephemeral)
- [fetchReply](Types.PaginateMessageOptions.md#fetchreply)
- [files](Types.PaginateMessageOptions.md#files)
- [flags](Types.PaginateMessageOptions.md#flags)
- [nonce](Types.PaginateMessageOptions.md#nonce)
- [refresh](Types.PaginateMessageOptions.md#refresh)
- [reply](Types.PaginateMessageOptions.md#reply)
- [stickers](Types.PaginateMessageOptions.md#stickers)
- [threadId](Types.PaginateMessageOptions.md#threadid)
- [time](Types.PaginateMessageOptions.md#time)
- [tts](Types.PaginateMessageOptions.md#tts)

### Methods

- [pageGen](Types.PaginateMessageOptions.md#pagegen)
- [refreshData](Types.PaginateMessageOptions.md#refreshdata)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: `MessageMentionOptions`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[allowedMentions](Types.MessageOptions.md#allowedmentions)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4759

___

### attachments

• `Optional` **attachments**: `MessageAttachment`[]

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[attachments](Types.MessageOptions.md#attachments)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4763

___

### components

• `Optional` **components**: (`ActionRow`<`MessageActionRowComponent`\> \| `APIActionRowComponent`<`APIMessageActionRowComponent`\> \| `JSONEncodable`<`APIActionRowComponent`<`APIMessageActionRowComponent`\>\> \| `Required`<`BaseComponentData`\> & `ActionRowData`<`MessageActionRowComponent` \| `MessageActionRowComponentData`\>)[]

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[components](Types.MessageOptions.md#components)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4753

___

### content

• `Optional` **content**: `string`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[content](Types.MessageOptions.md#content)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4751

___

### delete

• `Optional` **delete**: `boolean`

For sending DeletableMessages

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[delete](Types.MessageOptions.md#delete)

#### Defined in

[src/types/index.ts:85](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L85)

___

### embeds

• `Optional` **embeds**: (`APIEmbed` \| `JSONEncodable`<`APIEmbed`\>)[]

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[embeds](Types.MessageOptions.md#embeds)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4752

___

### ephemeral

• `Optional` **ephemeral**: `boolean`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[ephemeral](Types.MessageOptions.md#ephemeral)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4603

___

### fetchReply

• `Optional` **fetchReply**: `boolean`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[fetchReply](Types.MessageOptions.md#fetchreply)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4604

___

### files

• `Optional` **files**: (`MessageAttachment` \| `FileOptions` \| `BufferResolvable` \| `Stream`)[]

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[files](Types.MessageOptions.md#files)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4760

___

### flags

• `Optional` **flags**: `any`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[flags](Types.MessageOptions.md#flags)

#### Defined in

[src/types/index.ts:88](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L88)

___

### nonce

• `Optional` **nonce**: `string` \| `number`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[nonce](Types.MessageOptions.md#nonce)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4750

___

### refresh

• `Optional` **refresh**: `boolean`

#### Defined in

[src/types/index.ts:93](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L93)

___

### reply

• `Optional` **reply**: `ReplyOptions`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[reply](Types.MessageOptions.md#reply)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4761

___

### stickers

• `Optional` **stickers**: `StickerResolvable`[]

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[stickers](Types.MessageOptions.md#stickers)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4762

___

### threadId

• `Optional` **threadId**: `string`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[threadId](Types.MessageOptions.md#threadid)

#### Defined in

node_modules/discord.js/typings/index.d.ts:5217

___

### time

• `Optional` **time**: `number`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[time](Types.MessageOptions.md#time)

#### Defined in

[src/types/index.ts:86](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L86)

___

### tts

• `Optional` **tts**: `boolean`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[tts](Types.MessageOptions.md#tts)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4749

## Methods

### pageGen

▸ `Optional` **pageGen**(): `void`

Only for paginate

#### Returns

`void`

#### Defined in

[src/types/index.ts:97](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L97)

___

### refreshData

▸ `Optional` **refreshData**(): `unknown`

Only for paginate

#### Returns

`unknown`

#### Defined in

[src/types/index.ts:95](https://github.com/JAGUARAVI/JagCmdHandler/blob/e70513f/src/types/index.ts#L95)
