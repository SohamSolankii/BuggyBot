import dotenv from 'dotenv';
dotenv.config();

import shortUrl from "node-url-shortener";

import { Client, GatewayIntentBits, Message } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (Message) => {
  if (Message.author.bot) return;

  if(Message.content.startsWith('create')) {
    const url = Message.content.split(' ')[1];
    shortUrl.short(url, function (err, url) {
      return Message.reply({
        content: 'Generating short ID for ' + url
      })
    });
  }
  else{
    console.log(Message.content);
    Message.reply({
      content: "Hi from Buggy Bot!!",
    });
  }
});

client.on('interactionCreate', interaction => {
  console.log(interaction);
  interaction.reply('Pong Babyyy!');
})

client.login(process.env.TOKEN);