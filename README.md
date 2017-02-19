# Card :: Keeper

This application is used to keep track of your Magic: The Gathering inventory. This application offers:

-   Search capabilities for any card in MTG.
-   Storage options for keeping cards and counts that you own.
-   Previews for the card, including images and metadata.

## How to use?
If you are building from source, you need to clone and install:
```bash
> git clone http://github.com/navx2810/card-keeper.git
> cd card-keeper && npm i
```
Alternatively, if you have another package manager, like [yarn](https://yarnpkg.com), you could install it like so:
```bash
> git clone http://github.com/navx2810/card-keeper.git
> cd card-keeper && yarn
```

## Commands
You can view the commands in the [package.json](./package.json) file

<dl>
    <dt>dev</dt>
    <dd>Spins up the development server and starts listening for changes</dd>

   <dt>app</dt>
    <dd>Launches electron and hooks into the dev server</dd>
    
<dt>dist | dist[win:mac:linux]</dt>
<dd>Bundles the application into the dist directory under app</dd>
</dl>
