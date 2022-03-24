[jag-cmd-handler](../README.md) / [Exports](../modules.md) / [Types](../modules/Types.md) / CommandPermissions

# Interface: CommandPermissions

[Types](../modules/Types.md).CommandPermissions

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [botOwnerOnly](Types.CommandPermissions.md#botowneronly)
- [client](Types.CommandPermissions.md#client)
- [default](Types.CommandPermissions.md#default)
- [serverOwnerOnly](Types.CommandPermissions.md#serverowneronly)
- [user](Types.CommandPermissions.md#user)

### Methods

- [build](Types.CommandPermissions.md#build)

## Properties

### botOwnerOnly

• `Optional` **botOwnerOnly**: `boolean`

#### Defined in

[src/types/index.ts:78](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L78)

___

### client

• `Optional` **client**: (``"CreateInstantInvite"`` \| ``"KickMembers"`` \| ``"BanMembers"`` \| ``"Administrator"`` \| ``"ManageChannels"`` \| ``"ManageGuild"`` \| ``"AddReactions"`` \| ``"ViewAuditLog"`` \| ``"PrioritySpeaker"`` \| ``"Stream"`` \| ``"ViewChannel"`` \| ``"SendMessages"`` \| ``"SendTTSMessages"`` \| ``"ManageMessages"`` \| ``"EmbedLinks"`` \| ``"AttachFiles"`` \| ``"ReadMessageHistory"`` \| ``"MentionEveryone"`` \| ``"UseExternalEmojis"`` \| ``"ViewGuildInsights"`` \| ``"Connect"`` \| ``"Speak"`` \| ``"MuteMembers"`` \| ``"DeafenMembers"`` \| ``"MoveMembers"`` \| ``"UseVAD"`` \| ``"ChangeNickname"`` \| ``"ManageNicknames"`` \| ``"ManageRoles"`` \| ``"ManageWebhooks"`` \| ``"ManageEmojisAndStickers"`` \| ``"UseApplicationCommands"`` \| ``"RequestToSpeak"`` \| ``"ManageEvents"`` \| ``"ManageThreads"`` \| ``"CreatePublicThreads"`` \| ``"CreatePrivateThreads"`` \| ``"UseExternalStickers"`` \| ``"SendMessagesInThreads"`` \| ``"StartEmbeddedActivities"`` \| ``"ModerateMembers"``)[]

Permissions for Bot in order to execute the command.

#### Defined in

[src/types/index.ts:76](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L76)

___

### default

• **default**: `boolean`

Whether to enable this command by default or set using build() - For ApplicationCommand only.

#### Defined in

[src/types/index.ts:80](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L80)

___

### serverOwnerOnly

• `Optional` **serverOwnerOnly**: `boolean`

#### Defined in

[src/types/index.ts:77](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L77)

___

### user

• `Optional` **user**: (``"CreateInstantInvite"`` \| ``"KickMembers"`` \| ``"BanMembers"`` \| ``"Administrator"`` \| ``"ManageChannels"`` \| ``"ManageGuild"`` \| ``"AddReactions"`` \| ``"ViewAuditLog"`` \| ``"PrioritySpeaker"`` \| ``"Stream"`` \| ``"ViewChannel"`` \| ``"SendMessages"`` \| ``"SendTTSMessages"`` \| ``"ManageMessages"`` \| ``"EmbedLinks"`` \| ``"AttachFiles"`` \| ``"ReadMessageHistory"`` \| ``"MentionEveryone"`` \| ``"UseExternalEmojis"`` \| ``"ViewGuildInsights"`` \| ``"Connect"`` \| ``"Speak"`` \| ``"MuteMembers"`` \| ``"DeafenMembers"`` \| ``"MoveMembers"`` \| ``"UseVAD"`` \| ``"ChangeNickname"`` \| ``"ManageNicknames"`` \| ``"ManageRoles"`` \| ``"ManageWebhooks"`` \| ``"ManageEmojisAndStickers"`` \| ``"UseApplicationCommands"`` \| ``"RequestToSpeak"`` \| ``"ManageEvents"`` \| ``"ManageThreads"`` \| ``"CreatePublicThreads"`` \| ``"CreatePrivateThreads"`` \| ``"UseExternalStickers"`` \| ``"SendMessagesInThreads"`` \| ``"StartEmbeddedActivities"`` \| ``"ModerateMembers"``)[]

Permissions for Users in order to execute the command.

#### Defined in

[src/types/index.ts:74](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L74)

## Methods

### build

▸ `Optional` **build**(`command`, `guild`): `ApplicationCommandPermissionData`[]

Function to build command permissions - For ApplicationCommand only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `ApplicationCommand`<{}\> |
| `guild` | `Guild` |

#### Returns

`ApplicationCommandPermissionData`[]

#### Defined in

[src/types/index.ts:82](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/types/index.ts#L82)
