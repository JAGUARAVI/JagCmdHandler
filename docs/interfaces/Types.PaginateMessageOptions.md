[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / PaginateMessageOptions

# Interface: PaginateMessageOptions

[Types](../modules/Types.md).PaginateMessageOptions

## Hierarchy

- [`MessageOptions`](Types.MessageOptions.md)

- `Omit`<`APIEmbed`, ``"timestamp"`` \| ``"video"`` \| ``"provider"`` \| ``"type"`` \| ``"fields"``\>

  ↳ **`PaginateMessageOptions`**

## Table of contents

### Properties

- [allowedMentions](Types.PaginateMessageOptions.md#allowedmentions)
- [attachments](Types.PaginateMessageOptions.md#attachments)
- [author](Types.PaginateMessageOptions.md#author)
- [color](Types.PaginateMessageOptions.md#color)
- [components](Types.PaginateMessageOptions.md#components)
- [content](Types.PaginateMessageOptions.md#content)
- [delete](Types.PaginateMessageOptions.md#delete)
- [description](Types.PaginateMessageOptions.md#description)
- [embeds](Types.PaginateMessageOptions.md#embeds)
- [ephemeral](Types.PaginateMessageOptions.md#ephemeral)
- [fetchReply](Types.PaginateMessageOptions.md#fetchreply)
- [files](Types.PaginateMessageOptions.md#files)
- [flags](Types.PaginateMessageOptions.md#flags)
- [footer](Types.PaginateMessageOptions.md#footer)
- [image](Types.PaginateMessageOptions.md#image)
- [nonce](Types.PaginateMessageOptions.md#nonce)
- [pages](Types.PaginateMessageOptions.md#pages)
- [refresh](Types.PaginateMessageOptions.md#refresh)
- [reply](Types.PaginateMessageOptions.md#reply)
- [stickers](Types.PaginateMessageOptions.md#stickers)
- [threadId](Types.PaginateMessageOptions.md#threadid)
- [thumbnail](Types.PaginateMessageOptions.md#thumbnail)
- [time](Types.PaginateMessageOptions.md#time)
- [title](Types.PaginateMessageOptions.md#title)
- [tts](Types.PaginateMessageOptions.md#tts)
- [url](Types.PaginateMessageOptions.md#url)

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

### author

• `Optional` **author**: `APIEmbedAuthor`

Author information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure

#### Inherited from

Omit.author

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:784

___

### color

• `Optional` **color**: `number`

Color code of the embed

#### Inherited from

Omit.color

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:748

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

For sending `DeletableMessage`s

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[delete](Types.MessageOptions.md#delete)

#### Defined in

[src/types/index.ts:89](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L89)

___

### description

• `Optional` **description**: `string`

Description of embed

Length limit: 4096 characters

#### Inherited from

Omit.description

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:736

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

[src/types/index.ts:95](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L95)

___

### footer

• `Optional` **footer**: `APIEmbedFooter`

Footer information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

#### Inherited from

Omit.footer

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:754

___

### image

• `Optional` **image**: `APIEmbedImage`

Image information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure

#### Inherited from

Omit.image

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:760

___

### nonce

• `Optional` **nonce**: `string` \| `number`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[nonce](Types.MessageOptions.md#nonce)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4750

___

### pages

• **pages**: (`APIEmbed` \| `JSONEncodable`<`APIEmbed`\>)[]

Specific page data for more customization.

#### Defined in

[src/types/index.ts:105](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L105)

___

### refresh

• `Optional` **refresh**: `boolean`

Whether or not to allow the user to refresh the embed.

#### Defined in

[src/types/index.ts:99](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L99)

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

### thumbnail

• `Optional` **thumbnail**: `APIEmbedThumbnail`

Thumbnail information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure

#### Inherited from

Omit.thumbnail

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:766

___

### time

• `Optional` **time**: `number`

Idle timeout for `DeletableMessages`s

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[time](Types.MessageOptions.md#time)

#### Defined in

[src/types/index.ts:92](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L92)

___

### title

• `Optional` **title**: `string`

Title of embed

Length limit: 256 characters

#### Inherited from

Omit.title

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:722

___

### tts

• `Optional` **tts**: `boolean`

#### Inherited from

[MessageOptions](Types.MessageOptions.md).[tts](Types.MessageOptions.md#tts)

#### Defined in

node_modules/discord.js/typings/index.d.ts:4749

___

### url

• `Optional` **url**: `string`

URL of embed

#### Inherited from

Omit.url

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:740

## Methods

### pageGen

▸ `Optional` **pageGen**(): `void` \| `Promise`<[`MessageOptions`](Types.MessageOptions.md)\>

Function to customize the paginate message sent.

#### Returns

`void` \| `Promise`<[`MessageOptions`](Types.MessageOptions.md)\>

#### Defined in

[src/types/index.ts:103](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L103)

___

### refreshData

▸ `Optional` **refreshData**(): `unknown`

The function which refreshes the data.

#### Returns

`unknown`

#### Defined in

[src/types/index.ts:101](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L101)
