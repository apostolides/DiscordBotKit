const ENV = require('dotenv');
ENV.config();

const Discord = require('discord.js');
const client = new Discord.Client();
const messageHandler = require('./handlers/messageHandler.js');

const GENERAL_CHANNEL_NAME = 'general';
const BOT_TOKEN = process.env.DISCORD_CLIENT_SECRET;

client.on('guildMemberAdd', newMember => {
  const channel = member.guild.channels.cache.find(ch => ch.name === GENERAL_CHANNEL_NAME);
  if(channel){
    channel.send(`Welcome ${newMember}`);
  }
});

client.on('message',(message)=>{
  messageHandler.handleMessage(client,message);
});

client.login(BOT_TOKEN);
