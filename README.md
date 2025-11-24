# PoppyBot
PoppyBot is my Discord Bot, for both hobbyst and educational purposes. 
She is not meant to be used widely or on other servers, but if you want any ideas or functionality that she has, some of it is exposed here so you can both better undersand or even make your own build of her.

This project isn't by any means, related to Riot Games. I Just main Poppy and tought it was a way to honor such a lovely character.

## Setup 
PoppyBOT could (theoretically) be run on a container, but for my use case, I just ran her as a node service on Ubuntu. This way, when the server is on, she is too. I've included the dockerfile if you want to test it.

After clonning the repo, the first thing you should do is create a file at the same folder as the index.js called ``config.json``. It need to look like this:
```config.json
{
    "token": "Your BOT token here",
    "clientId": "Your client ID here",
    "guildId": "Your bot development server here"
}
```
The next step is just run ``node run index.js`` and voilà.

## Project Network diagram
Here at home (and to some extend, to some friends too), PoppyBOT is a part of a bigger ecossystem. Nowadays, she is mainly used to help keep track of a Locally hosted PaperMC server, telling me or anyone who calls her the status of the server or starting it in case of it being offline, since i wouldn't want to expose the whole ubuntu server over the internet. Letting her do the heavy lifting adds a extra security layer and also save me from logging into the homeserver interface everytime I want to check both the MC server status or starting it after booting up the ubuntu server.

<img width="5334" height="3000" alt="Untitled-1" src="https://github.com/user-attachments/assets/a55e2af8-9ea1-4538-b117-a9ab66cce5fc" />

The diagram shows how the ecosystem is built and where each part is connected. This saves-me time, since I can simply tell my friends to run a command on Discord to boot up the MC server, making it almost independent from me.

## Commands 
PoppyBOT is built used slash-commands, and when updating or adding a new one on ``commands/utility/`` you should also run ``node deploy-commands.js`` right after, so your changes are effectively sent and deployed.

- ``/mc-start`` - Start the minecraft server. Duh.
- ``/mc-status`` - Check then actual mc container status. 
- ``/ping`` - Doesn't really ping anything, Answer with Pong. Used to see if the bost is listening. This can be helpful while getting the bot to work.
- ``/server`` - Answer with info on the actual server.
- ``/user`` - Answer with the info on the user who sent the command.
