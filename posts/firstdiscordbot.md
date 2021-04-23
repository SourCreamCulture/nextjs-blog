---
title: 'How to make a discord bot'
date: '2021-04-22'
---

In this blog post I will be explaining how to create a discord bot with discord.js and nodejs v14.x.

First we are going to go to [Discord](https://discord.com) and create an account.

Next go to the [discord developer site](https://discord.com/developers/applications) and create an application.

Go to the bot tab on the left and create a bot for the application.

Now go to the Oauth tab on the left right above the bot tab and click on the bot scope and below that click on the administrator permission. You should see a link above the section, copy that link and paste it in a browser tab. This will let you invite your bot to a server, you can choose any server you want.

Then go back to the [discord developer site](https://discord.com/developers/applications) and the application you were just on. Now go to the bot tab again that you created the bot on before. Click on the copy button below the place where it says bot token or something like that. This is your bot token that you will use to login to your bot to access discord.

Lets go over quickly what I just explained.

- **Create a Discord account**
- **Go to Discord dev site and create an app**
- **Create a bot for the application**
- **Create a bot invite link to invite your bot**
- **Go back to the Discord dev site and find your bot token**

Now go to the [nodejs download site](https://nodejs.org/en/download/) and download nodejs onto your machine.

Then go to the [visual studio code download site](https://code.visualstudio.com/download) and download vscode onto your machine.

Now to make things simpler create a folder on your desktop called "discord-bot", then open up vscode and you will probably see a welcome screen. Look at the welcome screen and there should be a button that says open a project or folder or something like that. Click on that button and choose the folder you just make on your desktop.

When the workspace has shown up, open the terminal in vscode and run the command "npm init" and press enter for all of the options it gives you in the terminal. Now run the command "npm install discord.js"  in the terminal that you just used.

Create a file in your workspace called "index.js", once you have that done copy and paste in the code below.

```js
const discord = require('discord.js');
const client = new discord.Client();

const token = 'place bot token here';
const prefix = '!';

client.on((message), 'message' => {
  if (message.content.startsWith(`${prefix}ping`)){
    message.channel.send(`Pong! ${client.ws.ping}ms`)
  }
})

client.login(token);
```

Now once you have copied that in replace the text in the variable "token" with the bot token you copied earlier.

Finally you are going to run the command "node index.js" in the terminal you have been using. This will start up your bot and log it in. Go to the discord server you invited the bot to earlier and go in a text channel and type "!ping" and the bot should reply with "Pong!" and then a number with ms after it, that number is the bots actual ping, example reply "Pong! 45ms".

You now have a working discord bot! I would recommend if you want to learn more go to youtube and watch some videos and join some coding discord servers so that if you encounter errors you can ask questions there. I will be creating more blog posts about discord bots and more functionalities for discord bots in the future so look out for those!