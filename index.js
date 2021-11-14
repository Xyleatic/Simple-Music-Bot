const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`);
});

const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
require('discord-buttons')(bot);
const {buttube} = require('buttube')
bot.buttube = new buttube(bot, "mongodb url")
const config = require('./config.json');
const { loadCommands } = require('./utils/loadCommands');
bot.on('clickButton', async(button) => {
  bot.buttube.button(button)
})
require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);


bot.on("message", async message => {
const prefix =  "+"

  if (message.content === prefix + 'help') {
  message.channel.send
(`
  > **__My Commands-__**
  
  >\`setup\`
  \`play\`
`)

  }


})

bot.login(config.token);
