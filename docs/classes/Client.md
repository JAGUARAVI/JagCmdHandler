[jag-cmd-handler](../README.md) / [Exports](../modules.md) / Client

# Class: Client

## Hierarchy

- `Client`

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [application](Client.md#application)
- [applicationCommandHandler](Client.md#applicationcommandhandler)
- [applicationCommands](Client.md#applicationcommands)
- [channels](Client.md#channels)
- [commands](Client.md#commands)
- [data](Client.md#data)
- [debug](Client.md#debug)
- [events](Client.md#events)
- [guilds](Client.md#guilds)
- [log](Client.md#log)
- [messages](Client.md#messages)
- [options](Client.md#options)
- [readyTimestamp](Client.md#readytimestamp)
- [resolve](Client.md#resolve)
- [rest](Client.md#rest)
- [shard](Client.md#shard)
- [sweepers](Client.md#sweepers)
- [textCommandHandler](Client.md#textcommandhandler)
- [token](Client.md#token)
- [user](Client.md#user)
- [users](Client.md#users)
- [utils](Client.md#utils)
- [voice](Client.md#voice)
- [ws](Client.md#ws)
- [captureRejectionSymbol](Client.md#capturerejectionsymbol)
- [captureRejections](Client.md#capturerejections)
- [defaultMaxListeners](Client.md#defaultmaxlisteners)
- [errorMonitor](Client.md#errormonitor)

### Accessors

- [emojis](Client.md#emojis)
- [readyAt](Client.md#readyat)
- [uptime](Client.md#uptime)

### Methods

- [addListener](Client.md#addlistener)
- [destroy](Client.md#destroy)
- [emit](Client.md#emit)
- [eventNames](Client.md#eventnames)
- [fetchGuildPreview](Client.md#fetchguildpreview)
- [fetchGuildTemplate](Client.md#fetchguildtemplate)
- [fetchGuildWidget](Client.md#fetchguildwidget)
- [fetchInvite](Client.md#fetchinvite)
- [fetchPremiumStickerPacks](Client.md#fetchpremiumstickerpacks)
- [fetchSticker](Client.md#fetchsticker)
- [fetchVoiceRegions](Client.md#fetchvoiceregions)
- [fetchWebhook](Client.md#fetchwebhook)
- [generateInvite](Client.md#generateinvite)
- [getMaxListeners](Client.md#getmaxlisteners)
- [init](Client.md#init)
- [isReady](Client.md#isready)
- [listenerCount](Client.md#listenercount)
- [listeners](Client.md#listeners)
- [login](Client.md#login)
- [off](Client.md#off)
- [on](Client.md#on)
- [once](Client.md#once)
- [prependListener](Client.md#prependlistener)
- [prependOnceListener](Client.md#prependoncelistener)
- [rawListeners](Client.md#rawlisteners)
- [registerApplicationCommands](Client.md#registerapplicationcommands)
- [registerCommand](Client.md#registercommand)
- [registerCommands](Client.md#registercommands)
- [registerEvents](Client.md#registerevents)
- [removeAllListeners](Client.md#removealllisteners)
- [removeListener](Client.md#removelistener)
- [setMaxListeners](Client.md#setmaxlisteners)
- [toJSON](Client.md#tojson)
- [unregisterApplicationCommands](Client.md#unregisterapplicationcommands)
- [getEventListeners](Client.md#geteventlisteners)
- [listenerCount](Client.md#listenercount)
- [on](Client.md#on)
- [once](Client.md#once)

## Constructors

### constructor

• **new Client**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ClientOptions`](../interfaces/Types.ClientOptions.md) |

#### Overrides

BaseClient.constructor

#### Defined in

[src/classes/Client.ts:72](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L72)

## Properties

### application

• **application**: `ClientApplication`

#### Inherited from

BaseClient.application

#### Defined in

node_modules/discord.js/typings/index.d.ts:686

___

### applicationCommandHandler

• **applicationCommandHandler**: [`CommandHandler`](CommandHandler.md)

#### Defined in

[src/classes/Client.ts:68](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L68)

___

### applicationCommands

• **applicationCommands**: `Collection`<`string`, `Collection`<`string`, `ApplicationCommand`<{ `guild?`: `GuildResolvable`  }\>\>\>

#### Defined in

[src/classes/Client.ts:66](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L66)

___

### channels

• **channels**: `ChannelManager`

#### Inherited from

BaseClient.channels

#### Defined in

node_modules/discord.js/typings/index.d.ts:687

___

### commands

• **commands**: `Collection`<`string`, [`BaseCommand`](BaseCommand.md)\>

#### Defined in

[src/classes/Client.ts:64](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L64)

___

### data

• **data**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owners` | `string`[] |

#### Defined in

[src/classes/Client.ts:54](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L54)

___

### debug

• **debug**: `boolean`

#### Defined in

[src/classes/Client.ts:59](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L59)

___

### events

• **events**: `Collection`<`string`, [`BaseEvent`](BaseEvent.md)\>

#### Defined in

[src/classes/Client.ts:63](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L63)

___

### guilds

• **guilds**: `GuildManager`

#### Inherited from

BaseClient.guilds

#### Defined in

node_modules/discord.js/typings/index.d.ts:689

___

### log

• **log**: `Object` = `Utils.logger`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | (`text`: `any`, `str`: `string`) => `void` |
| `error` | (`text`: `any`, `str`: `string`) => `void` |
| `info` | (`text`: `any`, `str`: `string`) => `void` |
| `success` | (`text`: `any`, `str`: `string`) => `void` |
| `warn` | (`text`: `any`, `str`: `string`) => `void` |

#### Defined in

[src/classes/Client.ts:61](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L61)

___

### messages

• **messages**: [`Messages`](Messages.md)

#### Defined in

[src/classes/Client.ts:70](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L70)

___

### options

• **options**: `ClientOptions`

#### Inherited from

BaseClient.options

#### Defined in

node_modules/discord.js/typings/index.d.ts:690

___

### readyTimestamp

• **readyTimestamp**: `number`

#### Inherited from

BaseClient.readyTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:692

___

### resolve

• **resolve**: [`Resolve`](Resolve.md)

#### Defined in

[src/classes/Client.ts:69](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L69)

___

### rest

• **rest**: `REST`

#### Inherited from

BaseClient.rest

#### Defined in

node_modules/discord.js/typings/index.d.ts:349

___

### shard

• **shard**: `ShardClientUtil`

#### Inherited from

BaseClient.shard

#### Defined in

node_modules/discord.js/typings/index.d.ts:694

___

### sweepers

• **sweepers**: `Sweepers`

#### Inherited from

BaseClient.sweepers

#### Defined in

node_modules/discord.js/typings/index.d.ts:693

___

### textCommandHandler

• **textCommandHandler**: [`CommandHandler`](CommandHandler.md)

#### Defined in

[src/classes/Client.ts:67](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L67)

___

### token

• **token**: `string`

#### Inherited from

BaseClient.token

#### Defined in

node_modules/discord.js/typings/index.d.ts:695

___

### user

• **user**: `ClientUser`

#### Inherited from

BaseClient.user

#### Defined in

node_modules/discord.js/typings/index.d.ts:697

___

### users

• **users**: `UserManager`

#### Inherited from

BaseClient.users

#### Defined in

node_modules/discord.js/typings/index.d.ts:698

___

### utils

• **utils**: typeof [`Utils`](Utils.md) = `Utils`

#### Defined in

[src/classes/Client.ts:60](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L60)

___

### voice

• **voice**: `ClientVoiceManager`

#### Inherited from

BaseClient.voice

#### Defined in

node_modules/discord.js/typings/index.d.ts:699

___

### ws

• **ws**: `WebSocketManager`

#### Inherited from

BaseClient.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:700

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Client.md#capturerejectionsymbol)

#### Inherited from

BaseClient.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

BaseClient.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

BaseClient.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:279

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Client.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

BaseClient.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:272

## Accessors

### emojis

• `get` **emojis**(): `BaseGuildEmojiManager`

#### Returns

`BaseGuildEmojiManager`

#### Inherited from

BaseClient.emojis

#### Defined in

node_modules/discord.js/typings/index.d.ts:688

___

### readyAt

• `get` **readyAt**(): `If`<`Ready`, `Date`, ``null``\>

#### Returns

`If`<`Ready`, `Date`, ``null``\>

#### Inherited from

BaseClient.readyAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:691

___

### uptime

• `get` **uptime**(): `If`<`Ready`, `number`, ``null``\>

#### Returns

`If`<`Ready`, `number`, ``null``\>

#### Inherited from

BaseClient.uptime

#### Defined in

node_modules/discord.js/typings/index.d.ts:696

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Client`](Client.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.addListener

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

BaseClient.destroy

#### Defined in

node_modules/discord.js/typings/index.d.ts:701

___

### emit

▸ **emit**<`K`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `ClientEvents`[`K`] |

#### Returns

`boolean`

#### Inherited from

BaseClient.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:727

▸ **emit**<`S`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `...args` | `unknown`[] |

#### Returns

`boolean`

#### Inherited from

BaseClient.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:728

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

BaseClient.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`): `Promise`<`GuildPreview`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`GuildPreview`\>

#### Inherited from

BaseClient.fetchGuildPreview

#### Defined in

node_modules/discord.js/typings/index.d.ts:702

___

### fetchGuildTemplate

▸ **fetchGuildTemplate**(`template`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

BaseClient.fetchGuildTemplate

#### Defined in

node_modules/discord.js/typings/index.d.ts:704

___

### fetchGuildWidget

▸ **fetchGuildWidget**(`guild`): `Promise`<`Widget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

BaseClient.fetchGuildWidget

#### Defined in

node_modules/discord.js/typings/index.d.ts:709

___

### fetchInvite

▸ **fetchInvite**(`invite`, `options?`): `Promise`<`Invite`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invite` | `string` |
| `options?` | `ClientFetchInviteOptions` |

#### Returns

`Promise`<`Invite`\>

#### Inherited from

BaseClient.fetchInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:703

___

### fetchPremiumStickerPacks

▸ **fetchPremiumStickerPacks**(): `Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Returns

`Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Inherited from

BaseClient.fetchPremiumStickerPacks

#### Defined in

node_modules/discord.js/typings/index.d.ts:707

___

### fetchSticker

▸ **fetchSticker**(`id`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

BaseClient.fetchSticker

#### Defined in

node_modules/discord.js/typings/index.d.ts:706

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): `Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Returns

`Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Inherited from

BaseClient.fetchVoiceRegions

#### Defined in

node_modules/discord.js/typings/index.d.ts:705

___

### fetchWebhook

▸ **fetchWebhook**(`id`, `token?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `token?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

BaseClient.fetchWebhook

#### Defined in

node_modules/discord.js/typings/index.d.ts:708

___

### generateInvite

▸ **generateInvite**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InviteGenerationOptions` |

#### Returns

`string`

#### Inherited from

BaseClient.generateInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:710

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Client.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

BaseClient.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### init

▸ **init**(): `Promise`<`any`\>

Initiates the Client. Necessary for basic functions (function added in JagCmdHandler) to work.

#### Returns

`Promise`<`any`\>

#### Defined in

[src/classes/Client.ts:179](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L179)

___

### isReady

▸ **isReady**(): this is Client<true\>

#### Returns

this is Client<true\>

#### Inherited from

BaseClient.isReady

#### Defined in

node_modules/discord.js/typings/index.d.ts:712

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

BaseClient.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

BaseClient.listeners

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### login

▸ **login**(`token?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

BaseClient.login

#### Defined in

node_modules/discord.js/typings/index.d.ts:711

___

### off

▸ **off**<`K`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:730

▸ **off**<`S`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:731

___

### on

▸ **on**<`K`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:715

▸ **on**<`S`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:716

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:721

▸ **once**<`S`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:722

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Client`](Client.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Client`](Client.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

BaseClient.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### registerApplicationCommands

▸ **registerApplicationCommands**(`guild?`): `Promise`<`Collection`<`string`, `ApplicationCommand`<{ `guild?`: `GuildResolvable`  }\>\>\>

Registers application commands from Client#commands globally or for a guild if it is specified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild?` | `Guild` |

#### Returns

`Promise`<`Collection`<`string`, `ApplicationCommand`<{ `guild?`: `GuildResolvable`  }\>\>\>

#### Defined in

[src/classes/Client.ts:122](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L122)

___

### registerCommand

▸ **registerCommand**(`dir`, `category`): `Promise`<`string` \| `boolean`\>

Registers a command from file path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `category` | `string` |

#### Returns

`Promise`<`string` \| `boolean`\>

#### Defined in

[src/classes/Client.ts:86](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L86)

___

### registerCommands

▸ **registerCommands**(`dir`): `Promise`<`Collection`<`string`, [`BaseCommand`](BaseCommand.md)\>\>

Registers commands from directory path

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`<`Collection`<`string`, [`BaseCommand`](BaseCommand.md)\>\>

#### Defined in

[src/classes/Client.ts:107](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L107)

___

### registerEvents

▸ **registerEvents**(`dir`, `target?`): `Promise`<`void`\>

Regsiters events from directory path

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `target?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/classes/Client.ts:154](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L154)

___

### removeAllListeners

▸ **removeAllListeners**<`K`\>(`event?`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `K` |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:736

▸ **removeAllListeners**<`S`\>(`event?`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Exclude`<`S`, keyof `ClientEvents`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:737

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Client`](Client.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Client`](Client.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Client`](Client.md)

#### Inherited from

BaseClient.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

BaseClient.toJSON

#### Defined in

node_modules/discord.js/typings/index.d.ts:713

___

### unregisterApplicationCommands

▸ **unregisterApplicationCommands**(`guild?`): `Promise`<`Collection`<`string`, `ApplicationCommand`<{ `guild?`: `GuildResolvable`  }\>\>\>

Unregisters application commands globally or for a guild if it is specified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild?` | `Guild` |

#### Returns

`Promise`<`Collection`<`string`, `ApplicationCommand`<{ `guild?`: `GuildResolvable`  }\>\>\>

#### Defined in

[src/classes/Client.ts:146](https://github.com/JAGUARAVI/JagCmdHandler/blob/f4e0b8f/src/classes/Client.ts#L146)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

BaseClient.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

BaseClient.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

BaseClient.on

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

BaseClient.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

BaseClient.once

#### Defined in

node_modules/@types/node/events.d.ts:158
